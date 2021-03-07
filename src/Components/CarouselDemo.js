import react from 'react'
import Carousel from 'react-bootstrap/carousel'
import phase1 from './images/phase1.jpg'
import phase2 from './images/phase2.jpg'
import phase3 from './images/phase3.jpg'
import temp1 from './images/temp1.jpg'
 import temp2 from './images/temp2.jpeg'
import temp3 from './images/temp3.jpeg'
import ReactPlayer from 'react-player/lazy'

function CarouselDemo(){
    return(
      <div>
      <Carousel >
         <Carousel.Item>
         <img className="d-block w-100"   src={temp1} alt="first image" style={{height: "80vh"}}/>
            <Carousel.Caption>
            <h1>PHASE 1</h1>
            <p>FULL OF ACTION AND CHARECTER BUILDING</p>
             </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
           <img className="d-block w-100"   src={temp2} alt="first image" style={{height: "80vh"}}/>
            <Carousel.Caption>
            <h1>PHASE 2</h1>
            <p>NEW CHARECTERS WITH INTRO OF SOME INFINITY STONES</p>
             </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
           <img className="d-block w-100"   src={temp3} alt="first image" style={{height: "80vh"}}/>
            <Carousel.Caption>
            <h1>PHASE 3</h1>
            <p>AVENGERS BROKE UP AND THANOS INVADES AND ELIMINATES 50% LIFE FORMS FROM THE UNIVERSE</p>
             </Carousel.Caption>
          </Carousel.Item>
          



      </Carousel>
    </div>




    )
  
}


export default CarouselDemo;