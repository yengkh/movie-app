import { useNavigate } from "react-router-dom";
import BookMark from "../pages/home/BookMark";
import MovieDetail from "../pages/home/MovieDetail";
import { TopViewTypes } from "../types/types";
import { DotSpinner } from "@uiball/loaders";

type Props = {
  getMovies: TopViewTypes[];
};
const SearchPage = ({ getMovies }: Props) => {
  const navigate = useNavigate();
  if (getMovies.length === 0) {
    return (
      <div className="flex pt-48 flex-col justify-center gap-3 items-center">
        <DotSpinner color="#f8eded" />
        <p>Searching movie</p>
      </div>
    );
  }

  return (
    <div className="mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-2 md:m-4">
      {getMovies.map((items) => (
        <div key={items.id} className="relative cursor-pointer">
          <BookMark items={items} />
          <div
            className="overflow-hidden rounded-md"
            onClick={() =>
              navigate(`/movie-detail/${encodeURIComponent(items.movie_name)}`)
            }
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
  );
};

export default SearchPage;
