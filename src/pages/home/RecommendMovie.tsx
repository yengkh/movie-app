import MovieDetail from "./MovieDetail";
import BookMark from "./BookMark";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeActiveLink } from "../../redux/SetActiveLink";
import { TopViewTypes } from "../../types/types";
import { DotSpinner } from "@uiball/loaders";
import { useEffect } from "react";

type Props = {
  movieList: TopViewTypes[];
  currentPage: number;
};

const RecommendMovie = ({ movieList, currentPage }: Props) => {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 900);
  }, [currentPage]);
  const dispath = useDispatch();
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
      <section className="mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-2 md:m-4">
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
      </section>
    </>
  );
};

export default RecommendMovie;
