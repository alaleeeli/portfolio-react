import { useState } from 'react';
import Logo from '../Logo';
import MenuButton from './MenuButton';
import NavLink from './NavLink';

export default function NavigationBar() {
  const [isOpen, setIsOpen] = useState(true);

  function toggleMenu() {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Logo />
        <MenuButton onToggleMenu={toggleMenu} />

        <div className={`w-full md:block md:w-auto ${isOpen ? 'hidden' : ''}`}>
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg bg-gray-50 md:flex-row  md:mt-0 md:space-x-8 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <NavLink to="/" onToggleMenu={toggleMenu}>Home</NavLink>
            <NavLink to="/Projects" onToggleMenu={toggleMenu}>Projects</NavLink>
            <NavLink to="/About" onToggleMenu={toggleMenu}>About</NavLink>
            <NavLink to="/Contact" onToggleMenu={toggleMenu}>Contact</NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
}


