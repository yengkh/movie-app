import { useNavigate } from "react-router-dom";
import { Movies } from "../../assets/movies/movies";
import BookMark from "../home/BookMark";
import MovieDetail from "../home/MovieDetail";
import { useDispatch } from "react-redux";
import { changeActiveLink } from "../../redux/SetActiveLink";
import { TopViewTypes } from "../../types/types";
import { useEffect, useState } from "react";
import { DotSpinner } from "@uiball/loaders";

const MovicePage = () => {
  const dispath = useDispatch();
  const navigate = useNavigate();
  const [movie, setMovie] = useState<Array<TopViewTypes>>([]);
  useEffect(() => {
    setTimeout(() => {
      setMovie(Movies);
    }, 1000);
  }, []);
  if (movie.length === 0) {
    return (
      <div className="flex pt-48 flex-col justify-center gap-3 items-center">
        <DotSpinner color="#f8eded" />
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <div className="px-2">
      <p>Movies</p>
      <div className="mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-2 md:m-4">
        {movie.map((items) => (
          <div key={items.id} className="relative cursor-pointer">
            <BookMark items={items} />
            <div
              className="overflow-hidden rounded-md"
              onClick={() => {
                navigate(
                  `/movie-detail/${encodeURIComponent(items.movie_name)}`
                );
                dispath(changeActiveLink(""));
              }}
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
    </div>
  );
};

export default MovicePage;
