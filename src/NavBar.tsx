import { useEffect, useState } from "react";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { Pages } from "./shared";

type Props = {
  topOfPage?: boolean;
  currentPage: Pages;
  scrollFun: (value: Pages) => void;
};

export default function NavBar({ topOfPage, currentPage, scrollFun }: Props) {
  const [showMbNav, setShowMbNav] = useState<boolean>(false);
  const mobileNavHandler = (e: any) => {
    e.preventDefault();
    setShowMbNav(!showMbNav);
  };

  return (
    <div
      className={` z-50  w-[100vw] h-[70px] flex justify-between fixed top-0 left-0 px-5 items-center  ${
        !topOfPage ? " shadow-sm shadow-primary bg-bg" : "bg-transparent"
      }`}
    >
      {/* brand */}
      <div className="flex justify-between gap-5 w-full max-w-screen-xl mx-auto">
        <div className=" text-white font-firaCode text-[15px]">
          <h1
            className=" cursor-pointer text-3xl"
            onClick={(e) => {
              scrollFun(Pages.Home);
            }}
          >
            KHANT<span className="text-primary text-sm">.dev</span>
          </h1>
        </div>
        {/* nav */}
        <div className=" hidden w-2/5 h-full mb:flex items-center">
          <ul className="flex list-none text-white text-[20px] w-full justify-between gap-2">
            <li
              onClick={(e) => {
                scrollFun(Pages.Home);
              }}
              className={`cursor-pointer ${
                currentPage == Pages.Home ? " opacity-100" : " opacity-70"
              }`}
            >
              <span className=" text-primary">#</span>Home
            </li>
            <li
              onClick={(e) => {
                scrollFun(Pages.AboutMe);
              }}
              className={`cursor-pointer ${
                currentPage == Pages.AboutMe ? " opacity-100" : " opacity-70"
              }`}
            >
              <span className=" text-primary">#</span>AboutMe
            </li>
            <li
              onClick={(e) => {
                scrollFun(Pages.Works);
              }}
              className={`cursor-pointer ${
                currentPage == Pages.Works ? " opacity-100" : " opacity-70"
              }`}
            >
              <span className=" text-primary">#</span>Works
            </li>
            <li
              onClick={(e) => {
                scrollFun(Pages.Contact);
              }}
              className={`cursor-pointer ${
                currentPage == Pages.Contact ? " opacity-100" : " opacity-70"
              }`}
            >
              <span className=" text-primary">#</span>Contact
            </li>
          </ul>
        </div>
        {/* navMobile */}
        <div className="w-[30px] h-[30px] mb:hidden ">
          <RxHamburgerMenu
            className="w-full h-full cursor-pointer"
            color="white"
            onClick={mobileNavHandler}
          />
        </div>
        <div
          id="mbNav"
          className={`mb:hidden h-[100vh] w-[300px] z-50 fixed ${
            !showMbNav ? "right-[-100%]" : "right-0"
          } top-0 justify-center flex items-center border-primary border-l bg-bg z-10 transition-all `}
        >
          <div className="h-3/5 before:content-Rectangle before:absolute before:left-10 before:bottom-56 ">
            <div className=" absolute top-10 right-[50px]">
              <RxCross1
                color="#86E3F8"
                className=" w-[20px] h-[20px]"
                onClick={mobileNavHandler}
              />
            </div>
            <ul className=" text-white  h-full flex-col items-center text-[25px] font-firaCode">
              <li
                onClick={(e) => {
                  scrollFun(Pages.Home);
                  mobileNavHandler(e);
                }}
                className={`cursor-pointer h-[50px] mb-[20px] ${
                  currentPage == Pages.Home ? " opacity-100" : " opacity-70"
                }`}
              >
                <span className=" text-primary">#</span>Home
              </li>
              <li
                onClick={(e) => {
                  scrollFun(Pages.AboutMe);
                  mobileNavHandler(e);
                }}
                className={`cursor-pointer h-[50px] mb-[20px] ${
                  currentPage == Pages.AboutMe ? " opacity-100" : " opacity-70"
                }`}
              >
                <span className=" text-primary">#</span>AboutMe
              </li>
              <li
                onClick={(e) => {
                  scrollFun(Pages.Works);
                  mobileNavHandler(e);
                }}
                className={`cursor-pointer h-[50px] mb-[20px] ${
                  currentPage == Pages.Works ? " opacity-100" : " opacity-70"
                }`}
              >
                <span className=" text-primary">#</span>Works
              </li>
              <li
                onClick={(e) => {
                  scrollFun(Pages.Contact);
                  mobileNavHandler(e);
                }}
                className={`cursor-pointer h-[50px] mb-[20px] ${
                  currentPage == Pages.Contact ? " opacity-100" : " opacity-70"
                }`}
              >
                <span className=" text-primary">#</span>Contact
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
