import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import MovicePage from "./pages/movie";
import TVSeries from "./pages/tv-series";
import BookMarkPage from "./pages/bookmark";
import ButtonLinkComponent from "./components/ButtonLinkComponent";
import { useRef, useState } from "react";

const App = () => {
  const [menu, setMenu] = useState<boolean>(false);
  const searchInputField = useRef<HTMLInputElement>(null);
  const [activeLink, setActiveLink] = useState<string>("Home");

  return (
    <div className="h-screen flex flex-col">
      <BrowserRouter>
        {/* Top path */}
        <div className="flex justify-between w-full z-50 p-5 fixed top-0 right-0 left-0 bg-bodyBackgroundColor">
          {/* Left Path */}
          <div className="flex items-center">
            <button
              type="button"
              className="p-2 rounded-full md:hidden hover:bg-containerBackgroundColor "
              onClick={() => setMenu(!menu)}
            >
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
            <p className="hidden md:block font-bold">My Movie</p>
          </div>
          {/* Right Path */}
          <div className="flex items-center justify-between gap-1 w-5/6 md:gap-5 md:w-[70%] lg:w-[80%] lg:pr-10 ">
            <div className="flex items-center gap-1">
              <input
                type="search"
                placeholder="Search..."
                className="py-[2px] md:py-1 md:w-[300px] md:ml-3 px-2 bg-containerBackgroundColor rounded-md border-none outline-none "
                ref={searchInputField}
              />
              {/* Search Icon */}
              <button
                onClick={() => {
                  if (searchInputField.current) {
                    searchInputField.current.focus();
                  }
                }}
                className="p-2 rounded-full hover:bg-containerBackgroundColor"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </button>
            </div>
            {/* User Login */}
            <button className="p-2 rounded-full hover:bg-containerBackgroundColor">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="md:flex-row flex gap-10 flex-col ">
          {/* Menu Links */}
          <div className="md:w-[25%] lg:w-[20%] pt-20 z-20">
            <div
              className={`${
                menu === false ? "hidden md:flex flex-col gap-3" : ""
              } flex flex-col gap-3 md:h-full md:w-[25%] lg:w-[20%] py-8 bg-containerBackgroundColor w-full fixed md:bottom-0 md:top-20 md:left-0 px-10`}
            >
              <ButtonLinkComponent
                linkAddress={"/"}
                iconPath={
                  "m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                }
                title={"Home"}
                activeLink={activeLink}
                setActiveLink={setActiveLink}
              />
              <ButtonLinkComponent
                linkAddress={"/movie"}
                iconPath={
                  "M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0 1 18 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0 1 18 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 0 1 6 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5"
                }
                title={"Movies"}
                activeLink={activeLink}
                setActiveLink={setActiveLink}
              />
              <ButtonLinkComponent
                linkAddress={"/tv-series"}
                iconPath={
                  "M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z"
                }
                title={"TV Series"}
                activeLink={activeLink}
                setActiveLink={setActiveLink}
              />
              <ButtonLinkComponent
                linkAddress={"/bookmark"}
                iconPath={
                  "M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                }
                title={"Book Marks"}
                activeLink={activeLink}
                setActiveLink={setActiveLink}
              />
            </div>
          </div>
          {/* Rout Page */}
          <div className={`md:w-[74%] lg:w-[75%] md:pt-24`}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/movie" element={<MovicePage />} />
              <Route path="/tv-series" element={<TVSeries />} />
              <Route path="/bookmark" element={<BookMarkPage />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
