import React from "react";
import { Button, Card } from "react-bootstrap";

function MyCard({ cardtrend, handelChosenMovie }) {
    return (
        <div key={cardtrend.id}>
            <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={cardtrend.image} />
                <Card.Body>
                    <Card.Title>{cardtrend.title}</Card.Title>
                    <Card.Text>{cardtrend.overview}</Card.Text>
                    <Button
                        variant="primary"
                        onClick={() => handelChosenMovie(cardtrend)}
                    >
                        Add to Fav
                    </Button>
                </Card.Body>
            </Card>
            {/* <MycardtrendModal movie={movie} show={show} handleClose={handleClose} /> */}
        </div>
    )
}
export default MyCard;