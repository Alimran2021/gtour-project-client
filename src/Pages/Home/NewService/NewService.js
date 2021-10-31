import React, { useRef } from 'react';
import { Form, Button } from "react-bootstrap"

// new service add here
const NewService = () => {
    const titleRef = useRef('')
    const cityRef = useRef('')
    const priceRef = useRef('')
    const desRef = useRef('')
    const ratingRef = useRef('')
    const imgRef = useRef('')
    const tourRef = useRef('')
    // submit handler here

    const handleSubmit = (e) => {
        e.preventDefault()
        const title = titleRef.current.value
        const city = cityRef.current.value
        const price = priceRef.current.value
        const des = desRef.current.value
        const rating = ratingRef.current.value
        const img = imgRef.current.value
        const tour = tourRef.current.value

        const newService = {
            title: title, city: city, price: price, description: des,
            rating: rating, img: img, tourDays: tour
        }
        fetch('https://obscure-caverns-66602.herokuapp.com/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newService)
        })
    };
    return (
        <div className="grid grid-cols-1  my-20 container mx-auto">
            <div>
                <h1 className="text-center text-4xl mb-8">Add A New Service</h1>
                <Form className="w-80 mx-auto" >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control ref={titleRef} type="text" placeholder="Enter Title" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control ref={cityRef} type="text" placeholder="Enter City" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control ref={priceRef} type="number" placeholder="Enter Price" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control ref={desRef} type="text" placeholder="Enter Description" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control ref={tourRef} type="text" placeholder="Enter Tour Days" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control ref={ratingRef} type="number" placeholder="Enter Rating" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control ref={imgRef} type="text" placeholder="Enter Image" required />
                    </Form.Group>

                    <Button onClick={handleSubmit} className="w-80 mt-4" variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default NewService;