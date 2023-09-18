import '../index.css';
import DownloadButton from '../Components/DownloadButton';
import Footer from '../Components/Footer';
import SocialList from '../Components/Social Media/SocialList';

export default function About() {
  return (
    <>
      <div className="w-full mt-7 gap-4 grid grid-cols-1 md:flex-wrap md:flex justify-center items-center">
        <div className="w-80 p-2 bg-white rounded-xl shadow-lg hover:shadow-2xl md:mx-0 mx-auto">
          <div className="flex">
            <div id="image-background" className="relative flex h-[200px] w-screen items-center justify-center before:absolute before:h-[150px] before:w-[120px] before:rounded-full before:bg-gradient-to-t before:from-coffee-800 before:to-coffee-300">
              <img className="z-10 h-[120px] mb-5 " src="assets/images/memoji.PNG" type="image" alt="" />
            </div>
          </div>
          
          <div className="text-center">
            <h2 className="font-semibold text-lg mb-2 text-gray-800">Rashed Alaleeli</h2>
            <p className="text-sm text-gray-600">Frontend Developer / Design Enthusiast.</p>
          </div>

          <div className="inline-flex items-center justify-center w-full">
            <hr className="w-10/12 h-px mb-3 bg-gray-200 border-0" />
          </div>

          <SocialList height="7" width="7"/>
        </div>
      </div>

      <MyBackground />
      <DownloadButton path="assets/PDFs/Rashed Alaleeli Resume.pdf" title="Download CV"/>
    
      <Footer />

    </>

  );
}

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

