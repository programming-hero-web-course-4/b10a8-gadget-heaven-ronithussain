import React from 'react';

const Footer = () => {
    return (
        <div className='
        bg-base-200 px-10 py-4 mt-auto'>
            <footer className="container mx-auto">
                <div className='flex flex-col justify-center items-center font-sora'>
                    <h1 className='sm:text-3xl text-2xl font-bold text-color mb-2'>Gadget Heaven</h1>
                    <p className='text-gray font-medium font-sora text-center'>Leading the way in cutting-edge technology and innovation.</p>
                </div>
            </footer>
                <div className='border-t border-base-300 mt-4 '></div>
            <footer className="container mx-auto flex flex-col sm:flex-row sm:justify-around  footer sm:p-10 pt-6 ">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Product Support</a>
                    <a className="link link-hover">Order Tracking</a>
                    <a className="link link-hover">Shipping & Delivery</a>
                    <a className="link link-hover">Returns</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Careers</a>
                    <a className="link link-hover">Contact</a>     
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of Service</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;