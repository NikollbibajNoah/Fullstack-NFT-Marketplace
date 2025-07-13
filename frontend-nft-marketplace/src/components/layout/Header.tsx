"use client";

import { BellIcon, PlusIcon, SearchIcon } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [discover, setDiscover] = useState<boolean>(false);
  const [help, setHelp] = useState<boolean>(false);
  const [notification, setNotification] = useState<boolean>(false);
  const [profile, setProfile] = useState<boolean>(false);
  const [sidebar, setSidebar] = useState<boolean>(false);

  return (
    <header className="w-full h-28 flex bg-white text-black">
      <section className="h-full flex lg:ml-20">
        {/* Logo */}
        <div className="h-full bg-gray-500 aspect-square">
          <img />
        </div>

        {/* Search Input */}
        <div className="h-full flex items-center mx-4 lg:mx-10">
          <div className="h-10 w-54 flex relative">
            <input
              className="w-full h-full border-1 pr-8 border-gray-500 rounded-4xl p-2"
              type="text"
              placeholder="Search NFT..."
            />
            <button className="cursor-pointer flex justify-center items-center h-full aspect-square absolute right-0">
              <SearchIcon />
            </button>
          </div>
        </div>
      </section>

      <section className="flex items-center gap-5 ml-auto px-4 lg:mr-20">
        <div className="p-2 cursor-pointer">
          <p>Discover</p>
        </div>
        <div className="p-2 cursor-pointer">
          <p>Help Center</p>
        </div>
        <div>
          <button className="cursor-pointer">
            <BellIcon />
          </button>
        </div>
        <div>
          <button className="flex gap-2 items-center p-4 cursor-pointer text-white bg-gray-500 rounded-4xl">
            <PlusIcon />
            <p>Create</p>
          </button>
        </div>
        <div>
          <div className="flex justify-center items-center rounded-full text-white bg-gray-500 w-14 aspect-square cursor-pointer">
            IMG
          </div>
        </div>
      </section>
    </header>
  );
};
