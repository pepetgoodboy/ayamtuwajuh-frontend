import React, { useContext, useEffect, useState } from "react";
import DefaultLayout from "../../layouts/DefaultLayout/DefaultLayout";
import { BiSolidBox } from "react-icons/bi";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import Parcel from "../../assets/parcel_icon.png";

const MyOrders = () => {
  const { url, token } = useContext(StoreContext);
  const [orders, setOrders] = useState([]);

  const getOrders = async (token) => {
    const response = await axios.get(`${url}/api/order/userorder`, {
      headers: { token },
    });
    setOrders(response.data.data);
  };

  useEffect(() => {
    getOrders(token);
  }, [token]);

  return (
    <DefaultLayout>
      <div className="mt-14">
        <div className="w-11/12 md:w-5/6 mx-auto pb-40">
          <h1 className="text-3xl font-bold text-center mb-10">My Orders</h1>
          <div className="flex flex-col border-[1px] border-neutral-200 rounded-2xl shadow-md py-6 px-3">
            <div className="grid grid-cols-[1.5fr,1fr,1fr,1fr] sm:grid-cols-[1fr,1.5fr,1fr,1fr,1fr] items-center text-gray-700 font-medium text-sm md:text-base text-center">
              <p className="hidden sm:block">Items</p>
              <p>Nama</p>
              <p>Total</p>
              <p>Jumlah</p>
              <p>Status</p>
            </div>
            <br />
            <hr />
            {orders.map((item, index) => (
              <div key={index}>
                <div className="grid grid-cols-[1.5fr,1fr,1fr,1fr] sm:grid-cols-[1fr,1.5fr,1fr,1fr,1fr] items-center my-3 text-gray-500 font-medium text-xs text-center md:text-base">
                  <div className="hidden sm:flex justify-center items-center">
                    <img
                      src={Parcel}
                      alt="parcel"
                      className="hidden sm:flex w-14 md:w-16"
                    />
                  </div>
                  <div className="flex flex-col items-center">
                    {item.items.map((foodDrink, foodIndex) => (
                      <p key={foodIndex} className="mb-1">
                        {foodDrink.name} x {foodDrink.qty}
                      </p>
                    ))}
                  </div>
                  <p>Rp. {item.amount}</p>
                  <p>{item.items.length}</p>
                  <p>{item.status}</p>
                </div>
                <hr />
              </div>
            ))}
            {orders.length === 0 && (
              <p className="text-center text-xl text-gray-500 py-6">
                Belum ada pesanan
              </p>
            )}
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default MyOrders;
