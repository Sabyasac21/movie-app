import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import '../Styles/horizontalView.css';

function Navbar() {
  return (
    <div>
      <div className="flex bg-white justify-center items-center  text-[#989090]">
        <div className="w-1/4 flex justify-center">
          <h3 className="text-[#CF2D2D] font-bold">BookUsNow</h3>
        </div>

        <div className="flex gap-4 w-1/2">
          <button className="bg-black hidden gap-2 px-4 py-1 rounded-md md:flex ">
            <p><FontAwesomeIcon icon={faBars}/></p>
            <p>Categories</p>
          </button>
          <div className="w-full">
            
          <input
            placeholder="Dj Phantom"
            className="border border-[#B0BABF] rounded-lg py-1 px-4 w-full md:block hidden"
          />
          <FontAwesomeIcon className="md:hidden block  " icon={faSearch}/>
          </div>
        </div>

        <div className="w-1/4 flex justify-center gap-2">
          <div className="px-4 py-2  gap-x-2">
            <FontAwesomeIcon className="transform transition-transform hover:text-red-300" icon={faHeart} />
            <span className="pl-2 md:inline hidden">Favourites</span>
          </div>
          <div className="flex">
            <button className="md:hidden block">
              <FontAwesomeIcon icon={faUser} />
            </button>
            <button className="border px-4 py-2 md:block hidden rounded-lg transform transition-transform hover:border-gray-400">
              Sign In
            </button>
          </div>
        </div>
      </div>

      <div className="flex w-full border p-4">
        <div className="w-1/5 flex justify-center">
          <span className="font-bold">Mumbai, India</span>
        </div>
        <div className="w-4/5 overflow-auto scrollbar">
          <ul className="flex gap-x-16 text-[#1E2022] px-4 ">
            <li className="transform transition-transform hover:scale-110  cursor-pointer font-semibold ">Live Shows</li>
            <li className="transform transition-transform hover:scale-110  cursor-pointer font-semibold ">Streams</li>
            <li className="transform transition-transform hover:scale-110  cursor-pointer font-semibold ">Movies</li>
            <li className="transform transition-transform hover:scale-110  cursor-pointer font-semibold ">Plays </li>
            <li className="transform transition-transform hover:scale-110  cursor-pointer font-semibold ">Events</li>
            <li className="transform transition-transform hover:scale-110  cursor-pointer font-semibold ">Sports</li>
            <li className="transform transition-transform hover:scale-110  cursor-pointer font-semibold ">Activities</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
