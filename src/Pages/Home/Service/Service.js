import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { title, description, img, _id } = service
    return (
        <div>
            <div>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>
                                {description}
                            </Card.Text>
                            <Link to={`/ordersPlace/${_id}`}>
                                <button className="btn btn-primary">Bookin Now</button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
            </div>
        </div>
    );
};

export default Service;