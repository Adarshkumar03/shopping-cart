import {useEffect} from "react"; 
import didiLetter from "./didiLetter.jpeg";
import mataLetter from "./mataLetter.jpeg";

const Letters  = () => {
    const matatext = "Priyappetta shabari, Ninte irupathaam pirannaalinu jnan  enthu gift cheyyan? Nee njangalude bhaagamaaya divasam muthal innuvare nee ennum enikku santhoshame thannittulloo. ,Varum dinangalil nee  swapnam kaanunna jeevithavum, uyarchayum ninakkundakatte ennu jnan aathmaarthamaayi aashamsikkunnu. Ninte chuttinum nee prakasham parathi ellavarkkum thangum thanalum nalki munneran eeshwaran sahaayikkatte. Innathe divasavum ini varaanirikkunna divasangalum ninakku nallathu mathram sammanikkatte ennu praarthichukondu ee valiyammayude hridayam niranja pirannal ashamsakal...❤️❤️❤️💕🎉".split(" ");
    const chhotitext = `Happy happy birthday Shabreeshan! 

    You came into our lives and  filled it with immense joy just with your witty humour and idiotic sense of innocence. I have all the elder sisterly love for you, though when i think back at all my efforts to teach you maths I should have murdered you both tbh. You are a great listener and always know the right thing to say without sounding too smart.
    
   For me, you are this ugly lump of a human who literally grew up in front of me and i constantly struggle to take you seriously but now that you have turned 20, I feel thodi izzat deni start krni padegi. 
   You put your heart and soul into anything your heart finds appealing be it football or being an ace lover so continue doing that! You still are my favourite person for car rides with blaring cheezy bollywood music. 
   I love you ♥`.split(" ");
    useEffect(()=>{
      const items = document.querySelectorAll('.item'),
  controls = document.querySelectorAll('.control'),
  headerItems = document.querySelectorAll('.item-header'),
  descriptionItems = document.querySelectorAll('.item-description'),
  activeDelay = .76,
  interval = 15000;

let current = 0;

const slider = {
  init: () => {
    controls.forEach(control => control.addEventListener('click', (e) => { slider.clickedControl(e) }));
    controls[current].classList.add('active');
    items[current].classList.add('active');
  },
  nextSlide: () => { // Increment current slide and add active class
    slider.reset();
    if (current === items.length - 1) current = -1; // Check if current slide is last in array
    current++;
    controls[current].classList.add('active');
    items[current].classList.add('active');
    slider.transitionDelay(headerItems);
    slider.transitionDelay(descriptionItems);
  },
  clickedControl: (e) => { // Add active class to clicked control and corresponding slide
    slider.reset();
    clearInterval(intervalF);

    const control = e.target,
      dataIndex = Number(control.dataset.index);

    control.classList.add('active');
    items.forEach((item, index) => { 
      if (index === dataIndex) { // Add active class to corresponding slide
        item.classList.add('active');
      }
    })
    current = dataIndex; // Update current slide
    slider.transitionDelay(headerItems);
    slider.transitionDelay(descriptionItems);
    intervalF = setInterval(slider.nextSlide, interval); // Fire that bad boi back up
  },
  reset: () => { // Remove active classes
    items.forEach(item => item.classList.remove('active'));
    controls.forEach(control => control.classList.remove('active'));
  },
  transitionDelay: (items) => { // Set incrementing css transition-delay for .item-header & .item-description, .vertical-part, b elements
    let seconds;
    
    items.forEach(item => {
      const children = item.childNodes; // .vertical-part(s)
      let count = 1,
        delay;
      
      item.classList.value === 'item-header' ? seconds = .015 : seconds = .007;

      children.forEach(child => { // iterate through .vertical-part(s) and style b element
        if (child.classList) {
          item.parentNode.classList.contains('active') ? delay = count * seconds + activeDelay : delay = count * seconds;
          child.firstElementChild.style.transitionDelay = `${delay}s`; // b element
          count++;
        }
      })
    })
  },
}

let intervalF = setInterval(slider.nextSlide, interval);
slider.init();
    },[])
    return <section className="letters">
        <div class="content-width">
        <h1>Aur finally Mata aur Chhoti ki taraf se letters</h1>
  <div class="slideshow">
    <div class="slideshow-items">
      <div class="item">
        <div class="item-image-container">
          <img class="item-image" src={mataLetter} alt=""/>
        </div>
        <div class="item-header">
          <span class="vertical-part"><b>M</b></span>
          <span class="vertical-part"><b>a</b></span>
          <span class="vertical-part"><b>t</b></span>
          <span class="vertical-part"><b>a</b></span>
        </div>
        <div class="item-description">
          {
              matatext.map((word, index)=>{
                  return <span class="vertical-part">
                      <b>{word} &nbsp;</b>
                  </span>
              })
          }     
        </div>
      </div>
      <div class="item">
        <div class="item-image-container">
          <img class="item-image" src={didiLetter} alt=""/>
        </div>
        <div class="item-header">
          <span class="vertical-part"><b>C</b></span>
          <span class="vertical-part"><b>h</b></span>
          <span class="vertical-part"><b>h</b></span>
          <span class="vertical-part"><b>o</b></span>
          <span class="vertical-part"><b>t</b></span>
          <span class="vertical-part"><b>i</b></span>
        </div>
        <div class="item-description">
          {
              chhotitext.map((word, index)=> {
                  return <span className="vertical-part">
                      <b>{word} &nbsp;</b>
                  </span>
              })
          }
        </div>
      </div>
    </div>
    <div class="controls">
      <ul>
        <li class="control" data-index="0"></li>
        <li class="control" data-index="1"></li>
      </ul>
    </div>
  </div>
</div>
    </section>
}

export default Letters;