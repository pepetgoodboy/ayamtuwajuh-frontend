import React from "react";
import NavbarAdmin from "../../fragments/Navbar/NavbarAdmin";
import SidebarAdmin from "../../fragments/SidebarAdmin/SidebarAdmin";

const AdminLayout = ({ children }) => {
  return (
    <div className="font-jakarta">
      <NavbarAdmin />
      <hr />
      <div className="flex">
        <SidebarAdmin />
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
