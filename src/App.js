import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Home from './homescreen.js'
import AboutMe from './aboutme.js';
import PreviousWOrk from './previouswork.js';
import ContactMe from './contactme.js';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/aboutme" element={<AboutMe/>} />
          <Route path="/previouswork" element={<PreviousWOrk/>} />
          <Route path="/contactme" element={<ContactMe/>} />

        </Routes>
      </Router>
    </div>




  );
}
export default App;
