import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonLoading = ({ src, alt, className }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    };
    img.src = src;
  }, [src]);

  return (
    <>
      {isLoading ? (
        <Skeleton count={5} />
      ) : (
        <img src={src} alt={alt} className={className} />
      )}
    </>
  );
};

export default SkeletonLoading;
