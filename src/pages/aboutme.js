import { Button } from 'react-scroll';
import './aboutme.css';
import Typed from 'react-typed';
import {useNavigate} from 'react-router-dom';

//Easy scrollable
// Homepage for the website
const AboutMe = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate('/');

  return (
    <div className="AboutMe">
      <h2 className="Title">
        Hello!     
        <h2 className="Subtext">
          My name is Ryan Oh, a student pursuing Computer Science at UCLA. 
        </h2>
      </h2>
    
      <button className= "return" onClick={handleClick}> Back </button>
    </div>
    
  );
}
export default AboutMe