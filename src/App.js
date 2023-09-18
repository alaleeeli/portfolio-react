import './index.css';
import NavigationBar from './Components/NavigationBar';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import About from './Pages/About';
import Contact from './Pages/Contact';
import RunningTracker from './Pages/RunningTracker'
import DataScience from './Pages/DataScience'
import ComputerVision from './Pages/ComputerVision'
import { Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <NavigationBar />
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Projects' element={<Projects />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/RunningTracker' element={<RunningTracker />} />
          <Route path='/ComputerVision' element={<ComputerVision />} />
          <Route path='/DataScience' element={<DataScience />} />
        </Routes>
      </div>
    </div>
  
  );
}

