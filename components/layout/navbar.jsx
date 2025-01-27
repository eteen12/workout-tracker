"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  PiDotsThreeCircleLight,
  PiDotsThreeCircleFill,
  PiDatabase,
  PiHouse,
  PiScroll,
} from "react-icons/pi";

import { IoIosList } from "react-icons/io";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/20/solid";

const settings = [
  {
    name: "Home",
    icon: PiHouse,
    link: "/",
  },
  {
    name: "User guide",
    icon: PiScroll,
    link: "/user-guide",
  },
  {
    name: "Data management",
    icon: PiDatabase,
    link: "/settings/user-data",
  },
];

export default function NavBar({ routineId, closeRoutine }) {
  const [clicked, setIsClicked] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsClicked(true);
  };
  const handleClose = (e) => {
    e.preventDefault();
    setIsClicked(false);
  };

  return (
    <div className="w-full h-16 navBg z-50 sticky">
      <div className="flex justify-between px-4 w-full h-full pt-4">
        <div className="flex pt-1">
          {routineId ? (
            <div className="text-blue-600 flex" onClick={closeRoutine}>
              <ChevronLeftIcon className="size-5 flex-none mt-px" />{" "}
              <span>Back</span>
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className=" flex justify-end">
          {clicked ? (
            <PiDotsThreeCircleFill
              className="text-blue-600 text-3xl"
              onClick={handleClose}
            />
          ) : (
            <PiDotsThreeCircleLight
              className="text-blue-600 text-3xl relative"
              onClick={handleClick}
            />
          )}
        </div>
      </div>

      {/*Settings menu*/}

      <div
        className={`transition3 bg-black h-screen z-0 fixed top-0 left-0 w-full mt-16 px-4 ${
          clicked ? "-translate-x-0 " : "translate-x-full"
        }`}
      >
        <ul
          role="list"
          className="divide-y divide-neutral-800 overflow-hidden rounded-xl bg-zinc-900 mt-20"
        >
          {settings.map((setting) => (
            <li
              className="relative  justify-between gap-x-6 bg-zinc-900 px-4 py-2"
              key={setting.name}
              onClick={handleClose}
            >
              <Link href={`${setting.link}`} className="flex justify-between">
                <div className="flex min-w-0 gap-x-4">
                  <setting.icon className="size-8 flex-none text-blue-600" />
                  <div className="min-w-0 flex-auto">
                    <p className="text-sm/6 font-semibold text-slate-200 mt-1">
                      {setting.name}
                    </p>
                  </div>
                </div>
                <div className="flex shrink-0 items-center gap-x-4">
                  <div className="flex">
                    <ChevronRightIcon
                      aria-hidden="true"
                      className="size-5 flex-none text-gray-400"
                    />
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
