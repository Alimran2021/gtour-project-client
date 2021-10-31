import React, { useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Card, Col } from 'react-bootstrap';
import { useParams } from 'react-router';
import useServices from '../../hooks/UseServices/useServices';
import useAuth from '../../hooks/useAuth/useAuth'

const OrdersPlace = () => {
    const nameRef = useRef('')
    const servicePackRef = useRef('')
    const numberRef = useRef('')
    const emailRef = useRef('')
    const addressRef = useRef('')
    const priceRef = useRef('')
    const services = useServices()
    const { user } = useAuth()
    const { id } = useParams()
    const servicePack = services.filter(service => service._id == id)

    const orderHandler = e => {
        const name = nameRef.current.value
        const servicePack = servicePackRef.current.value
        const number = numberRef.current.value
        const email = emailRef.current.value
        const address = addressRef.current.value
        const price = priceRef.current.value
        const result = { name: name, title: servicePack, number: number, email: email, address: address, price: price }

        fetch('https://obscure-caverns-66602.herokuapp.com/orders', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(result)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })

        e.preventDefault()
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto my-10 items-center">
            <div>
                <Col>
                    <Card className="border-0 shadow-md">
                        <Card.Img className="" variant="top" src={servicePack[0]?.img} />
                        <Card.Body className="text-center text-2xl">
                            <div className="flex justify-between items-center">
                                {/* <p className="text-yellow-600">
                                    <Rating
                                        initialRating={servicePack[0]?.rating}
                                        readonly
                                        emptySymbol="far fa-star"
                                        fullSymbol="fas fa-star"

                                    />
                                </p> */}
                                
                            </div>
                            <Card.Title>{servicePack[0]?.title}</Card.Title>
                            <p><i className="far fa-clock text-red-600 mr-1"></i>{servicePack[0]?.tourDays} days</p>
                                                    <p className="">${servicePack[0]?.price}</p>
                            <Card.Text className="text-base text-medium text-gray-500">
                                {servicePack[0]?.description}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </div>
            <div className="mb-8">
                <h2 className="text-center my-8">Booking</h2>
                <div className="w-96 shadow-md bg-white p-4 mx-auto rounded">
                    <Form >
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="font-medium">Name</Form.Label>
                            <Form.Control ref={nameRef} type="text" defaultValue={user?.displayName} placeholder="Enter Name" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="font-medium">Service Package Name</Form.Label>
                            <Form.Control ref={servicePackRef} type="text" defaultValue={servicePack[0]?.title} placeholder="Enter Package Name" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="font-medium">Package Price</Form.Label>
                            <Form.Control ref={servicePackRef} type="number" defaultValue={servicePack[0]?.price} placeholder="Enter Price" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="font-medium">Phone Number</Form.Label>
                            <Form.Control ref={numberRef} type="number" placeholder="Phone Number" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="font-medium">Email address</Form.Label>
                            <Form.Control ref={emailRef} type="email" defaultValue={user?.email} placeholder="Enter Email" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="font-medium">Address</Form.Label>
                            <Form.Control ref={addressRef} type="text" placeholder="Enter Address" required />
                        </Form.Group>

                        <Button onClick={orderHandler} className="w-80 mt-4" variant="primary" type="submit">
                            Order Now
                        </Button>
                    </Form>
                </div>
            </div>

        </div>
    );
};

export default OrdersPlace;