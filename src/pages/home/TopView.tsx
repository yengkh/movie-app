import { useNavigate } from "react-router-dom";
import { topViewMovie } from "../../assets/topview/topview";
import BookMark from "./BookMark";
import MovieDetail from "./MovieDetail";
import { useDispatch } from "react-redux";
import { changeActiveLink } from "../../redux/SetActiveLink";

const TopView = () => {
  const dispath = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="overflow-x-auto overflow-y-hidden flex flex-row space-x-4 m-2 md:m-4">
      {topViewMovie.map((items) => (
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
    </div>
  );
};

export default TopView;
