import { GoogleGenerativeAI } from "@google/generative-ai";
import { addSearchData, addSearchResult, setLoader } from "./searchSlice";
import useSearchMovie from "../Hooks/useSearchMovie";

export const gptSearch = async (searchTerm, dispatch) => {
    try {
        if (!searchTerm) return;

        const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GPT_KEY);
        const model = genAI.getGenerativeModel({ 
            model: "gemini-2.0-flash", 
            systemInstruction: "Act as a movie recommendation system and return only an array of 5 movie names, formatted exactly as movie1, movie2, movie3, movie4, movie5 without extra text or quotes." 
        });

        const result = await model.generateContent(searchTerm);
        const resultData = result.response.text();

        let movieNames = resultData.split(",").map(movie => movie.trim());

        const tmdbData = await Promise.all(
            movieNames.map(async (movie) => await useSearchMovie({ movieName: movie }))
        );
        const flatFinalData = tmdbData.flat();
        const uniqueMovies = flatFinalData.filter((movie, index, self) =>
            index === self.findIndex(m => m.title === movie.title)
        );

        dispatch(addSearchData(uniqueMovies));
        dispatch(addSearchResult(resultData));
        dispatch(setLoader(false));

    } catch (error) {
        console.error("Error fetching GPT search results:", error);
    }
};
