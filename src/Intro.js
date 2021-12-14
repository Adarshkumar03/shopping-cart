import { useState} from "react";
import arziyaan from "./arziyaan.mp3";
const Intro = () => {
   const [audio] = useState(new Audio(arziyaan));
   const play = () => {
      audio.play();
   }

   return <section className="intro">
       <h1>Happy Birthday Shabree/Shabreeshan/Arjun!</h1>
    <p class="subtitle">Yeh rha meri taraf se gift<br/>(Made from kabadi jaisa laptop)!</p>
    <button onClick={()=>{play()}}>Play(Arziyaan)</button>
   </section>
}

export default Intro;