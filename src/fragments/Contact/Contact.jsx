import React from "react";
import Call from "/call.jpg";
import Button from "../../components/Button/Button";
import AOSWrapper from "../../composables/AOSWrapper/AOSWrapper";

const Contact = () => {
  return (
    <AOSWrapper>
      <div className="w-full py-10 md:py-20 font-jakarta">
        <div
          className="w-11/12 md:w-5/6 mx-auto mt-3 sm:mt-10 md:mt-12 lg:mt-6 px-5 lg:px-0 flex flex-col gap-14"
          data-aos="fade-up"
        >
          <h2 className="font-bold text-2xl md:text-4xl text-center">
            Kontak Kami
          </h2>
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 ">
            <div className="w-full md:w-[45%]">
              <img
                src={Call}
                alt="call"
                className="max-w-full md:mt-6 mx-auto rounded-2xl"
              />
            </div>
            <div className="w-full md:w-[55%] flex flex-col gap-5 sm:gap-7 justify-center">
              <h2 className="font-jakarta font-semibold text-2xl md:text-3xl leading-snug md:leading-snug lg:leading-snug">
                Kirimi kami pesan
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-500 font-medium font-jakarta">
                Terima kasih telah mengunjungi situs web kami! Di Ayam Tuwajuh,
                kami berkomitmen untuk memberikan layanan pelanggan terbaik.
                Jika Anda memiliki pertanyaan, umpan balik, atau membutuhkan
                bantuan, jangan ragu untuk menghubungi kami melalui salah satu
                metode di bawah ini.
              </p>
              <Button text="Hubungi Kami" link="/" variant="w-48" />
            </div>
          </div>
        </div>
      </div>
    </AOSWrapper>
  );
};

export default Contact;
