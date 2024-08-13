import { Movies } from "../../assets/movies/movies";
import { TopViewTypes } from "../../types/types";
import { TVSeriesImage } from "../../assets/tvseries/tvseries";
import { topViewMovie } from "../../assets/topview/topview";
import MovieDetail from "./MovieDetail";
import BookMark from "./BookMark";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeActiveLink } from "../../redux/SetActiveLink";
import { useEffect, useState } from "react";
import { DotSpinner } from "@uiball/loaders";

const RecommendMovie = () => {
  const dispath = useDispatch();
  const [movieList, setMovieItem] = useState<Array<TopViewTypes>>([]);
  useEffect(() => {
    const allMovies: Array<TopViewTypes> = [
      ...Movies,
      ...topViewMovie,
      ...TVSeriesImage,
    ];
    setTimeout(() => {
      setMovieItem(allMovies);
    }, 1000);
  }, []);
  const navigate = useNavigate();
  if (movieList.length === 0) {
    return (
      <div className="flex pt-48 flex-col justify-center gap-3 items-center">
        <DotSpinner color="#f8eded" />
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <>
      <div className="mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-2 md:m-4">
        {movieList.map((items) => (
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
      </div>{" "}
    </>
  );
};

export default RecommendMovie;
