import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import AOSWrapper from "../../composables/AOSWrapper/AOSWrapper";

const ExploreMenu = ({ category, setCategory }) => {
  const { menuList } = useContext(StoreContext);

  return (
    <AOSWrapper>
      <div className="w-11/12 md:w-5/6 mx-auto font-jakarta px-5 md:px-0 mt-10 md:mt-[100px] py-4">
        <div className="flex flex-col gap-5" id="menu" data-aos="fade-up">
          <div className="flex flex-col gap-8">
            <h1 className="font-bold text-2xl md:text-4xl text-center">
              Menu Terbaik Yang Kami Sediakan
            </h1>
            <p className="max-w-full text-sm sm:text-base md:text-lg text-center text-gray-500 font-medium lg:max-w-[40%] lg:mx-auto">
              Temukan pilihan kategori menu yang ingin anda temui di Ayam
              Tuwajuh.
            </p>
          </div>

          <div className="flex justify-center items-center gap-10 md:gap-20 text-center my-5">
            {menuList.map((item, index) => (
              <div
                key={index}
                onClick={() =>
                  setCategory((prev) =>
                    prev === item.menu_name ? "All" : item.menu_name
                  )
                }
              >
                <div
                  className={
                    category === item.menu_name
                      ? "border-4 border-orange-600 p-[2px] rounded-full"
                      : ""
                  }
                >
                  <img
                    src={item.image}
                    alt={item.menu_name}
                    className="w-32 md:w-48 h-32 md:h-48 cursor-pointer rounded-full transition-all duration-200"
                  />
                </div>
                <p className="mt-[10px] text-gray-500 font-semibold cursor-pointer">
                  {item.menu_name}
                </p>
              </div>
            ))}
          </div>
          <hr className="my-5 h-[2px] bg-[#e2e2e2] border-none" />
        </div>
      </div>
    </AOSWrapper>
  );
};

export default ExploreMenu;
