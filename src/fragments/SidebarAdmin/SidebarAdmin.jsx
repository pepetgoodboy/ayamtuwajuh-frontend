import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { IoMdAddCircleOutline } from "react-icons/io";
import { IoFastFoodOutline } from "react-icons/io5";
import { BsBoxSeam } from "react-icons/bs";
import { TbLogout2 } from "react-icons/tb";
import { StoreContext } from "../../context/StoreContext";

const SidebarAdmin = () => {
  const { handleLogout } = useContext(StoreContext);

  return (
    <div className="w-[18%] min-h-[100vh] border border-neutral-300 border-t-0">
      <div className="pt-12 pl-[20%] flex flex-col gap-5 text-sm">
        <NavLink
          to="/admin/add"
          className="flex items-center gap-3 text-gray-700 font-medium border border-neutral-300 border-r-0 py-2 px-3 rounded-l-xl cursor-pointer"
        >
          <IoMdAddCircleOutline className="w-7 h-7 text-green-600 hover:scale-125 duration-300 transition-all" />
          <p className="hidden md:block">Tambah Items</p>
        </NavLink>
        <NavLink
          to="/admin/list"
          className="flex items-center gap-3 text-gray-700 font-medium border border-neutral-300 border-r-0 py-2 px-3 rounded-l-xl cursor-pointer"
        >
          <IoFastFoodOutline className="w-7 h-7 text-red-500 hover:scale-125 duration-300 transition-all" />
          <p className="hidden md:block">List Items</p>
        </NavLink>
        <NavLink
          to="/admin/orders"
          className="flex items-center gap-3 text-gray-700 font-medium border border-neutral-300 border-r-0 py-2 px-3 rounded-l-xl cursor-pointer"
        >
          <BsBoxSeam className="w-7 h-7 text-orange-500 hover:scale-125 duration-300 transition-all" />
          <p className="hidden md:block">Pesanan</p>
        </NavLink>
        <button
          onClick={handleLogout}
          className="flex items-center bg-orange-500 font-medium hover:bg-orange-600 text-white gap-3 py-2 px-3 rounded-l-xl cursor-pointer"
        >
          <TbLogout2 className="w-7 h-7 text-white hover:scale-125 duration-300 transition-all" />
          <p className="hidden md:block">Logout</p>
        </button>
      </div>
    </div>
  );
};

export default SidebarAdmin;
