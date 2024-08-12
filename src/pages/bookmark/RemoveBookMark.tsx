import { useDispatch } from "react-redux";
import { remoeFromFavorite } from "../../redux/AddToFavorite";
import { toast, ToastContainer } from "react-toastify";
type Props = {
  id: string;
};

const RemoveBookMark = ({ id }: Props) => {
  const dispath = useDispatch();
  const handleRemoveItem = (id: string) => {
    dispath(remoeFromFavorite(id));
    toast.success("Remove successfully!");
  };
  return (
    <>
      <button
        className="p-2 bg-containerBackgroundColor rounded-full absolute right-2 top-2 z-10 opacity-70"
        onClick={() => handleRemoveItem(id)}
      >
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
      </button>{" "}
      <ToastContainer />{" "}
    </>
  );
};

export default RemoveBookMark;
