import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Card = ({cards}) => {

    const {product_title,product_image,price,id}= cards || {};

    return (
        <div className=' border-2 border-base-300 rounded-lg p-2 '>
           <div 
           className='transition hover:scale-105 rounded-xl overflow-hidden'
           >
            <figure className='w-full   overflow-hidden'>
                <img className='rounded-lg  w-full h-36' src={product_image} alt="" />
            </figure>
            <div className='mt-4'>
                {id}
                <h1 className='text-xl'> {product_title}</h1>
                <p>Price: {price}</p>

                <Link to={`/products/${id}`} className="btn mt-2 border-primary/30  rounded-full text-primary font-bold bg-[#FFFFFF]">View Details</Link >
            </div>
           </div>
        </div>
    );
};

export default Card;