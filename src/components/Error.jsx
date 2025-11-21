import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="w-full min-h-screen bg-[#0d1117] flex items-center justify-center px-6">
      <div className="text-center">
        {/* Error Code */}
        <h1 className="text-8xl font-bold text-yellow-400 drop-shadow-lg">
          404
        </h1>

        {/* Message */}
        <h2 className="text-3xl font-semibold text-white mt-4">
          Oops! Page Not Found
        </h2>

        <p className="text-gray-400 mt-3 text-lg max-w-md mx-auto">
          The page you are looking for doesn't exist or has been moved. Maybe
          try going back to the homepage?
        </p>

        {/* Button */}
        <Link
          to="/"
          className="inline-block mt-8 px-8 py-3 bg-yellow-400 text-black font-semibold rounded-xl hover:bg-yellow-300 transition border border-yellow-500"
        >
          Go Home 🏠
        </Link>

        {/* Design Element */}
        <div className="mt-10 opacity-60">
          <img
            src="/error-foodmate.png" // optional decorative image if you want
            alt=""
            className="w-60 mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Error;
