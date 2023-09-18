import { useState } from 'react';
import { Link } from 'react-router-dom';

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
            <NavLink to="/">Home</NavLink>
            <NavLink to="/Projects">Projects</NavLink>
            <NavLink to="/About">About</NavLink>
            <NavLink to="/Contact">Contact</NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function Logo() {
  return (
    <Link to="/" className="flex items-center">
      <img src="assets/icons/programmer.png" className="h-8 mr-3" alt="Logo" />
      <span className="self-center text-2xl font-semibold text-white">Rashed Alaleeli</span>
    </Link>
  )
}

function NavLink({to, children}) {
  const style = "block py-2 pl-3 pr-4 text-white text-lg rounded hover:bg-gray-500 md:hover:bg-transparent md:border-0 hover:text-blue-700 md:p-0"

  return (
    <li>
      <Link to={to} className={style}>
        {children}
      </Link>
    </li>
  )
}

function MenuButton({onToggleMenu}) {
  return (
    <div className="md:hidden inline-flex items-center">
      <button className="outline-none mobile-menu-button" onClick={onToggleMenu}>
        <svg
          className={`w-6 h-6 text-gray-500 hover:text-gray-700`}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor" >
          <path d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>
  )
}
