import { TopViewTypes } from "../../types/types";
import image1 from "./LoveAgain.jpg";
import image2 from "./encanto_homeent.jpeg";
import image3 from "./junglecruise.jpeg";
import image4 from "./luca.jpeg";
import image5 from "./pixels.jpg";
import image6 from "./sing.jpg";
import movielink from "../video/Avatar- The Way of Water - Official Trailer.mp4";

export const topViewMovie: Array<TopViewTypes> = [
  {
    id: "topview-1",
    movie_year: 2023,
    movie_name: "Love Again",
    movie_image: image1,
    movie_type: "Movie",
    movie_category: "PG",
    moive_viewer: 2500,
    movie_link: movielink,
  },
  {
    id: "topview-2",
    movie_year: 2023,
    movie_name: "Encanto Homeent",
    movie_image: image2,
    movie_type: "Movie",
    movie_category: "E",
    moive_viewer: 3500,
    movie_link: movielink,
  },
  {
    id: "topview-3",
    movie_year: 2020,
    movie_name: "Jungle cruise",
    movie_image: image3,
    movie_type: "Movie",
    movie_category: "18+",
    moive_viewer: 2000,
    movie_link: movielink,
  },
  {
    id: "topview-4",
    movie_year: 2022,
    movie_name: "Luca",
    movie_image: image4,
    movie_type: "Movie",
    movie_category: "E",
    moive_viewer: 3450,
    movie_link: movielink,
  },
  {
    id: "topview-5",
    movie_year: 2015,
    movie_name: "Pixels",
    movie_image: image5,
    movie_type: "Movie",
    movie_category: "18+",
    moive_viewer: 1700,
    movie_link: movielink,
  },
  {
    id: "topview-6",
    movie_year: 2020,
    movie_name: "Sing 2",
    movie_image: image6,
    movie_type: "TV Series",
    movie_category: "E",
    moive_viewer: 1600,
    movie_link: movielink,
  },
];
