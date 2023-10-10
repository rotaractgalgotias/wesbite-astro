// @flow
import * as React from "react";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import {SiInstagram, SiTwitter, SiWhatsapp} from "react-icons/si";

type Props = {};

export function Navbar(props: Props) {

  const [showMenu, setShowMenu] = React.useState(false);

  React.useEffect(() => {

    const handleUrlChange = () => {
      setShowMenu(false);
    };

    window.addEventListener("hashchange", handleUrlChange);

    return () => {
      window.removeEventListener("hashchange", handleUrlChange);
    };
  }, []);

  return (
    <nav
      className={
        "container mx-auto mt-5 flex w-full flex-row items-center justify-between rounded-lg px-0 py-3 md:my-5 md:bg-white md:px-8 md:border-2 md:border-gray-200"
      }
    >
      <a href={'/'}>
          <div className={"flex flex-row items-center gap-3"}>
            <img
              src={"/logo-circle.png"}
              alt={"Rotaract Galgotias Logo"}
              className={'h-14 -ml-3 lg:ml-auto'}
            />
            <div className={"hidden flex-col md:flex"}>
              <span className={"h-7 font-outfit text-2xl font-bold"}>
                Rotaract Club
              </span>
              <span className={"font-outfit text-sm font-medium"}>
                Galgotias Educational Institutions
              </span>
            </div>
            <div className={"flex flex-col md:hidden"}>
              <span className={"h-6 font-outfit text-xl font-bold"}>Rotaract Club</span>
              <span className={"font-outfit text-xs font-medium"}>Galgotias Educational Institutions</span>
            </div>
          </div>
      </a>

      <div>
        <RiMenu3Line className={"cursor-pointer text-4xl md:hidden"}  onClick={()=>{setShowMenu(true)}}/>
      </div>

      <div
        className={
          "hidden flex-row items-center justify-between gap-6 font-dmSans text-lg font-medium md:flex"
        }
      >
        <a href={"/"}>Home</a>
        <a href={"/about"}>About</a>
        <a href={"/team"}>Team</a>
        <a href={"/events"}>Events</a>
        <a href={"/team/past"}>Past Teams</a>
      </div>

        <div
          className={
            `fixed left-0 top-0 z-50 block h-full w-full bg-gray-100 md:hidden transition-all duration-200 ease-out ${showMenu ? "translate-x-0" : "-translate-x-full"}`
          }
        >
          <div className={"flex h-full flex-col items-center justify-center"}>
            <div className={"fixed right-5 top-10"}>
              <RiCloseLine className={"text-5xl"} onClick={()=>{setShowMenu(false)}} />
            </div>
            <div
              className={
                "flex flex-col items-center justify-center gap-14 font-dmSans text-4xl"
              }
            >
              <a href={"/"}>Home</a>
              <a href={"/about"}>About</a>
              <a href={"/team"}>Team</a>
              <a href={"/events"}>Events</a>
              <a href={"/team/past"}>Past Teams</a>
              <a href={"/join"}>Interested to Join?</a>
            </div>
          </div>
        </div>
    </nav>
  );
}
