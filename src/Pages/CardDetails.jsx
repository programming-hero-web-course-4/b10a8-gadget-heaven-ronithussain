import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Heading from '../Components/Heading';
import { TiShoppingCart } from "react-icons/ti";
import { FcLike } from "react-icons/fc";

const CardDetails = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const [card, setCard] = useState({})

    useEffect(() => {
        const singleData = data.find(card => card.id === parseInt(id))
        setCard(singleData)
    }, [card, id])

    const { product_title, product_image, price, description, specifications, rating } = card;
    return (
        <>
            <div className='flex flex-col min-h-screen'>
                <div className='relative bg-primary w-full  h-[500px] pt-1 text-white/80'>
                    <Heading title={'Product Details'} subTitle={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}></Heading>
                </div>

                <div className='absolute top-[40%] left-[20%] z-10'>
                    <div className='container mx-auto '>
                        <div className=" px-8 rounded-lg flex justify-center bg-white">
                            <div className="flex flex-col sm:flex-row lg:py-12 sm:gap-x-6">
                                <div className='flex  lg:gap-x-4 rounded-lg bg-base-300 lg:py-28 md:p-6 lg:px-12'>
                                    <img
                                        src={product_image}
                                        className=" md:w-[400px] lg:w-[500px] rounded-lg shadow-2xl " />
                                </div>
                                <div>
                                    <h1 className="text-2xl sm:text-4xl font-bold">{product_title}</h1>
                                    <p className='font-bold mt-2 lg:text-2xl md:text-xl'>Price: {price}</p>
                                    <p className="py-4 font-thin text-xl lg:text-2xl ">
                                        {description}
                                        {/* specifications */}
                                        <div className='flex-col justify-center gap-6'>
                                            <h1 className='text-2xl font-semibold my-2'>Specifications:</h1>
                                            <ul className='text-xl mb-4 ml-8'>
                                                {specifications &&
                                                    specifications.map(i => (
                                                        <li className='list-decimal my-2' key={i}>{i}</li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </p>
                                    <div>
                                        <h3 className='font-semibold text-xl sm:text-2xl mb-1'>Ratings:</h3>
                                        <div className='flex items-center gap-x-6'>
                                            <p><div className="rating sm:rating-md rating-xs">
                                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                                <input
                                                    type="radio"
                                                    name="rating-5"
                                                    className="mask mask-star-2 bg-orange-400"
                                                    defaultChecked />
                                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                            </div></p>
                                            <p className='font-bold sm:text-2xl text-xl'>{rating}</p>
                                        </div>
                                    </div>


                                    {/* add to card or wishlist button */}
                                    <div className='flex gap-x-1 sm:gap-x-4 mt-6'>
                            <button className="btn btn-accent btn-outline bg-primary rounded-full">Add To Card <small className='text-2xl'><TiShoppingCart></TiShoppingCart></small></button>

                            <button className="btn   btn-accent btn-outline bg-primary rounded-full text-2xl"><FcLike></FcLike></button>
                            </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardDetails;