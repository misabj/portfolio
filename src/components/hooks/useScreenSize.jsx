"use client";

import { useEffect, useState } from "react";

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState();

  useEffect(() => {
    function getScreenSize() {
      return window.innerWidth;
    }

    function handleRezise() {
      setScreenSize(getScreenSize());
    }

    handleRezise();

    window.addEventListener("resize", handleRezise);

    return () => window.removeEventListener("resize", handleRezise);
  }, []);
  return screenSize;
};

export default useScreenSize;
