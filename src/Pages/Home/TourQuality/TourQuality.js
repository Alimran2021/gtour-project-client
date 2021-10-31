import React from 'react';
import './tourQuality.css'

// tour quality
const TourQuality = () => {
    return (
        <div className="backgroundImg mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center container">
                <div>
                    <h3 className="font-bold text-color text-3xl">WHY US?</h3>
                    <p className="mb-8 text-white font-semibold">We make all the process easy</p>
                    <div className="flex gap-4 p-4 rounded shadow-md bg-white">
                        <i className="text-5xl text-color fas fa-globe-europe"></i>
                        <span>
                            <h3 className="text-color text-2xl font-bold">All Around the World Tours</h3>
                            <p className="text-gray-500 font-semibold">Round the World Packages Itʼs the ultimate trip: circumnavigating the planet, and stopping off wherever takes your fancy.</p>
                        </span>
                    </div>
                    <div className="flex my-8 gap-4 p-4 rounded shadow-md bg-white">
                        <i className="text-5xl text-color fas fa-hiking"></i>
                        <span>
                            <h3 className="text-color text-2xl font-bold">Private & Customized Tours</h3>
                            <p className="text-gray-500 font-semibold">Enjoy everything you get on all of our tours (staff-vetted hotels, guided sightseeing, authentic meals), plus some pretty amazing extras.</p>
                        </span>
                    </div>
                    <div className="flex gap-4 p-4 rounded shadow-md bg-white">
                        <i className="text-5xl text-color fas fa-atlas"></i>
                        <span>
                            <h3 className="text-color text-2xl font-bold">Immigration & Passport Help</h3>
                            <p className="text-gray-500 font-semibold">Have an urgent visa application that carries a tight deadline?  VisaCentral can help you to save valuable time and avoid expensive delays.</p>
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