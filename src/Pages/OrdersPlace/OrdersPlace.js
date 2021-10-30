import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import useServices from '../../hooks/UseServices/useServices';

const OrdersPlace = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [servicePack, setServicePack] = useState('')
    const [number, setNumber] = useState('')
    const services = useServices()
    const { id } = useParams()
    const result = services.filter(service => service._id == id)
    const nameHandler = e => {
        setName(e.target.value)
    }
    const packageNameHandler = e => {
        setServicePack(e.target.value)
    }
    const numberHandler = e => {
        setNumber(e.target.value)
    }
    const emailHandler = e => {
        setEmail(e.target.value)
    }
    const addressHandler = e => {
        setAddress(e.target.value)
    }
    const orderHandler = e => {
        const result = { name: name, title: servicePack, number: number, email: email, address: address, }

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
        <div className="grid grid-cols-1 md:grid-cols-2">
            <div>
                <h1>{result[0]?.title}</h1>
            </div>
            <div className="mb-8">
                <h2 className="text-center my-8">Orders</h2>
                <div className="w-96 shadow-md bg-white p-4 mx-auto rounded">
                    <Form >
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="font-medium">Name</Form.Label>
                            <Form.Control onBlur={nameHandler} type="text" placeholder="Enter Name" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="font-medium">Service Package Name</Form.Label>
                            <Form.Control onBlur={packageNameHandler} type="text" value={result[0]?.title} placeholder="Enter Package Name" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="font-medium">Phone Number</Form.Label>
                            <Form.Control onBlur={numberHandler} type="number" placeholder="Phone Number" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="font-medium">Email address</Form.Label>
                            <Form.Control onBlur={emailHandler} type="email" placeholder="Enter Email" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="font-medium">Address</Form.Label>
                            <Form.Control onBlur={addressHandler} type="text" placeholder="Enter Address" required />
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