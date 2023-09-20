import { Link } from 'react-router-dom';

export default function ImageTextPair({ title, text, image, reverse }) {
  return (
      <div className='flex items-center justify-center'>
        {reverse ? (
          <>
            <Text title={title} text={text}/>
            <Image image={image}/>
          </>
        ) : (
          <>
            <Image image={image}/>
            <Text title={title} text={text}/>
          </>
        )}
      </div>
    );
  }
  

function Image({image}) {
  return (
    <div className="w-1/2">
      < img src={image} alt="side" className="w-4/5" />
    </div>
  )
}
function Text({title, text}) {
  return (
  <div className="w-1/2 text-center px-4">
    <p className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl font-semibold font-sans">
      {title}
    </p>
    <p className="text-md sm:text-xl md:text-xl lg:text-xl xl:text-xl font-semibold text-gray-500 ">
      {text}
    </p>


    <Link to="/About" className="relative mt-4 inline-flex items-center px-4 sm:px-8 py-2 sm:py-3 overflow-hidden font-medium text-blue-600 border-2 border-blue-600 rounded-md hover:text-white group hover:bg-gray-50">
      <span className="absolute left-0 block w-full h-0 transition-all bg-blue-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
      <span className="relative">About Me</span>
    </Link>

  </div>
  )
}

