import React from 'react';
import './tourQuality.css'

const TourQuality = () => {
    return (
        <div className="backgroundImg mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center container">
                <div>
                    <h3 className="font-bold text-color">WHY US?</h3>
                    <p className="mb-8 text-white font-semibold">We make all the process easy</p>
                    <div className="flex gap-4 p-4 rounded shadow-md bg-white">
                        <i className="text-5xl text-color fas fa-globe-europe"></i>
                        <span>
                            <h3 className="text-color">All Around the World Tours</h3>
                            <p className="text-gray-500 font-semibold">Dummy text ever since the 1500s, when an unknown printer took. A galley of type and scrambled it to make a type</p>
                        </span>
                    </div>
                    <div className="flex my-8 gap-4 p-4 rounded shadow-md bg-white">
                        <i className="text-5xl text-color fas fa-hiking"></i>
                        <span>
                            <h3 className="text-color">Private & Customized Tours</h3>
                            <p className="text-gray-500 font-semibold">Dummy text ever since the 1500s, when an unknown printer took. A galley of type and scrambled it to make a type</p>
                        </span>
                    </div>
                    <div className="flex gap-4 p-4 rounded shadow-md bg-white">
                        <i className="text-5xl text-color fas fa-atlas"></i>
                        <span>
                            <h3 className="text-color">Immigration & Passport Help</h3>
                            <p className="text-gray-500 font-semibold">Dummy text ever since the 1500s, when an unknown printer took. A galley of type and scrambled it to make a type</p>
                        </span>

                    </div>
                </div>
                <div>
                    <img src="https://dtora.wpengine.com/wp-content/uploads/2019/04/why-us-img-new.png" alt="" />
                </div>
            </div>
        </div>

    );
};

export default TourQuality;