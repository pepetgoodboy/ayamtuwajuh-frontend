import React from "react";
import { Link } from "react-router-dom";

export default function Button({ type, onClick, variant, text, link }) {
  return (
    <Link to={link}>
      <button
        type={type}
        onClick={onClick}
        className={`bg-orange-400 hover:bg-orange-500 text-white ${variant} font-bold font-outfit py-1.5 px-8 text-sm lg:text-base rounded-lg`}
      >
        {text}
      </button>
    </Link>
  );
}
