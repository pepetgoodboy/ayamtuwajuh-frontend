import React from "react";
import Spinner from "react-spinner-material";

export default function ButtonAuth({
  type,
  onClick,
  disabled,
  variant,
  text,
  isLoading,
}) {
  return (
    <>
      <button
        type={type}
        onClick={onClick}
        disabled={disabled || isLoading}
        className={`w-full flex justify-center items-center bg-orange-400 hover:bg-orange-500 ${variant} text-white font-bold font-outfit py-1.5 px-8 text-sm lg:text-base rounded-lg`}
      >
        {isLoading ? (
          <Spinner radius={20} color={"#ffffff"} stroke={2} visible={true} />
        ) : (
          text
        )}
      </button>
    </>
  );
}
