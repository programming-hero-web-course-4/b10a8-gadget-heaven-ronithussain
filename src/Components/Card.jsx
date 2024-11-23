import React from 'react';

const Card = ({cards}) => {
    const {product_title,product_image,price}= cards || {};

    return (
        <div className=' border-2 border-base-300 rounded-lg p-2 '>
           <div 
           className='transition hover:scale-105 rounded-xl overflow-hidden'
           >
            <figure className='w-full   overflow-hidden'>
                <img className='rounded-lg  w-full h-36' src={product_image} alt="" />
            </figure>
            <div className='mt-4'>
                <h1 className='text-xl'>Name: {product_title}</h1>
                <p>Price: {price}</p>
            </div>
           </div>
        </div>
    );
};

export default Card;