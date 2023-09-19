import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link to="/" className="flex items-center">
      <img src="assets/icons/programmer.png" className="h-8 mr-3" alt="Logo" />
      <span className="self-center text-2xl font-semibold text-white">Rashed Alaleeli</span>
    </Link>
  );
}
