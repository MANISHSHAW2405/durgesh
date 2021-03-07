import react from 'react'

import {
   Card, CardImg, CardText, CardBody,
   CardTitle, CardSubtitle, Button, Row, Col, CardImgOverlay
} from 'reactstrap';


const Cardhai = ({ name, des, img, tlink }) => {

   return (



      <div>
         <Card className>
            <CardBody className="">
               <CardImg top height="200" src={img} alt="Card image cap" />

               <div className="" >
                  <CardTitle tag="h5">{name}</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">
                  </CardSubtitle>
                  <CardText>{des}</CardText>


                  <a href={tlink}><Button className="bg-primary">Trailer</Button></a>



               </div>
            </CardBody>
         </Card>
         
      </div>
   )

}

export default Cardhai;