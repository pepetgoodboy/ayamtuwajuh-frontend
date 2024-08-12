import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import VerifyAccount from "./pages/VerifyAccount/VerifyAccount";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import MyOrders from "./pages/MyOrders/MyOrders";
import Add from "./pages/Admin/Add/Add";
import List from "./pages/Admin/List/List";
import Orders from "./pages/Admin/Orders/Orders";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFound from "./pages/NotFound/NotFound";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify-account/:token" element={<VerifyAccount />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:id" element={<ResetPassword />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<PlaceOrder />} />
        <Route path="/myorders" element={<MyOrders />} />

        {/* Admin Route */}
        <Route path="/admin/add" element={<Add />} />
        <Route path="/admin/list" element={<List />} />
        <Route path="/admin/orders" element={<Orders />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
