import { Link } from 'react-router-dom';

export function ProjectCard({ image, title, text, page }) {
  return (
    <div className="w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl md:mx-0 mx-auto">

      <img className="h-40 object-cover rounded-lg" src={image} alt="" />

      <div className="p-2">
        <h2 className="font-bold text-lg mb-2 ">{title}</h2>
        <p className="text-sm text-gray-600">{text}</p>
      </div>

      <MoreButton page={page} />

    </div>

  );
}
function MoreButton({ page }) {
  return (
    <div className="m-2">
      <Link role='button'
        to={page}
        className="inline-flex items-center px-3 py-1 text-white bg-blue-600 rounded-md hover:bg-blue-700">
        Read More
        <svg className="w-5 h-5 ml-2"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">

          <path stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3">
          </path>
        </svg>
      </Link>
    </div>
  );
}
