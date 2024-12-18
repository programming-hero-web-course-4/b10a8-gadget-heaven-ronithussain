import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet, useNavigation } from 'react-router-dom'; 
import toast, { Toaster } from 'react-hot-toast';
import { getAllCard } from '../Utilities';

const HeadLayout = () => {
    const navigation = useNavigation();

    const [cartCount, setCartCount] = useState(0);               
    useEffect(()=> {
        const initialCount = getAllCard().length;
        setCartCount(initialCount);
    },[])
    return (
        <div>
               <Toaster />
            {/* Navbar */}
            <Navbar cartCount={cartCount}></Navbar>
            {/* Dynamic section */}
            <div className='min-h-[calc(100vh-610px)]'>
                {
                    navigation.state === "loading" ?
                    <p>Loading...</p>:
                    <Outlet context={[cartCount, setCartCount]}></Outlet>
                }
            </div>
            {/* Footer */}
            <Footer> </Footer>
        </div>
    );
};

export default HeadLayout;