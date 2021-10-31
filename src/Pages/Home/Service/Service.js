import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { title, description, img, _id, rating, tourDays, price } = service
    return (
        <div>
            <div>
                <Col>
                    <Card className="border-0 shadow-md">
                        <Card.Img className="" variant="top" src={img} />
                        <p className="absolute left-0 top-44 bg-red-600 text-white px-3 py-1">${price}</p>
                        <Card.Body>
                            <div className="flex justify-between items-center">
                                <p className="text-yellow-600">
                                    <Rating
                                        initialRating={rating}
                                        readonly
                                        emptySymbol="far fa-star"
                                        fullSymbol="fas fa-star"

                                    />
                                </p>
                                <p><i className="far fa-clock text-red-600 mr-1"></i>{tourDays} days</p>
                            </div>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text className="text-base text-medium text-gray-500">
                                {description}
                            </Card.Text>
                            <Link to={`/ordersPlace/${_id}`}>
                                <button className="bg-red-600 text-white py-2 px-4 rounded">Booking Now</button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
            </div>
        </div>
    );
};

export default Service;