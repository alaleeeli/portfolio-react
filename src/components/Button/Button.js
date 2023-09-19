export default function DownloadButton({ title, path }) {
  return (
    <div className="flex justify-center mt-5 mb-5">
      <a href={path} download>
        <button type="button" className="px-4 py-3 bg-blue-600 rounded-md text-white outline-none focus:ring-4  drop-shadow-lg hover:shadow-2xl hover:bg-blue-700 transform active:scale-x-75 transition-transform flex">
          <svg 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor">
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          <span className="ml-2">{title}</span>
        </button>
      </a>
    </div>
  );
}
