import React, { useState, useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import Input from "../../components/Input/Input";
import DefaultLayout from "../../layouts/DefaultLayout/DefaultLayout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ButtonAuth from "../../components/Button/ButtonAuth";
import { toast } from "react-toastify";
import CurrencyIDR from "../../composables/CurrencyIDR/CurrencyIDR";

const PlaceOrder = () => {
  const { url, allMenu, cartItems, setCartItems, getTotalCartAmount } =
    useContext(StoreContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("COD");

  const handleOrder = async (e) => {
    e.preventDefault();
    let orderItems = [];
    allMenu.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo.qty = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    });
    let orderData = {
      name: name,
      address: address,
      paymentMethod: paymentMethod,
      phone: phone,
      items: orderItems,
      amount: getTotalCartAmount(),
    };
    const response = await axios.post(`${url}/api/order/place`, orderData);
    if (response.data.success) {
      setCartItems({});
      toast.success(response.data.message);
      navigate("/");
    } else {
      toast.error(response.data.message);
    }
  };

  return (
    <DefaultLayout>
      <form
        id="orderPhone"
        onSubmit={handleOrder}
        className="w-11/12 md:w-5/6 mx-auto py-16 lg:py-20"
      >
        <h1 className="text-3xl font-bold text-center mb-12 lg:mb-16">
          Detail Pesanan
        </h1>
        <div className="flex flex-col w-11/12 mx-auto md:w-8/12 lg:w-full lg:flex-row justify-between gap-5">
          <div className="flex flex-col gap-5 w-full lg:w-[70%]">
            <Input
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Nama Lengkap"
            />
            <textarea
              id="address"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Alamat Lengkap"
              rows={4}
              className="w-full px-4 md:px-6 py-1.5 lg:py-[10px] border-[1px] border-neutral-200 rounded-lg text-sm md:text-base font-poppins outline-orange-500 placeholder:text-gray-500 text-gray-700"
            />
            <select
              id="paymentMethod"
              name="paymentMethod"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="w-full px-4 md:px-6 py-1.5 lg:py-[10px] border-[1px] border-neutral-200 rounded-lg text-sm md:text-base font-poppins outline-orange-500 placeholder:text-gray-500 text-gray-700"
              placeholder="Metode Pembayaran"
            >
              <option value="COD">COD</option>
              <option value="Transfer Bank" disabled>
                Transfer Bank
              </option>
            </select>
            <Input
              id="phone"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="number"
              placeholder="Nomor Telepon"
            />
          </div>
          <div className="w-full lg:w-[30%] flex flex-col h-52 gap-5 px-12 py-6 lg:px-6 lg:py-3 border-[1px] border-neutral-200 rounded-2xl shadow-md relative">
            <h2 className="text-base lg:text-xl font-semibold">
              Ringkasan Belanja
            </h2>
            <div className="flex flex-col gap-3">
              <div className="flex justify-between text-sm md:text-base">
                <p className="text-gray-700 font-medium">Subtotal</p>
                <p>{CurrencyIDR(getTotalCartAmount())}</p>
              </div>
              <hr className="mb-12" />
              <div className="flex justify-center items-center">
                {cartItems &&
                  Object.keys(cartItems).length > 0 &&
                  getTotalCartAmount() > 0 && (
                    <ButtonAuth type="submit" text="Bayar Sekarang" />
                  )}
              </div>
            </div>
          </div>
        </div>
      </form>
    </DefaultLayout>
  );
};

export default PlaceOrder;
