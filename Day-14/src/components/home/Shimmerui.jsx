const Shimmer = () => {
    return (
      <>
        {Array(8)
          .fill("")
          .map((_, index) => (
            <div key={index} className="w-[290px] h-[390px] rounded-lg shadow-lg m-4 p-4 bg-zinc-100 transition-transform duration-300 ease-in-out transform hover:scale-105">
              <div className="w-[260px] h-[200px] bg-gray-200 animate-pulse"></div>
              <br />
              <h3 className="font-bold text-xl  truncate bg-gray-200 h-8 w-3/4 animate-pulse"></h3>
              <h4 className="truncate bg-gray-200 h-6 w-2/4 animate-pulse"></h4>
              <h6 className="truncate bg-gray-200 h-4 w-1/4 animate-pulse"></h6>
              <h5 className="truncate bg-gray-200 h-4 w-3/4 animate-pulse"></h5>
              <span className="inline-block bg-green-500 rounded-full p-1 px-4 text-white animate-pulse">
                👌
              </span>
            </div>
          ))}
      </>
    );
  };
  
  export default Shimmer;
  