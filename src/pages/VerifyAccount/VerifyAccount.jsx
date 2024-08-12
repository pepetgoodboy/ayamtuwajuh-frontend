import React, { useContext, useEffect, useState } from "react";
import DefaultLayout from "../../layouts/DefaultLayout/DefaultLayout";
import { useParams } from "react-router-dom";
import axios from "axios";
import Button from "../../components/Button/Button";
import { StoreContext } from "../../context/StoreContext";

const VerifyAccount = () => {
  const { url } = useContext(StoreContext);
  const { token } = useParams();
  const [verificationStatus, setVerificationStatus] = useState("");

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const response = await axios.get(`${url}/api/user/verify/${token}`);
        setVerificationStatus(response.data.message);
      } catch (error) {
        setVerificationStatus(error.response.data.message);
      }
    };

    verifyEmail();
  }, [token]);

  return (
    <>
      <DefaultLayout>
        <div className="w-full h-[70vh] items-center flex justify-center py-16 font-jakarta">
          {verificationStatus === "Berhasil verifikasi email!" ? (
            <div className="flex flex-col justify-center gap-5 items-center">
              <p className="text-center text-xl md:text-2xl lg:text-3xl text-gray-700 font-semibold">
                Email berhasil diverifikasi!
              </p>
              <p className="text-center text-sm md:text-base text-gray-500 font-medium">
                Email anda berhasil diverifikasi. Sekarang anda dapat login
                untuk mengakses fitur yang tersedia di sini.
              </p>
              <Button text="Login Disini" link="/login" />
            </div>
          ) : (
            <span className="text-red-500 text-center text-xl md:text-2xl">
              {verificationStatus}
            </span>
          )}
        </div>
      </DefaultLayout>
    </>
  );
};

export default VerifyAccount;
