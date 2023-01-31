import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { HomeMenu } from "../components/home.menu";

export const HomePage = () => {
  const [showOptions, setShowOptions] = useState(false);
  const onStartHandler = () => {
    setShowOptions(true);
  };
  return (
    <main className="flex justify-center items-center overflow-hidden select-none">
      <div className="absolute top-0 left-0 pt-2 pl-4">
        <p className="text-yellow-500 text-xl font-bold">
          PLICK <span className="text-gray-100">test</span>
        </p>
      </div>
      {showOptions ? (
        <AnimatePresence initial={true}>
          <HomeMenu />
        </AnimatePresence>
      ) : (
        <button
          className="title bg-gray-200 rounded-md px-4 py-2 shadow-lg hover:shadow-2xl hover:scale-110 transition-all ease-in-out"
          onClick={onStartHandler}
        >
          Inicio
        </button>
      )}
      <div className="absolute bottom-0 left-0 pb-4 pl-4">
        <p className="text-yellow-500 text-xl font-bold select-none">
          jguillénDev <span className="text-gray-100">2023</span>
        </p>
      </div>
    </main>
  );
};
