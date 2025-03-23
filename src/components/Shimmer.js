const Shimmer = () => {
    return (
      <div className="w-[200px] h-[300px] bg-gray-800 animate-pulse rounded-lg m-2 flex flex-col items-center justify-center">
        <div className="w-[180px] h-[250px] bg-gray-700 rounded-lg"></div>
        <div className="w-[150px] h-[20px] bg-gray-700 mt-2 rounded"></div>
      </div>
    );
  };
  
  export default Shimmer;
  