import React, { useEffect, useState } from "react";

const FixedBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 1);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); 

  return (
    <div className="storeFix">
      <a href="#storeHeader">
        <button className={`fixedBtn ${isVisible ? "btn-show" : ""}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="3"
          >
            <path
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M8 7l4-4m0 0l4 4m-4-4v18"
            />
          </svg>
        </button>
      </a>
    </div>
  );
};

export default FixedBtn;