import React from 'react';
import { Link } from 'react-router-dom';

const FooterBottom = () => {
    return (
        <div className="bg-gray-900">
            <div className="container justify-between items-center grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <p className="text-white pb-0 py-8">&copy;copyright Grand Tour Design By Al Imran.</p>
                </div>
                <div>
                    <div className="flex justify-end">
                        <ul className="flex mx-start gap-4 text-gray-300 mb-0">
                            <li>
                                <Link className="text-gray-300 no-underline" to="/home">Home</Link>
                            </li>
                            <li>
                                <Link className="text-gray-300 no-underline" to="/booking">Booking</Link>
                            </li>
                            <li>
                                <Link className="text-gray-300 no-underline" to="tours">Tours</Link>
                            </li>
                            <li>
                                <Link className="text-gray-300 no-underline" to="/contact">Contact</Link>
                            </li>
                            <li>
                                <Link className="text-gray-300 no-underline" to="/about">About</Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default FooterBottom;