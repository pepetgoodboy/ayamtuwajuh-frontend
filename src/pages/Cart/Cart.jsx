import React, { useContext, useEffect } from "react";
import Button from "../../components/Button/Button";
import { StoreContext } from "../../context/StoreContext";
import { FaRegTrashAlt } from "react-icons/fa";
import DefaultLayout from "../../layouts/DefaultLayout/DefaultLayout";
import CurrencyIDR from "../../composables/CurrencyIDR/CurrencyIDR";

const Cart = () => {
  const {
    url,
    allMenu,
    cartItems,
    getTotalCartAmount,
    removeFromCart,
    isCartEmpty,
    validateUser,
  } = useContext(StoreContext);

  useEffect(() => {
    validateUser();
  }, []);

  return (
    <DefaultLayout>
      <div className="w-11/12 md:w-5/6 mx-auto py-16 lg:mb-28">
        <h1 className="text-3xl font-bold text-center mb-12 lg:mb-16">
          Keranjang
        </h1>
        <div className="flex flex-col gap-5 lg:grid lg:grid-cols-[2.8fr,1.2fr] lg:space-x-1">
          <div className="border-[1px] border-neutral-200 py-6 px-3 rounded-2xl shadow-md">
            <div className="grid grid-cols-[1.5fr,1fr,1fr,1fr,0.5fr] sm:grid-cols-[1fr,1.5fr,1fr,1fr,1fr,0.5fr] items-center text-gray-700 font-semibold text-sm md:text-base px-3 lg:px-0">
              <p className="hidden sm:block">Items</p>
              <p>Nama</p>
              <p>Harga</p>
              <p>Jumlah</p>
              <p>Total</p>
              <p></p>
            </div>
            <br />
            <hr />
            {isCartEmpty ? (
              <div className="text-center text-xl text-gray-500 py-8">
                Keranjang Kosong
              </div>
            ) : (
              allMenu.map(
                (item, index) =>
                  cartItems[item._id] > 0 && (
                    <div key={index}>
                      <div className="grid grid-cols-[1.5fr,1fr,1fr,1fr,0.5fr] sm:grid-cols-[1fr,1.5fr,1fr,1fr,1fr,0.5fr] items-center my-3 text-black text-sm md:text-base px-3 lg:px-0">
                        <img
                          src={`${url}/images/${item.image}`}
                          alt={item.name}
                          className="w-12 hidden sm:block rounded-lg"
                        />
                        <p>{item.name}</p>
                        <p>Rp. {item.price}</p>
                        <p className="ml-4 lg:ml-5">{cartItems[item._id]}</p>
                        <p>Rp. {item.price * cartItems[item._id]}</p>
                        <FaRegTrashAlt
                          onClick={() => removeFromCart(item._id)}
                          className="cursor-pointer text-gray-400 hover:text-red-500 w-4 lg:w-5 h-4 lg:h-5 ml-3"
                        />
                      </div>
                      <hr />
                    </div>
                  )
              )
            )}
          </div>
          <div className="flex flex-col h-52 gap-5 px-12 py-6 lg:px-6 lg:py-3 border-[1px] border-neutral-200 rounded-2xl shadow-md relative">
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
                    <Button text="Order Sekarang" link="/orders" />
                  )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Cart;
