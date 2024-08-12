import { Link } from "react-router-dom";
type Props = {
  linkAddress: string;
  iconPath: string;
  title: string;
  activeLink: string;
  setActiveLink: (link: string) => void;
};

const ButtonLinkComponent = ({
  linkAddress,
  iconPath,
  title,
  activeLink,
  setActiveLink,
}: Props) => {
  return (
    <Link to={linkAddress}>
      <button
        type="button"
        className={`${
          activeLink === title ? "bg-bodyBackgroundColor" : ""
        } flex gap-2 md:w-36 w-44 lg:w-52 py-2 rounded-md pl-[5px] hover:bg-bodyBackgroundColor`}
        onClick={() => setActiveLink(title)}
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
