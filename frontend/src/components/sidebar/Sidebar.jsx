import React from "react";
import Search from "./Search";
import Contacts from "../contacts/Contacts";
import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col">
      <Search />
      <div className="divider px-3"></div>
      <Contacts />
      <div className="mt-auto">
        <Link to={"/login"}>
          <BiLogOut className="w-8 h-8 text-white cursor-pointer" />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
