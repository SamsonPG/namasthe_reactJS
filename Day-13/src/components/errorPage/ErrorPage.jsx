import { useRouteError,Link } from "react-router-dom";

const ErrorPage = () => {
  const { status, statusText } = useRouteError();

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-96 flex flex-col justify-center items-center bg-gray-100 rounded-lg shadow-lg m-4 p-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-red-600">{`Oops! ${status} error`}</h1>
          <h2 className="text-xl font-semibold text-gray-800">Something Went Wrong</h2>
          <h1 className="text-2xl font-semibold text-gray-700">{`${status}: ${statusText}`}</h1>
          <h3 className="rounded-lg border bg-white p-3 m-5 text-2xl font-bold transition duration-300 ease-in-out transform hover:bg-amber-400 hover:scale-105">
    <Link to="/">Back to Home</Link>
  </h3>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
