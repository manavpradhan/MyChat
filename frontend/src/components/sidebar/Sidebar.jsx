import React from "react";
import Search from "./Search";
import Contacts from "../contacts/Contacts";
import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";
import useLogout from "../../hooks/useLogout";

const Sidebar = () => {
  const { loading, logout } = useLogout();

  return (
    <div className="border-r border-slate-500 p-4 flex flex-col">
      <Search />
      <div className="divider px-3"></div>
      <Contacts />
      <div className="mt-auto">
        {!loading ? (
          <BiLogOut
            className="w-8 h-8 text-white cursor-pointer"
            onClick={logout}
          />
        ) : (
          <span className="loading loading-spinner"></span>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
