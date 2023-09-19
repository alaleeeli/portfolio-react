import '../index.css';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/Card';
import Footer from '../components/Footer/Footer';
import IntroImage from '../components/HeroSection';
import ImageTextPair from '../container/ImageTextPair';

export default function Home() {
  return (
    <>
      <IntroImage path="assets/Images/IMG_2321.jpg" title="Hello Friend" />
      <ImageTextPair />
      
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


