import React from "react";
import Search from "./Search";
import Contacts from "../contacts/Contacts";
import { BiLogOut } from "react-icons/bi";

const Sidebar = () => {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col">
      <Search />
      <div className="divider px-3"></div>
      <Contacts />
      <div className="mt-auto">
        <BiLogOut className="w-8 h-8 text-white cursor-pointer" />
      </div>
    </div>
  );
};

export default Sidebar;
