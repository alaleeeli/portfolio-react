import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

export default function NavLink({ to, onToggleMenu, children }) {
  const style = "block py-2 pl-3 pr-4 text-white text-lg rounded hover:bg-gray-200  md:hover:bg-transparent md:border-0 hover:text-blue-600 md:p-0";

  return (
    <motion.li
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link to={to} className={style} onClick={onToggleMenu}>
        {children}
      </Link>
    </motion.li>
  );
}
