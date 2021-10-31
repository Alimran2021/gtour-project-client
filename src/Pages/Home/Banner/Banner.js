import React from 'react';
import './banner.css'


const Banner = () => {
    return (
        <div className="banner ">
            <div className="bg-gradient-to-r from-gray-800 h-full">
                <div className="grid grid-cols-2 justify-center items-center h-full container text-white">
                    <div className="leading-8">
                        <h1 className="fw-bold mb-4 text-5xl">Find The Latest Package On The Tour GTOUR.</h1>
                        <p className="mb-14">Tour's are common and important in the life of every human being in the world.
                            Book now to go on tour in different countries on GTour.</p>
                        <button className="bg-red-600 text-white py-2 px-4 rounded tex-semibold">Booking Now</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;
