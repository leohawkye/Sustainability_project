import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Card, Button, CardImg} from "react-bootstrap";
const Card= props=>{
    let {imgSrc, price, title}= props.data
    return (
            <Card className="p-0 overflow-hidden h-100 shadow">
                <div className="overflow-hidden rounded p-0 bg-light">
                    <Card.Img variant="top" src={ " "}/>
                </div>         
            <Card.body className=" text-center">
                <Card.Title classname="display-6">{price}</Card.Title>
                <Card.Title>{title}</Card.Title>
            </Card.body>
            <Button className="w-100 rounded-0" variant="success">Add To cart</Button>
            </Card>
        
    );
};
export default Card;