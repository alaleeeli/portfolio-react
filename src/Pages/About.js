import '../index.css';
import DownloadButton from '../components/Button';
import Footer from '../components/Footer';
import ProfileCard from '../components/Card/ProfileCard';

export default function About() {
  return (
    <>
      <ProfileCard />

      <MyBackground />
      <DownloadButton path="assets/PDFs/Rashed Alaleeli Resume.pdf" title="Download CV"/>

      <div className='text-center mt-3'>
        <span className='text-3xl font-semibold text-gray-700'>Skills</span>
        <div>
          
        </div>
      </div>
    
      <Footer />
    </>

  );
}

// This could be a component in the container folder.
function MyBackground() {
  return (
    <div className="text-center mt-9">
      <span className="text-3xl font-semibold text-gray-700">My Background</span>
      <p className="mt-5 text-gray-600 text-[18px]">
        A graduate student from the University of Nottingham, pursed a bachelor in Computer Science with Artificial intelligence.
        During my academic journey, I had the chance to experience different areas of computer science, and found myself more into 
        web developing, machine learning, and data analysis.
      </p>
    </div>
  )
}

