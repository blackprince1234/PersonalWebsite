import './homescreen.css';
import Header from "./header";
import Typed from 'react-typed';


import sound from "./assets/Cheek to Cheek.mp3"
import sound2 from "./assets/In the Mood.mp3"
import sound3 from "./assets/La Vie En Rose.mp3"
import sound4 from "./assets/Girl from Ipanema.mp3"

import staticNoise from "./assets/radiostatic.mp3"
import { useState } from 'react';

//Import all the backgrounds
import background1 from './assets/background1.gif';
import background2 from './assets/background2.gif';
import background3 from './assets/background3.gif';
import background4 from './assets/background4.gif';

import pause from './assets/paused.png';
import next from './assets/next.png';
import back from './assets/back.png';
const audio = new Audio(sound);
const audio2 = new Audio(sound2);
const audio3 = new Audio(sound3);
const audio4 = new Audio(sound4);

const noise = new Audio(staticNoise);


const ImageButton = () => {
  return (
    <button className="customButton" style={{ border: 'none', outline: 'none', }}>
      <img className="customImage" src={next} alt="Button Image" />
    </button>
  );
};
const ImageButton2 = () => {
  return (
    <button className="customButton" style={{ border: 'none', outline: 'none', }}>
      <img className="customImage" src={pause} alt="Button Image" />
    </button>
  );
};

const ImageButton3 = () => {
  return (
    <button className="customButton" style={{ border: 'none', outline: 'none', }}>
      <img className="customImage" src={back} alt="Button Image" />
    </button>
  );
};
function HomePage() {

  //Contians imagesd and background
  var totalArray = [];
  totalArray.push({ name: 'Cheek to Cheek', audio: audio, background: `url(${background1})` });
  totalArray.push({ name: 'In the Mood', audio: audio2, background: `url(${background2})` });
  totalArray.push({ name: 'La Vie En Rose', audio: audio3, background: `url(${background3})` });
  totalArray.push({ name: 'Girl from Ipanema', audio: audio4, background: `url(${background4})` });




  let currentIndex = 0;

  //Changing background function (Make it into array list of string)

  let original_background = 'url(' + "https://media4.giphy.com/media/cIJyNTHOIbR69gcMSb/giphy.gif?cid=ecf05e47oh8w3ifsmok13fjnnqduc6g8iz01ehe6qark5w1y&ep=v1_gifs_search&rid=giphy.gif&ct=g" + ')';
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

    <div id="bg" className="Home" style={{ background: backgroundImage, backgroundSize: 'cover' }}>
      <Header />

      <div className="subtextSpace">
        <Typed strings={["Hello World!",]}
          className="fontSubtext"
          typeSpeed={200}
          showCursor = {false}
        />
        {/* For buttons. Need to change the frontend*/}
        <div className="subButtonSpace">
          <ImageButton3/>
          <ImageButton2/>
          <ImageButton/>
        </div>
      </div>

      {/* Buttons to navigate through music (Delete later) */}
      <button className="previousTrack" onClick={() => backgroundChange(-1)} > Previous </button>
      <button className="nextTrack" onClick={() => backgroundChange(1)}> Next </button>
    </div>
  );
}





export default HomePage;