import '../index.css';
import { Link } from 'react-router-dom';
import ProjectCard from '../Components/ProjectCard';
import Footer from '../Components/Footer';
import IntroImage from '../Components/IntroImage';

export default function Home() {
  return (
    <>
      <IntroImage path="assets/Images/IMG_2321.jpg" title="Hello Friend" />
      <AboutMe />
      
      <section className="py-5 mt-7">

        <div className="text-center">
          <p className="font-semibold text-3xl mb-1">Projects Portfolio</p>
        </div>

        <div className="w-full mt-7 gap-4 grid grid-cols-1 md:flex-wrap md:flex justify-center items-center">

          <ProjectCard 
            image="assets/images/Picture5.png" 
            title="Predicting functionality"
            text="Predicting functionality of waterpumps in Tanzania to determine if they need repairs or not ..."
            page="/DataScience" />
          
          <ProjectCard 
            image="assets/images/Picture1.png" 
            title="Computer Vision"
            text="Image classification and segmentation of different species of flowers and analyzing their features ..."
            page="/ComputerVision" />

          <ProjectCard 
            image="assets/images/Picture8.png" 
            title="Running Tracker"
            text="An andriod application that track user location when running and provide different data of the run ..."
            page="/RunningTracker" />

        </div> 

          <div className="flex justify-center mt-7">
            <Link role='button' to="/Projects" className="text-white bg-blue-600 drop-shadow-md px-3 py-2 rounded-md hover:bg-blue-700">See More</Link>
          </div>

      </section>

      <Footer />
    </>
  
  );
}

function AboutMe() {
  return (
    <div className='flex items-center justify-center'>

        <div className="w-1/2 text-center px-4">
          <p className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl font-semibold font-sans">
            Hi, I'm Rashed Alaleeli
          </p>
          <p className="text-md sm:text-xl md:text-xl lg:text-xl xl:text-xl font-semibold text-gray-500 ">
            A frontend developer & Design Enthusiast
          </p>
          

          <Link to="/About" className="relative mt-4 inline-flex items-center px-4 sm:px-8 py-2 sm:py-3 overflow-hidden font-medium text-blue-600 border-2 border-blue-600 rounded-md hover:text-white group hover:bg-gray-50">
            <span className="absolute left-0 block w-full h-0 transition-all bg-blue-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
            <span className="relative">About Me</span>
          </Link>
        
        </div>

        <div className="w-1/2">
          <img src="assets/Images/developer.svg" alt="programmer" className="w-4/5" />
        </div>

      </div>
  )
}

