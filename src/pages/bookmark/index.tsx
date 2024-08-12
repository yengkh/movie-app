import { useSelector } from "react-redux";
import { RootState } from "../../redux";
import MovieDetail from "../home/MovieDetail";
import RemoveBookMark from "./RemoveBookMark";
import { useNavigate } from "react-router-dom";

const BookMarkPage = () => {
  const navigate = useNavigate();
  const movieItem = useSelector((store: RootState) => store.movie.items);
  if (movieItem.length === 0) {
    return (
      <div className="flex pt-28 flex-col justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-20 lg:size-32"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
          />
        </svg>
        <p>No items in Bookmark!</p>
      </div>
    );
  }

  return (
    <>
      <p>Your Faorites</p>
      <div className="mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-2 md:m-4">
        {movieItem.map((items) => (
          <div key={items.id} className="relative cursor-pointer">
            <RemoveBookMark id={items.id} />
            <div
              className="overflow-hidden rounded-md"
              onClick={() => navigate(`/movie-detail/${items.movie_name}`)}
            >
              <img
                src={items.movie_image}
                alt=""
                className="w-full h-full hover:scale-105 transition-transform transform duration-700 object-cover"
              />
              <MovieDetail items={items} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BookMarkPage;
