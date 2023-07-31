import './aboutme.css';
import { useNavigate } from 'react-router-dom';
import {useEffect, useState} from 'react';
import axios from 'axios'

import background4 from './assets/computer_screen.gif'
import resume from './assets/Ryan Oh_resume.pdf'

async function fetchData() {
  var response = await axios.get(``);  
  return response.data;
}


const AboutMe = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate('/');

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function check() {
        try {
            setLoading(true);
            const data = await fetchData();
            console.log(data);
            setData(data);
            setLoading(false);
        }
        //Error
        catch (error) {
            setLoading(false);
            console.log("ERROR!", error);
        }
    }
    check();
}, []);
 

  
  return (
    <div className="AboutMe">
      <h2 className="Title">
        Hello!
      </h2>

      {/* insert image here */}
      <div className='ImageField' style={{backgroundImage: `url(${background4})`, backgroundSize: 'cover'}}>
        
      </div>
      
      
      
      <div className = "TextField">
        <h2 classname = "Introduction">
          My Name is Ryan Oh, <br/> sophomore at UCLA pursuing B.S in Computer Science. 
          <br/> <br/> <br/>
          I am a full-stack engineer, able to use React, C++, Java, C, Python, and etc. 
          <br/> <br/><br/>
          Click below for my resume (CV) or Instagram!
        </h2>
        
        <div classname = "button_space">
          <a className = "resume_button" href = {resume} download> Resume </a>
          <a className = "instagram_button" href = 'https://instagram.com/ryanoh279?igshid=MmIzYWVlNDQ5Yg==' target="_blank"> Instagram</a>
        </div>
       
      </div>





      

      <button className="return" onClick={handleClick}> Back </button>
    </div>

  );
}
export default AboutMe