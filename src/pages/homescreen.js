import './homescreen.css';
import Header from "../header";
import Typed from 'react-typed';


import sound from "./assets/Cheek to Cheek.mp3"
import sound2 from "./assets/In the Mood.mp3"
import sound3 from "./assets/La Vie En Rose.mp3"
import sound4 from "./assets/Girl from Ipanema.mp3"

import staticNoise from "./assets/radiostatic.mp3"
import { useState } from 'react';

//Import all the backgrounds
import background from './assets/home_background.gif';
import background1 from './assets/background1.gif';
import background2 from './assets/background2.gif';
import background3 from './assets/background3.gif';
import background4 from './assets/background4.gif';

const audio = new Audio(sound);
const audio2 = new Audio(sound2);
const audio3 = new Audio(sound3);
const audio4 = new Audio(sound4);

const noise = new Audio(staticNoise);


var totalArray = [];
export const datas = [
  { name: 'Cheek to Cheek', audio: audio, background: `url(${background1})` },
  { name: 'In the Mood', audio: audio2, background: `url(${background2})` },
  { name: 'La Vie En Rose', audio: audio3, background: `url(${background3})` },
  { name: 'Girl from Ipanema', audio: audio4, background: `url(${background4})` }
]
function HomePage() {

  //Contians imagesd and background

  totalArray.push({ name: 'Cheek to Cheek', audio: audio, background: `url(${background1})` });
  totalArray.push({ name: 'In the Mood', audio: audio2, background: `url(${background2})` });
  totalArray.push({ name: 'La Vie En Rose', audio: audio3, background: `url(${background3})` });
  totalArray.push({ name: 'Girl from Ipanema', audio: audio4, background: `url(${background4})` });




  let currentIndex = 0;

  //Changing background function (Make it into array list of string)

  let original_background = 'url(' + background + ')';
  const [backgroundImage, setBackgroundImage] = useState(original_background);

  const backgroundChange = (param1) => {
    if (currentIndex == totalArray.length - 1) currentIndex = 0;
    else currentIndex++;
    
    let nextImage = totalArray.at(currentIndex).background;
    document.getElementById("bg").style.background = nextImage;
    document.getElementById("bg").style.backgroundSize = "100% 100%";

    for (const child of document.getElementById("bg").children) {
      if (child.className === "subtextSpace") {
        for (const child2 of child.children) {
          if (child2.className === "fontSubtext")   child2.innerHTML = totalArray.at(currentIndex).name;
        }
        break;
      }
    }
    for (let i = 0; i < totalArray.length; i++) {
      totalArray.at(i).audio.pause();
    }
    totalArray.at(currentIndex).audio.loop = true;
    totalArray.at(currentIndex).audio.volume = 0.1;
    totalArray.at(currentIndex).audio.play();
  }
  return (

    <div id="bg" className="Home" style={{ background: backgroundImage, backgroundSize: 'cover',}}>
      <Header />

      <div className="subtextSpace">
        <Typed strings={["Hello World!",]}
          className="fontSubtext"
          typeSpeed={200}
          showCursor = {false}
        />
        {/* For buttons. Need to change the frontend*/}
        <div className="subButtonSpace">
          {/* <ImageButton3/>
          <ImageButton2/>
              border: 1px solid red;

          <ImageButton/> */}
            <button className="previousTrack" onClick={() => backgroundChange(-1)} > Previous </button>
            <button className="nextTrack" onClick={() => backgroundChange(1)}> Next </button>
        </div>
      </div>

     
    </div>
  );
}





export default HomePage;