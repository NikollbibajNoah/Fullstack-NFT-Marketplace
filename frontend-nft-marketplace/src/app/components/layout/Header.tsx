"use client";

import {
  Avatar,
  Input,
} from "@heroui/react";
import { SearchIcon } from "lucide-react";
import Image from 'next/image';

import Logo from "../../../../public/Logo-nobackground.png";
import { NotificationDropdownMenu, NotificationProps } from "../shared/NotificationDropdownMenu";
import { DropdownHeaderMenu } from "../shared";

export type MenuItemProps = {
  label: string;
  onClick?: () => void;
  color?: "default" | "danger";
};

export const Header = () => {
  const discoverItems: MenuItemProps[] = [
    { label: "Explore", onClick: () => console.log("Explore Clicked") },
    { label: "Trending", onClick: () => console.log("Trending Clicked") },
    {
      label: "New Arrivals",
      onClick: () => console.log("New Arrivals Clicked"),
    },
    { label: "Top Sellers", onClick: () => console.log("Top Sellers Clicked") },
  ];

  const helpCenterItems: MenuItemProps[] = [
    { label: "FAQ", onClick: () => console.log("FAQ Clicked") },
    { label: "Contact Us", onClick: () => console.log("Contact Us Clicked") },
    { label: "Support", onClick: () => console.log("Support Clicked") },
    { label: "Feedback", onClick: () => console.log("Feedback Clicked") },
  ];

  const notificationItems: NotificationProps[] = [
    {
      label: "Notification #1",
      preview: "This is a sample notification message.",
    },
    {
      label: "Notification #2",
      preview: "This is another sample notification message.",
    },
    {
      label: "Notification #3",
      preview: "Yet another sample notification message.",
    },
  ];

  const profileItems: MenuItemProps[] = [
    {
      label: "Profile",
    },
    {
      label: "Settings",
    },
    {
      label: "Logout",
      color: "danger",
    },
  ];

  const searchFromInput = () => {};

  return (
    <header className="w-full h-32 bg-black border-b shadow-lg flex">
      {/* Left Section */}
      <section className="h-full flex gap-5 ml-3">
        {/* Logo */}
        <div className="h-full mx-3 flex items-center gap-2">
          <div className="w-12 h-12 flex justify-center items-center">
            <Image src={Logo} alt="Logo" className="w-full h-full object-cover" />
          </div>
          <h2 className="font-bold text-xl">NFT-Marketplace</h2>
        </div>

        {/* Search */}
        <div className="h-full flex items-center ml-12">
          <Input
            type="text"
            placeholder="Search Content"
            endContent={
              <div className="cursor-pointer" onClick={searchFromInput}>
                <SearchIcon />
              </div>
            }
            className="h-10"
          />
        </div>
      </section>

      <section className="h-full flex ml-auto">
        <div className="flex gap-12 items-center mx-5">
          <div>
            <DropdownHeaderMenu items={discoverItems}>
              <span className="cursor-pointer">Discover</span>
            </DropdownHeaderMenu>
          </div>
          <div>
            <DropdownHeaderMenu items={helpCenterItems}>
              <span className="cursor-pointer">Help Center</span>
            </DropdownHeaderMenu>
          </div>
          <div>
            <NotificationDropdownMenu notifications={notificationItems} />
          </div>
          <div>
            <DropdownHeaderMenu items={profileItems}>
              <Avatar className="cursor-pointer" name="You" />
            </DropdownHeaderMenu>
          </div>
        </div>
      </section>
    </header>
  );
};
