import MovieCard from "./MovieCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const MovieList = ({ title, movie }) => {
  return (
    <div className="p-1 pb-[20px]">
      <h1 className="text-xl font-bold mb-4 pl-[8px] text-white">{title}</h1>
      <Swiper
        slidesPerView={10}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <div
          draggable="false">
          {movie?.map((movie) => (
            <SwiperSlide key={movie.id}>
              <MovieCard list={movie} />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default MovieList;
