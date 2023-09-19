import { Link } from 'react-router-dom';

export default function NavLink({ to, onToggleMenu, children }) {
  const style = "block py-2 pl-3 pr-4 text-white text-lg rounded hover:bg-gray-500 md:hover:bg-transparent md:border-0 hover:text-blue-700 md:p-0";

  return (
    <li>
      <Link to={to} className={style} onClick={onToggleMenu}>
        {children}
      </Link>
    </li>
  );
}
