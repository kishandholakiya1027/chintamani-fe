// ScrollToTopButton.js

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div
          onClick={scrollToTop}
          className="fixed h-[42px] w-[42px] flex items-center justify-center bottom-[20px] right-[20px] cursor-pointer bg-[#000] opacity-[0.5] shadow-scrolltotop"
        >
          <FontAwesomeIcon
            icon={faChevronUp}
            className="text-[24px] text-[#fff]"
          />
        </div>
      )}
    </>
  );
};

export default ScrollToTopButton;
