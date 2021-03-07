import react , {useEffect, useState} from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col,CardImgOverlay, Jumbotron
} from 'reactstrap';
import Cardhai from './Cardhai'


import img from './images/ironman.jpg'
import hulk from './images/hulk.jpg'
import ironman2 from './images/ironman2.jpg'
import thor from './images/thor.jpg'
import ca from './images/ca.jpg'
import avengers from './images/avengers.jpg'

import ironman3 from './images/ironman3.jpg'
import thortdw from './images/thortdw.jpg'
import catws from './images/catws.jpg'
import gotg from './images/gotg.jpg'
import aaou from './images/aaou.jpg'
import antman from './images/antman.jpg'

import cacw from './images/cacw.jpg'
import ds from './images/ds.jpg'

const Mcu = () => {

    const [data, setdata] = useState([])
    const [name, setname] = useState("")
    
  
    useEffect(() => {
      fetchit()
  
    }, [])
    function fetchit() {
      fetch("http://localhost:3000/cardhai").then((result) => {
  
        result.json().then((resp) => {
  
          // console.warn("result is ",resp)
          setdata(resp)
          setname(resp[0].name)
          
        })
      })
    }
    //console.warn(data)

    return (
    
      <div>
          <Jumbotron>
                        <div>
                            <h1 className="text-center mb-5"> PHASE 1</h1>

                        </div>
                        <Row >


                            <Col sm="2">
                                <Cardhai 
                                name={name}
                                des="How tony stark became ironman " 
                                img={img}
                                tlink="https://www.youtube.com/watch?v=8ugaeA-nMTc"
                                /></Col>

                                <Col sm="2">
                                <Cardhai 
                                name="the incredble hulk" 
                                des="how a experiment converterd bruce into hulk"
                                img={hulk}
                                tlink="https://www.youtube.com/watch?v=xbqNb2PFKKA"
                                /></Col>


                            <Col sm="2">
                            <Cardhai 
                            name="Ironman 2" 
                            des="US gov tries to overpoer ironman" 
                            img={ironman2}
                            tlink="https://www.youtube.com/watch?v=wKtcmiifycU"
                            /></Col>


                            <Col sm="2">
                            <Cardhai 
                            name="Thor" 
                            des="asgard introduction in mcu" 
                            img={thor}
                            tlink="https://www.youtube.com/watch?v=vJUDu40Z_RY"
                            /></Col>

                            <Col sm="2">
                            <Cardhai 
                            name="captain america the first avengers" 
                            des="captain introduced into Mcu" 
                            img={ca}
                            tlink="https://www.youtube.com/watch?v=JerVrbLldXw"
                            /></Col>

                            <Col sm="2">
                            <Cardhai 
                            name="The Avengers" 
                            des="all mcu heros unite to defeat loki" 
                            img={avengers}
                            tlink="https://www.youtube.com/watch?v=eOrNdBpGMv8"
                            />
                            </Col>
                        
                        
                        </Row>
        </Jumbotron>
       
        <Jumbotron>
                        <div>
                            <h1 className="text-center mb-5"> PHASE 2</h1>

                        </div>
                        <Row >
                            <Col sm="2">
                                <Cardhai 
                                name="Iron Man 3"
                                des="peronal dusmani from tony stark" 
                                img={ironman3}
                                tlink="https://www.youtube.com/watch?v=Ke1Y3P9D0Bc"
                                /></Col>

                            <Col sm="2">
                                <Cardhai 
                                name="Thor: the dark world" 
                                des="ether introduced in mcu"
                                img={thortdw}
                                tlink="https://www.youtube.com/watch?v=npvJ9FTgZbM&t=7s"
                                /></Col>


                            <Col sm="2">
                            <Cardhai 
                            name="Captain america the winter soldier" 
                            des="hydra introduced and bucky is alive" 
                            img={catws}
                            tlink="https://www.youtube.com/watch?v=7SlILk2WMTI"
                            /></Col>


                            <Col sm="2">
                            <Cardhai 
                            name="Guardians of the galaxy" 
                            des="new charecters in mcu" 
                            img={gotg}
                            tlink="https://www.youtube.com/watch?v=d96cjJhvlMAY"
                            /></Col>

                            <Col sm="2">
                            <Cardhai 
                            name="Avengers age of ultron" 
                            des="ultron and vision introduced in mcu" 
                            img={aaou}
                            tlink="https://www.youtube.com/watch?v=tmeOjFno6Do"
                            /></Col>

                            <Col sm="2">
                            <Cardhai 
                            name="Antman" 
                            des="antman and quantum realmintroduced in mcu" 
                            img={antman}
                            tlink="https://www.youtube.com/watch?v=pWdKf3MneyI"
                            />
                            </Col>
                        
                        
                        </Row>
        </Jumbotron>

        <Jumbotron>
                        <div>
                            <h1 className="text-center mb-5"> PHASE 3</h1>

                        </div>
                        <Row >
                            <Col sm="2">
                                <Cardhai 
                                name="Captain america civil war"
                                des="Sokovia accors results in broke of avengers " 
                                img={cacw}
                                tlink="https://www.youtube.com/watch?v=dKrVegVI0Us"
                                /></Col>

                                


                            <Col sm="2">
                            <Cardhai 
                            name="Doctor strange" 
                            des="time stone introduced with new char dr. strange" 
                            img={ds}
                            tlink="https://www.youtube.com/watch?v=wKtcmiifycU"
                            /></Col>



                            <Col sm="2">
                            <Cardhai 
                            name="Thor" 
                            des="asgard introduction in mcu" 
                            img={thor}
                            tlink="https://www.youtube.com/watch?v=vJUDu40Z_RY"
                            /></Col>

                            <Col sm="2">
                            <Cardhai 
                            name="captain america the first avengers" 
                            des="captain introduced into Mcu" 
                            img={ca}
                            tlink="https://www.youtube.com/watch?v=JerVrbLldXw"
                            /></Col>

                            <Col sm="2">
                            <Cardhai 
                            name="The Avengers" 
                            des="all mcu heros unite to defeat loki" 
                            img={avengers}
                            tlink="https://www.youtube.com/watch?v=eOrNdBpGMv8"
                            />
                            </Col>

                            
                        
                                          
                                          )
                                          }
                            
                        
                        
                        </Row>
                       
        </Jumbotron>
      


        
        </div>


    );
};

export default Mcu;