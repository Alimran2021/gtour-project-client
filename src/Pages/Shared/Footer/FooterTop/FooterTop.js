import React from 'react';
import { Form } from 'react-bootstrap';
import './footerTop.css'

const FooterTop = () => {
    return (
        <div className="bg-dark">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-20 text-white container">
                <div>
                    <img src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandtour/demo2/wp-content/themes/grandtour/images/logo@2x_white.png" alt="" />
                    <p className="mt-4 leading-7">
                        London is a megalopolis of people, ideas and frenetic energy.
                        The capital and largest city of the United Kingdom
                    </p>
                    <div className="flex gap-2">
                        <p><a className="no-underline" href="/"><i className="w-10 h-10 rounded-full flex justify-center items-center bg-red-500 text-white  fab fa-facebook"></i></a></p>
                        <p><a className="no-underline" href="/"><i className="w-10 h-10 rounded-full flex justify-center items-center bg-red-500 text-white  fab fa-twitter"></i></a></p>
                        <p><a className="no-underline" href="/"><i className="w-10 h-10 rounded-full flex justify-center items-center bg-red-500 text-white  fab fa-instagram"></i></a></p>
                        <p><a className="no-underline" href="/"><i className="w-10 h-10 rounded-full flex justify-center items-center bg-red-500 text-white  fab fa-linkedin-in"></i></a></p>
                        <p><a className="no-underline" href="/"><i className="w-10 h-10 rounded-full flex justify-center items-center bg-red-500 text-white  fab fa-yelp"></i></a></p>
                    </div>
                </div>
                <div>
                    <h3>Contact Info</h3>
                    <p className="mt-4">1-567-124-44227</p>
                    <p>184 Main Street East Perl Habour 8007</p>
                    <p>Mon – Sat 8.00 – 18.00 Sunday CLOSED</p>
                </div>
                <div>
                    <h3 className="mb-4">Newsletter</h3>
                    <Form.Control type="email" placeholder="Enter Email Address" />
                    <button className="btn btn-primary mt-3">Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default FooterTop;