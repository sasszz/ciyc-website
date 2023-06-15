import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container p-5 max-w-2xl mx-auto text-center my-20">
      <p>Page Not Found</p>
      <Link to="/">
        <button className="btn bg-bbblue text-white p-2 rounded-md hover:text-[#000000] mt-5">
          Back Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
