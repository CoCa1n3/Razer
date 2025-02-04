import React from "react";
import { useLocalStorage } from "@uidotdev/usehooks";

// Создаем контекст
const FavContext = React.createContext();

// Создаем провайдер
const FavContextProvider = ({ children }) => {
  const [fav, saveFav] = useLocalStorage("favourites", []);

  // Функция для добавления/удаления элемента из избранного
  const handleAddToFav = (el) => {
    const isExists = fav.find((itm) => itm._id === el._id);

    if (isExists) {
      // Удаляем элемент, если он уже в избранном
      saveFav(fav.filter((itm) => itm._id !== el._id));
    } else {
      // Добавляем элемент, если его нет в избранном
      saveFav([...fav, el]);
    }
  };

  // Возвращаем провайдер с передачей значений
  return (
    <FavContext.Provider value={{ handleAddToFav, fav }}>
      {children}
    </FavContext.Provider>
  );
};

export { FavContext, FavContextProvider };
