import React from "react";
import Button from "../../components/Button/Button";
import HeaderAyam from "/header-ayam.png";
import AOSWrapper from "../../composables/AOSWrapper/AOSWrapper";

const Header = () => {
  return (
    <AOSWrapper>
      <div className="w-full py-8 md:py-12">
        <div className="w-11/12 md:w-5/6 mx-auto mt-3 sm:mt-10 md:mt-12 lg:mt-6 px-5 lg:px-0 py-4">
          <div className="flex flex-col md:flex-row gap-6 md:gap-0 lg:gap-2">
            <div
              className="w-full md:w-[60%] flex flex-col gap-5 sm:gap-7 justify-center"
              data-aos="fade-left"
            >
              <h2 className="font-jakarta font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug md:leading-snug lg:leading-snug">
                Rasakan Cita Rasa Asli <br />
                <span className="text-orange-500">Yogyakarta</span> dalam Setiap{" "}
                Gigitan <span className="text-orange-500">Ayam</span> Bakar
                Kami!
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-500 font-medium font-jakarta">
                Tingkatkan Selera Anda dengan Kelezatan Ayam Bakar Khas
                Yogyakarta <br />
                Rasa yang Menggoda, Tradisi yang Tak Tergantikan!
              </p>
              <Button text="Pesan Sekarang" link="/menu" variant="w-48" />
            </div>
            <div className="w-full md:w-[40%]" data-aos="fade-right">
              <img
                src={HeaderAyam}
                className="max-w-72 md:max-w-80 lg:max-w-full md:mt-6 mx-auto"
                alt="header ayam"
              />
            </div>
          </div>
        </div>
      </div>
    </AOSWrapper>
  );
};

export default Header;
