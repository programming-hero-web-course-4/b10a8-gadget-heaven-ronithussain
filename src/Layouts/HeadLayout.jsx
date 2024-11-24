import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const HeadLayout = () => {
    return (
        <div>
               <Toaster />
            {/* Navbar */}
            <Navbar></Navbar>
            {/* Dynamic section */}
            <div className='min-h-[calc(100vh-610px)]'>
                <Outlet></Outlet>
            </div>
            {/* Footer */}
            <Footer> </Footer>
        </div>
    );
};

export default HeadLayout;