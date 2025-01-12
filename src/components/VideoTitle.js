import { INFO, PLAY } from "../utils/utilsLinks";

const VideoTitle = ({ title, overview }) => {

  return (
    <div className="pt-80 pl-5 w-1/3 absolute z-10 ">
      <h1 className="p-2 m-2 text-4xl font-bold text-gray-200">{title}</h1>
      <p className="p-2 m-2 text-gray-200">{overview}</p>

      <div className="pl-2 flex">
        <button className="p-2 m-2 border-[1px] border-black rounded-md flex items-center gap-1 bg-slate-300 hover:bg-slate-400"><img className="w-4 " alt="play" src={PLAY}/> Play Now</button>
        <button className="p-2 m-2 border-[1px] border-black rounded-md flex items-center gap-1 bg-opacity-10 bg-slate-300 hover:bg-slate-300">More Info<img className="w-4 " alt="play" src={INFO}/></button>
      </div>
    </div>
  );
};

export default VideoTitle;
