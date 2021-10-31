import React from 'react';
// adventure start here
const AdvenTure = () => {
    return (
        <div>
            <h2 className="text-center text-color font-bold text-4xl">FOLLOW AN ADVENTURE</h2>
            <p className="text-center">Anything you Like</p>
            <div className="grid grid-cols-1 md:grid-cols-3 container my-20 gap-4">
                <div className="flex gap-4 items-center p-4 rounded shadow-md">
                    <i className="text-3xl fas fa-utensils"></i>
                    <span>
                        <h3 className="text-color text-2xl font-bold">FINE DINING</h3>
                        <p className="text-gray-500 font-semibold">Exoitic Dining Menu</p>
                    </span>
                </div>
                <div className="flex gap-4 items-center p-4 rounded shadow-md">
                    <i className="text-3xl fas fa-dolly"></i>
                    <span>
                        <h3 className="text-color text-2xl font-bold">PRIVATE HOTELS</h3>
                        <p className="text-gray-500 font-semibold">With Extra Pools</p>
                    </span>
                </div>

                <div className="flex gap-4 items-center p-4 rounded shadow-md">
                    <i className="text-3xl fas fa-ship"></i>
                    <span>
                        <h3 className="text-color text-2xl font-bold">WATER SPORTS</h3>
                        <p className="text-gray-500 font-semibold text-1xl">For Premium Packages</p>
                    </span>
                </div>

                <div className="flex gap-4 items-center p-4 rounded shadow-md">
                    <i className=" text-3xl fas fa-umbrella-beach"></i>
                    <span>
                        <h3 className="text-color text-2xl font-bold">BEACH ACTIVITY</h3>
                        <p className="text-gray-500 font-semibold">Day & Night Activities</p>
                    </span>
                </div>

                <div className="flex gap-4 items-center p-4 rounded shadow-md">
                    <i className="text-3xl fas fa-grin-hearts"></i>
                    <span>
                        <h3 className="text-color text-2xl font-bold">HONEYMOON PACKS</h3>
                        <p className="text-gray-500 font-semibold">Love after Marriage</p>
                    </span>
                </div>

                <div className="flex gap-4  items-center p-4 rounded shadow-md">
                    <i className="text-3xl fas fa-key"></i>
                    <span>
                        <h3 className="text-color text-2xl font-bold">Private & Customized Tours</h3>
                        <p className="text-gray-500 font-semibold">Enjoy everything</p>
                    </span>
                </div>

            </div>

        </div>
    );
};

export default AdvenTure;