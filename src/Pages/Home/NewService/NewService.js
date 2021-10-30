import React, { useRef } from 'react';
import { Form, Button } from "react-bootstrap"
const NewService = () => {
    const titleRef = useRef('')
    const cityRef = useRef('')
    const priceRef = useRef('')
    const desRef = useRef('')
    const ratingRef = useRef('')
    const imgRef = useRef('')
    const tourRef = useRef('')
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
        <div className="grid grid-cols-1  my-20">
            <div>
                <Form >
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
                        <Form.Control ref={priceRef} type="text" placeholder="Enter Description" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control ref={priceRef} type="text" placeholder="Enter Ragtin" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control ref={priceRef} type="number" placeholder="Enter Price" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control ref={priceRef} type="text" placeholder="Enter Img" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control ref={priceRef} type="text" placeholder="Enter Tour" required />
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