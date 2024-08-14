import { useState, useEffect } from "react";
import { Movies } from "../../assets/movies/movies";
import { topViewMovie } from "../../assets/topview/topview";
import { TVSeriesImage } from "../../assets/tvseries/tvseries";
import { TopViewTypes } from "../../types/types";
import RecommendMovie from "./RecommendMovie";
import TopView from "./TopView";
import PagePagination from "./PagePagination";
import { useDispatch } from "react-redux";
import { getCurrentPage, getItems } from "../../redux/RecommentMovieList";

const HomePage = () => {
  // Recommend movie path
  const [movieList, setMovieItem] = useState<Array<TopViewTypes>>([]);
  const [totalMovie, setTotalMovie] = useState<Array<TopViewTypes>>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage] = useState<number>(12);
  const lastItemsIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemsIndex - itemsPerPage;
  useEffect(() => {
    const allMovies: Array<TopViewTypes> = [
      ...Movies,
      ...topViewMovie,
      ...TVSeriesImage,
    ];
    setTimeout(() => {
      setMovieItem(allMovies.slice(firstItemIndex, lastItemsIndex));
      setTotalMovie(allMovies);
    }, 800);
  }, [firstItemIndex, lastItemsIndex]);

  // Top Movie
  const [topMovie, setTopMovie] = useState<Array<TopViewTypes>>([]);
  useEffect(() => {
    if (currentPage > 1) {
      setTimeout(() => {
        setTopMovie([]);
      }, 800);
    } else {
      setTimeout(() => {
        setTopMovie(topViewMovie);
      }, 800);
    }
  }, [currentPage]);

  const dispath = useDispatch();
  dispath(getItems(totalMovie));
  dispath(getCurrentPage(currentPage));

  return (
    <div>
      <div>
        {currentPage > 1 ? <></> : <p>Top Views</p>}
        <TopView topMovie={topMovie} currentPage={currentPage} />
        <div className={currentPage > 1 ? "" : "mt-10"}>
          <p>Recommend Movies and TV Series</p>
          <RecommendMovie movieList={movieList} currentPage={currentPage} />
        </div>
        <div className="my-10">
          <PagePagination
            moviePerPage={itemsPerPage}
            totalMovie={totalMovie.length}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
