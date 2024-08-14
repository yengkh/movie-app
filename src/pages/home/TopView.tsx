import { useNavigate } from "react-router-dom";
import BookMark from "./BookMark";
import MovieDetail from "./MovieDetail";
import { useDispatch } from "react-redux";
import { changeActiveLink } from "../../redux/SetActiveLink";
import { DotSpinner } from "@uiball/loaders";
import { TopViewTypes } from "../../types/types";
type Props = {
  topMovie: TopViewTypes[];
  currentPage: number;
};

const TopView = ({ topMovie, currentPage }: Props) => {
  const dispath = useDispatch();
  const navigate = useNavigate();

  if (currentPage > 1) {
    return <div className=""></div>;
  }

  if (topMovie.length !== 0) {
    setTimeout(() => {
      return (
        <div className="flex pt-20 flex-col justify-center gap-3 items-center">
          <DotSpinner color="#f8eded" />
          <p>Loading...</p>
        </div>
      );
    }, 800);
  }
  return (
    <section className="overflow-x-auto overflow-y-hidden flex flex-row space-x-4 m-2 md:m-4">
      {topMovie.map((items) => (
        <div key={items.id} className="relative mb-3 cursor-pointer">
          <BookMark items={items} />
          <div
            className="min-w-[150px] lg:min-w-[200px] h-64 lg:h-72 overflow-hidden rounded-md"
            onClick={() => {
              navigate(`/movie-detail/${encodeURIComponent(items.movie_name)}`);
              dispath(changeActiveLink(""));
            }}
          >
            <img
              src={items.movie_image}
              alt={items.movie_name}
              className="h-full w-full object-cover transition-transform duration-700 transform hover:scale-105"
            />
            <MovieDetail items={items} />
          </div>
        </div>
      ))}
    </section>
  );
};

export default TopView;
