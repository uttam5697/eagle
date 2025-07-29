import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white text-center">
      <h1 className="text-6xl font-bold text-gray-800 drop-shadow-md">
        404
      </h1>
      <p className="mt-4 max-w-md text-2xl font-semibold text-gray-600">
        The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="mt-6 inline-block rounded-full bg-gray-200 px-6 py-3 text-gray-600 transition-all hover:bg-gray-300"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;

