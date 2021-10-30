import React from 'react';
import './banner.css'
import { Button } from "react-bootstrap"

const Banner = () => {
    return (
        <div className="banner ">
            <div className="bg-gradient-to-r from-gray-800 h-full">
                <div className="grid grid-cols-2 justify-center items-center h-full container text-white">
                    <div className="leading-8">
                        <h1 className="fw-bold mb-4 text-5xl">Find The Latest Tour GTOUR.</h1>
                        <p className="mb-14">Text Some</p>
                        <Button className="focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500">
                            Book Now
                        </Button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;
