export default function MenuButton({ onToggleMenu }) {
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
          stroke="currentColor">
          <path d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>
  );
}
