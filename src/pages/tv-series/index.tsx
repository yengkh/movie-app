import { useNavigate } from "react-router-dom";
import { TVSeriesImage } from "../../assets/tvseries/tvseries";
import BookMark from "../home/BookMark";
import MovieDetail from "../home/MovieDetail";
import { useDispatch } from "react-redux";
import { changeActiveLink } from "../../redux/SetActiveLink";
import { useEffect, useState } from "react";
import { TopViewTypes } from "../../types/types";
import { DotSpinner } from "@uiball/loaders";
import PagePagination from "../home/PagePagination";

const TVSeries = () => {
  const dispath = useDispatch();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [tvSeries, setTVSeries] = useState<Array<TopViewTypes>>([]);
  const [movieListPerPage, setMovieListPerPage] = useState<Array<TopViewTypes>>(
    []
  );
  const [moviePerPage] = useState<number>(12);
  const lastIndexOfMovie = currentPage * moviePerPage;
  const firstIndexOfMovie = lastIndexOfMovie - moviePerPage;

  useEffect(() => {
    setTimeout(() => {
      setMovieListPerPage(
        TVSeriesImage.slice(firstIndexOfMovie, lastIndexOfMovie)
      );
      setTVSeries(TVSeriesImage);
    }, 1000);
  }, [firstIndexOfMovie, lastIndexOfMovie]);

  if (tvSeries.length === 0) {
    return (
      <div className="flex pt-48 flex-col justify-center gap-3 items-center">
        <DotSpinner color="#f8eded" />
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <>
      <div className="px-2">
        <p>Movies</p>
        <div className="mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-2 md:m-4">
          {movieListPerPage.map((items) => (
            <div key={items.id} className="relative cursor-pointer">
              <BookMark items={items} />
              <div
                className="overflow-hidden rounded-md"
                onClick={() => {
                  navigate(`/movie-detail/${items.movie_name}`);
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
      <div className="py-10">
        <PagePagination
          currentPage={currentPage}
          moviePerPage={moviePerPage}
          setCurrentPage={setCurrentPage}
          totalMovie={tvSeries.length}
        />
      </div>
    </>
  );
};

export default TVSeries;
