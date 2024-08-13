import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Movies } from "../assets/movies/movies";
import { topViewMovie } from "../assets/topview/topview";
import { TVSeriesImage } from "../assets/tvseries/tvseries";
import { TopViewTypes } from "../types/types";
import { Waveform } from "@uiball/loaders";
import MovieDetailPath from "./MovieDetailPath";
import RecommendMovie from "../pages/home/RecommendMovie";
const DetailPage = () => {
  const getAllMovie: Array<TopViewTypes> = useMemo(
    () => [...Movies, ...topViewMovie, ...TVSeriesImage],
    []
  );
  const navigate = useNavigate();
  const { moviename } = useParams<{ moviename: string }>();
  const [movie, setMovie] = useState<Array<TopViewTypes>>([]);
  useEffect(() => {
    if (moviename) {
      const decodeUrl = decodeURIComponent(moviename);
      const findMovieDetail = getAllMovie.filter(
        (movie) => movie.movie_name === decodeUrl
      );
      if (findMovieDetail.length > 0) {
        setTimeout(() => {
          setMovie(findMovieDetail);
        }, 1000);
      } else {
        navigate("/error-page/");
      }
    }
  }, [getAllMovie, moviename, navigate]);
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  if (movie.length === 0) {
    return (
      <div className="flex justify-center items-center mt-56 ">
        <Waveform color="#f8eded" />
      </div>
    );
  }
  return (
    <div className="overflow-x-hidden">
      <p className="font-bold">Trailer</p>
      <div className="flex justify-center items-center mt-5 md:pr-7 xl:w-5/6 lg:mx-auto ">
        {movie.map((items) => (
          <div key={items.id} className="">
            <video controls className="rounded-sm ">
              <source src={items.movie_link} />
            </video>
            <div className="mt-10 flex flex-col lg:flex-row  gap-8">
              <div className="overflow-hidden w-[60%] md:w-1/2 mx-auto lg:w-[30%] h-96 rounded-md">
                <img
                  src={items.movie_image}
                  alt=""
                  className="w-full h-full  hover:scale-105 transition-transform transform duration-700"
                />
              </div>
              <MovieDetailPath items={items} />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5">
        <p>Similar movies</p>
        <RecommendMovie />
      </div>
    </div>
  );
};

export default DetailPage;
