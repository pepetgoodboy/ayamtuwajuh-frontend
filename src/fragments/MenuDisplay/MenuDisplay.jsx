import React, { useContext } from "react";
import Button from "../../components/Button/Button";
import { MdAddCircle, MdOutlineRemoveCircle } from "react-icons/md";
import { StoreContext } from "../../context/StoreContext";
import AOSWrapper from "../../composables/AOSWrapper/AOSWrapper";
import SkeletonLoading from "../../composables/SkeletonLoading/SkeletonLoading";
import CurrencyIDR from "../../composables/CurrencyIDR/CurrencyIDR";

const MenuDisplay = ({ category }) => {
  const { url, allMenu, cartItems, addToCart, removeFromCart } =
    useContext(StoreContext);

  return (
    <AOSWrapper>
      <div className="w-11/12 md:w-5/6 mx-auto font-jakarta px-5 md:px-0">
        <div className="mt-[30px] font-jakarta pb-10 flex flex-col gap-5">
          <div className="flex flex-col gap-8" data-aos="fade-up">
            <h1 className="font-bold text-2xl md:text-4xl text-center">
              Jelajahi Semua Menu Disini
            </h1>
            <p className="max-w-full text-sm sm:text-base md:text-lg text-justify md:text-center text-gray-500 font-medium lg:max-w-[50%] lg:mx-auto">
              Temukan pilihan menu kami yang bervariasi, menyajikan hidangan
              istimewa dengan bahan-bahan berkualitas dan sentuhan keahlian
              kuliner. Tujuan kami adalah untuk memuaskan setiap keinginan
              kuliner Anda dan menghadirkan pengalaman makan yang tak
              terlupakan, satu hidangan enak setiap saat.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-[30px] gap-[30px] gap-y-[50px] px-5 md:px-0">
            {allMenu.map((item, index) => {
              if (category === "All" || category === item.category) {
                return (
                  <div
                    key={index}
                    className="w-full h-full m-auto rounded-xl  border-[1px] border-neutral-200 px-6 py-6 hover:scale-110 transition-all duration-300"
                    data-aos="fade-up"
                  >
                    <div className="flex flex-col gap-6">
                      <div className="flex flex-col gap-2">
                        <SkeletonLoading
                          src={`${url}/images/${item.image}`}
                          alt={item.name}
                          className="w-full relative h-[150px] object-cover rounded-2xl"
                        />
                        <h3 className="font-semibold text-lg px-3">
                          {item.name}
                        </h3>
                        <div className="flex flex-col gap-3 w-full h-full">
                          <p className="text-sm text-gray-500 font-medium px-3">
                            {item.description}
                          </p>
                          <div className="flex justify-between pb-10">
                            <p className="text-sm text-gray-500 font-medium px-3">
                              {CurrencyIDR(item.price)}
                            </p>
                            {cartItems[item._id] > 0 ? (
                              <div className="flex items-center gap-3">
                                <MdOutlineRemoveCircle
                                  onClick={() => removeFromCart(item._id)}
                                  className="cursor-pointer text-red-600 w-7 h-7"
                                />
                                <p>{cartItems[item._id]}</p>
                                <MdAddCircle
                                  onClick={() => addToCart(item._id)}
                                  className="cursor-pointer text-green-600 w-7 h-7"
                                />
                              </div>
                            ) : (
                              <MdAddCircle
                                onClick={() => addToCart(item._id)}
                                className="cursor-pointer w-7 h-7 text-black"
                              />
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="absolute bottom-5 flex justify-between">
                        <Button
                          onClick={() => addToCart(item._id)}
                          text="Order Sekarang"
                          link="/"
                        />
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </AOSWrapper>
  );
};

export default MenuDisplay;
