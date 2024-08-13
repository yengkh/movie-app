import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../redux";
import { changeActiveLink } from "../redux/SetActiveLink";

type Props = {
  linkAddress: string;
  iconPath: string;
  title: string;
};

const ButtonLinkComponent = ({ linkAddress, iconPath, title }: Props) => {
  const activeLink = useSelector(
    (state: RootState) => state.setActiveLinkSlice.activeLink
  );
  const dispatch = useDispatch();

  return (
    <Link to={linkAddress}>
      <button
        type="button"
        className={`${
          activeLink === title ? "bg-bodyBackgroundColor" : ""
        } flex gap-2 md:w-36 w-44 xl:w-52 py-2 rounded-md pl-[5px] hover:bg-bodyBackgroundColor`}
        onClick={() => dispatch(changeActiveLink(title))}
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d={iconPath} />
          </svg>
        </span>
        {title}
      </button>
    </Link>
  );
};

export default ButtonLinkComponent;
