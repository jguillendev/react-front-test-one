import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const HomeMenu = () => {
  return (
    <motion.ul
      initial={{ y: 300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -300, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className=" mt-8 flex flex-col title space-y-3"
    >
      <Link
        to="/planetas"
        className="cursor-pointer hover:text-gray-100 hover:scale-110 transition-all duration-100"
      >
        Planetas
      </Link>
      <Link
        to="/personajes"
        className="cursor-pointer hover:text-gray-100 hover:scale-110 transition-all duration-100"
      >
        Personajes
      </Link>
      <Link
        to="/naves"
        className="cursor-pointer hover:text-gray-100 hover:scale-110 transition-all duration-100"
      >
        Naves
      </Link>
    </motion.ul>
  );
};
