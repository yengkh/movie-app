import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToFavorite } from "../../redux/AddToFavorite";
import { TopViewTypes } from "../../types/types";
type Props = {
  items: TopViewTypes;
};

const BookMark = ({ items }: Props) => {
  const dispath = useDispatch();
  const [bookMark, setBookMark] = useState<boolean>(true);
  const handleAddToFavorite = () => {
    dispath(
      addToFavorite({
        id: items.id,
        moive_viewer: items.moive_viewer,
        movie_category: items.movie_category,
        movie_image: items.movie_image,
        movie_type: items.movie_type,
        movie_year: items.movie_year,
        movie_name: items.movie_name,
        movie_link: items.movie_link,
      })
    );
    localStorage.setItem("movie_favorite", JSON.stringify(items));
    setBookMark(!bookMark);
  };
  return (
    <button
      className="p-2 bg-containerBackgroundColor rounded-full absolute right-2 top-2 z-10 opacity-70"
      onClick={handleAddToFavorite}
    >
      {bookMark ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-4 lg:size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-4 lg:size-5"
        >
          <path
            fillRule="evenodd"
            d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </button>
  );
};

export default BookMark;
