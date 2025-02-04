import React, { useEffect, useState } from "react";
// import "../Thunk";

const FixedBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Проверяем, если прокрутка больше 1 пикселя
      setIsVisible(window.scrollY > 1);
    };

    // Добавляем обработчик события scroll
    window.addEventListener("scroll", handleScroll);

    // Очистка: удаляем обработчик при размонтировании компонента
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Пустой массив зависимостей означает, что эффект выполнится только при монтировании и размонтировании

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
            strokeWidth="3" // Используйте strokeWidth вместо stroke-width
          >
            <path
              strokeLinecap="round" // Используйте strokeLinecap вместо stroke-linecap
              strokeLinejoin="round" // Используйте strokeLinejoin вместо stroke-linejoin
              d="M8 7l4-4m0 0l4 4m-4-4v18"
            />
          </svg>
        </button>
      </a>
    </div>
  );
};

export default FixedBtn;