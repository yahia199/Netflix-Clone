import React from "react"
import Card from  "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import trendModal from "../ModalMovie/modelmovie"
import {useState} from "react"

export default function MovieList({trending}){
     const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return(
        <>
        {trending.map(trend=>{
            return(
                <>
                <div key={trend.id}>
               <Card  style={{ width: '18rem',maxHeight:"400px" }}>
  <Card.Img variant="top" src={trend.image} />
  <Card.Body>
    <Card.Title>Title: {trend.title}</Card.Title>
    <Card.Text>
      {trend.overview}
    </Card.Text>
    <Button variant="primary" onClick={handleShow}>Add to Fav</Button>
  </Card.Body>
</Card>
<trendModal trend={trend} show={show} handleClose={handleClose}/>
</div>
</>
            )
        })}
        </>
 
    )
}