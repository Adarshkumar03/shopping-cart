import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import arziyaan from "./arziyaan.mp3";
const Intro = () => {
   const [audio, setAudio] = useState(null);
   const play = () => {
      audio.play();
   }

   useEffect(()=>{
     setAudio(new Audio(arziyaan));
   },[]);

   return <section className="intro">
       <h1>Happy Birthday Shabree/Shabreeshan/Arjun!</h1>
    <p class="subtitle">Yeh rha meri taraf se gift<br/>(Made from kabadi jaisa laptop)!</p>
    <button onClick={()=>{play()}}>Play</button>
   </section>
}

export default Intro;