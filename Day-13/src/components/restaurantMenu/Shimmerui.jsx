const ShimmerRestaurantMenu = () => {
  return (
    <div className="flex">
      <div className="w-[290px] h-[420px] rounded-lg shadow-lg m-4 p-4 bg-zinc-100 shimmer-effect">
        <div className="w-[260px] h-[200px] shimmer-image-container"></div>
        <br />
        <h3 className="font-bold shimmer-text">Loading...</h3>
        <h3 className="font-bold shimmer-text">Loading...</h3>
        <h3 className="font-bold shimmer-text">Loading...</h3>
        <span className="inline-block bg-green-500 rounded-full p-1 px-4 mb-3 mt-2 text-white shimmer-text">
          Loading...
        </span>
      </div>
      <div className="p-5">
        <h1 className="font-bold">Restaurant Menu :</h1>
        <div data-testid="resMenu" className="m-2 flex flex-wrap justify-around justify-center">
          {Array(10).fill("").map((_, index) => (
            <div
              key={index}
              className="w-full flex border rounded-lg shadow-lg m-4 p-4 bg-zinc-100 shimmer-effect transition-transform duration-300 ease-in-out transform hover:scale-105"
            >
              <div>
                <div className="w-[100px] h-[100px] shimmer-image-container rounded-lg"></div>
                <button className="text-white rounded-lg font-bold bg-green-600 py-2 my-1 px-4 shimmer-text">
                  Loading...
                </button>
              </div>
              <div className="m-2">
                <h4 className="font-bold shimmer-text">Loading...</h4>
                <p className="shimmer-text">Loading...</p>
                <p className="font-bold shimmer-text">Loading.../-</p>
                <p className="shimmer-text">
                  <span className="inline-block bg-green-500 rounded-full p-1 px-4 mb-3 mt-2 text-white shimmer-text">
                    Loading...
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShimmerRestaurantMenu;
