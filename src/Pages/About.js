import '../index.css';
import DownloadButton from '../components/Button';
import Footer from '../components/Footer';
import ProfileCard from '../components/Card/ProfileCard';

const skills =[
  {
    name: "Python",
    percentage: "60%",
  } ,
  {
    name: "React JS",
    percentage: "30%",
  } ,
  {
    name: "HTML",
    percentage: "70%",
  } ,
  {
    name: "Java",
    percentage: "40%",
  } ,

];

export default function About() {
  return (
    <>
      <ProfileCard />

      <MyBackground />
      <DownloadButton path="assets/PDFs/Rashed Alaleeli Resume.pdf" title="Download CV"/>

      {/* <div className='text-center mt-3'>
        <span className='text-3xl font-semibold text-gray-700'>Skills</span>
      </div>

      { skills.map((skill) => (<ProgressBar text={skill.name} percentage={skill.percentage}/>)) } */}
      
      <Footer title={"Follow me"} lineWidth={'3/4'} />
    </>
  );
}

function ProgressBar({text, percentage}) {
  return <div className='mx-3'>
    <div className='mb-2'>
      <div class="flex justify-between">
        <span class="text-base font-medium text-gray-800">{text}</span>
        <span class="text-sm font-medium text-gray-800">{percentage}</span>
      </div>
      <div class="w-full bg-gray-200 rounded-full h-2.5">
        <div class="bg-gradient-to-l from-rose-400 via-fuchsia-500 to-indigo-500 from h-2.5 rounded-full" style={{ width: percentage }}></div>
      </div>
    </div>
  </div>;
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

