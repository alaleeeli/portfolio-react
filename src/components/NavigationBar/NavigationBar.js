import { useState } from 'react';
import Logo from '../Logo';
import MenuButton from './MenuButton';
import NavLink from './NavLink';
import { motion } from 'framer-motion';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export default function NavigationBar() {
  const [isOpen, setIsOpen] = useState(true);

  function toggleMenu() {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav 
      animate={!isOpen ? "open" : "closed"}
    >
    <nav className="bg-gray-900 border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Logo />
        <MenuButton onToggleMenu={toggleMenu} />

        <div className={`w-full md:block md:w-auto ${isOpen ? 'hidden' : ''}`}>
          <motion.ul className="font-medium flex flex-col p-4 md:p-0 rounded-lg md:flex-row  md:space-x-8 md:border-0 bg-gray-900 " variants={variants}>
            <NavLink to="/" onToggleMenu={toggleMenu}>Home</NavLink>
            <NavLink to="/Projects" onToggleMenu={toggleMenu}>Projects</NavLink>
            <NavLink to="/About" onToggleMenu={toggleMenu}>About</NavLink>
            <NavLink to="/Contact" onToggleMenu={toggleMenu}>Contact</NavLink>
          </motion.ul>
        </div>
        
      </div>
    </nav>
    </motion.nav>
  );
}