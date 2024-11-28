import React from 'react';
import { TiDeleteOutline } from "react-icons/ti";

const Wishlist = ({ wishlist, handleWishlistDelete }) => {
    const totalPrice = wishlist.reduce((total, item) => total + item.price, 0);
    return (
        <>
            <div className="flex flex-col  sm:flex-row-reverse items-center sm:justify-between container mx-auto my-8">
                <div className="font-bold text-4xl">Wishlist </div>
                <div className="font-bold text-xl">Total Wishlist Price: <span className='text-primary'>${totalPrice.toFixed(2)}</span> </div>
            </div>
            <div className='sm:px-0 px-2'>
                {wishlist.map(item => (
                    <div key={item.id} className='container mx-auto border-2 border-base-300 p-4 rounded-xl my-4 '>
                        <div className='flex justify-between items-center'>
                            <div className='flex flex-col sm:flex-row gap-4 items-center'>
                                <img className='sm:w-28 w-full rounded-lg' src={item.product_image} alt={item.product_title} />
                                <div>
                                    <h3 className='fontSora font-bold text-2xl'>{item.product_title}</h3>
                                    <p>{item.description}</p>
                                    <p className='font-semibold'>Price: {item.price}</p>
                                </div>
                            </div>
                            <button
                                onClick={() => handleWishlistDelete(item.id)}
                                className='text-red-500 text-3xl'>
                                <TiDeleteOutline />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Wishlist;
