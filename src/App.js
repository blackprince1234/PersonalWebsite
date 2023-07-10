import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Home from './pages/homescreen.js'
import AboutMe from './pages/aboutme.js';
import PreviousWOrk from './pages/previouswork.js';
import ContactMe from './pages/contactme.js';
import SearchBar from './searchBar';

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
