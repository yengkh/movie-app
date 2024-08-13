import { useState } from "react";
import Rating from "../components/RatingStar";
import CommendDialog from "../dialog";
import { useDispatch } from "react-redux";
import { addToFavorite } from "../redux/AddToFavorite";
import { TopViewTypes } from "../types/types";
type Props = {
  items: TopViewTypes;
};

const MovieDetailPath = ({ items }: Props) => {
  const [bookMark, setBookMark] = useState<boolean>(true);
  const dispath = useDispatch();
  const handleAddToBookMark = () => {
    dispath(
      addToFavorite({
        id: items.id,
        moive_viewer: items.moive_viewer,
        movie_category: items.movie_category,
        movie_image: items.movie_image,
        movie_link: items.movie_link,
        movie_name: items.movie_name,
        movie_type: items.movie_type,
        movie_year: items.movie_year,
      })
    );
    setBookMark(!bookMark);
  };
  const [showDialog, setShowdialog] = useState<boolean>(false);
  return (
    <div className="w-[90%] lg:w-[70%] flex flex-col gap-5 mx-auto">
      <div className="flex gap-10 justify-center items-center mt-5">
        <button
          className="bg-containerBackgroundColor w-40 rounded-md py-2 flex items-center justify-center gap-2"
          onClick={handleAddToBookMark}
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
          Book Mark
        </button>
        <button className="bg-containerBackgroundColor w-40 rounded-md py-2 flex items-center justify-center gap-2">
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
              d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          Buy It
        </button>
      </div>
      <Rating rating={4.5} />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
        explicabo consequuntur dicta repudiandae. Consectetur molestias
        excepturi alias eveniet temporibus. Fugiat facere excepturi, culpa
        aperiam iure consequatur velit molestiae suscipit quidem cupiditate? Vel
        sit eius beatae iste ab eligendi itaque repellendus, porro cum nisi ut
        minus nesciunt! Quibusdam aspernatur eligendi ullam laudantium
        praesentium unde voluptatibus id a omnis! Quo sequi saepe dolorum
        corrupti earum, praesentium libero quos quidem odit ullam cumque
        veritatis numquam itaque molestias dolores perspiciatis!
      </p>
      <div className="flex gap-5">
        <button className="bg-containerBackgroundColor w-44 rounded-md py-2 flex items-center justify-center gap-2">
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
              d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
            />
          </svg>
          View Comments
        </button>
        <button
          className="bg-containerBackgroundColor w-44 rounded-md py-2 flex items-center justify-center gap-2"
          onClick={() => setShowdialog(!showDialog)}
        >
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
              d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
            />
          </svg>
          Write Comment
        </button>
      </div>
      <CommendDialog showDialog={showDialog} setShowdialog={setShowdialog} />
    </div>
  );
};

export default MovieDetailPath;
