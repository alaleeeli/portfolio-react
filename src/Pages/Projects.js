import '../index.css';
import { ProjectCard } from '../Components/ProjectCard';
import { Footer } from '../Components/Footer';

export default function Projects() {
  return (
    <>
    <section class="py-5 mt-5">

        <div class="text-center">
          <p class="font-semibold text-3xl mb-1">Projects Portfolio</p>
        </div>

        <div class="text-center">
            <p class="font-medium text-xl text-gray-800 mb-1 px-4">
                Welcome to my University Projects Portfolio!  <br />
                This page serves as a gallery of the remarkable work accomplished during my time at university. 
                These projects reflect not only the knowledge gained but also the dedication and creativity poured into each endeavor. 
                From research papers to group assignments and personal innovations, this portfolio encapsulates the essence of academic growth and problem-solving. 
                Feel free to browse through these projects for inspiration or insight into my academic journey.
            </p>
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
        
      </section>

      <Footer />
      
      </>
     
  );
}