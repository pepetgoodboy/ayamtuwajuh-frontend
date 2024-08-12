import React from "react";
import AOSWrapper from "../../composables/AOSWrapper/AOSWrapper";

const About = () => {
  return (
    <AOSWrapper>
      <div className="w-11/12 md:w-5/6 mx-auto font-jakarta px-5 md:px-0 mt-10 py-4">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-2" data-aos="fade-up">
            <h2 className="font-bold text-2xl md:text-4xl text-center">
              Tentang Kami
            </h2>
            <p className="max-w-full text-sm sm:text-base md:text-lg text-justify  text-gray-500 font-medium lg:max-w-[75%] lg:mx-auto">
              <span className="font-bold text-orange-500">Ayam Tuwajuh</span>{" "}
              adalah warung makan khas Yogyakarta yang berkomitmen untuk
              memberikan pengalaman kuliner terbaik dengan menu pilihan yang
              kaya akan cita rasa dan tradisi Indonesia. Dibuka dengan hasrat
              untuk menyajikan hidangan lezat dan otentik, kami telah
              menggabungkan warisan kuliner Indonesia dengan sentuhan kreatif
              yang membuat setiap hidangan istimewa.
            </p>
          </div>
          <div className="flex flex-col gap-2" data-aos="fade-up">
            <h2 className="font-bold text-xl md:text-3xl text-center">
              Kenapa Ayam Tuwajuh?
            </h2>
            <p className="max-w-full text-sm sm:text-base md:text-lg text-justify  text-gray-500 font-medium lg:max-w-[75%] lg:mx-auto">
              <span className="font-bold text-orange-500">Keaslian Rasa:</span>{" "}
              Kami mengutamakan keaslian rasa dalam setiap hidangan kami, dengan
              mempertahankan resep tradisional yang telah diwariskan dari
              generasi ke generasi.
            </p>
            <p className="max-w-full text-sm sm:text-base md:text-lg text-justify  text-gray-500 font-medium lg:max-w-[75%] lg:mx-auto">
              <span className="font-bold text-orange-500">
                Bahan Berkualitas:
              </span>{" "}
              Hanya menggunakan bahan-bahan terbaik dan segar untuk memastikan
              kualitas terbaik dalam setiap sajian.
            </p>
          </div>
          <div className="flex flex-col gap-2" data-aos="fade-up">
            <h2 className="font-bold text-xl md:text-3xl text-center">
              Kunjungi Kami
            </h2>
            <p className="max-w-full text-sm sm:text-base md:text-lg text-justify  text-gray-500 font-medium lg:max-w-[75%] lg:mx-auto">
              Temukan kelezatan Indonesia di setiap hidangan kami. Kunjungi Ayam
              Tuwajuh sekarang dan nikmati pengalaman kuliner yang tak
              terlupakan. Kami berkomitmen untuk memberikan Anda cita rasa yang
              autentik dan kenangan kuliner yang menyenangkan. Selamat
              menikmati!
            </p>
          </div>
        </div>
      </div>
    </AOSWrapper>
  );
};

export default About;
