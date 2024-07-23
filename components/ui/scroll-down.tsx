"use client";

import { useEffect } from "react";
import { FaAngleDown } from "react-icons/fa";

const ScrollDown = () => {

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      const scrollDown = document.getElementById("scrollDownButton");
      if (scrollDown) {
        scrollDown.style.opacity = scroll > 100 ? "0" : "1";
      }
    };

    document.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <a id="scrollDownButton" href="#resume-area">
      <div className="absolute bottom-6 right-6 rounded-full bg-neutral-800 p-4 transition-all hover:bg-neutral-700">
        <FaAngleDown className="fill-white" />
      </div>
    </a>
  );
};

export default ScrollDown;
