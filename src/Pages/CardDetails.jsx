import React, { useEffect, useState } from 'react';
import { useLoaderData, useOutletContext, useParams } from 'react-router-dom';
import Heading from '../Components/Heading';
import { TiShoppingCart } from "react-icons/ti";
import { FcLike } from "react-icons/fc";
import { addToCard, getAllCard } from '../Utilities';
import { addToWishlist, getAllWishlist } from '../Utilities/wishlist';
import toast from 'react-hot-toast';

const CardDetails = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const [card, setCard] = useState({})

    const [isFavorite, setIsFavorite] = useState(false)
    const [isWishlist, setIsWishlist] = useState(false);

    const [cartCount, setCartCount]= useOutletContext()

    useEffect(() => {
        const singleData = data.find(card => card.id === parseInt(id))
        setCard(singleData)

        // Check if the item is in the favorite list
        const favorite = getAllCard();
        const isExist = favorite.find(item => item.id == singleData.id)
        if (isExist) {
            setIsFavorite(true)
        }
        //  Check if the item is in the wishlist
        const wishlist = getAllWishlist();
        const isInWishlist = wishlist.find(item => item.id === singleData.id);
        if (isInWishlist) {
            setIsWishlist(true);
        }
    }, [card, id])

    const { product_title, product_image, price, description, specifications, rating, availability } = card;

    const handleAddToCard = (card) => {
        if (isWishlist) {
            toast.error('This item is already in the Wishlist!')
            return;
        }
        addToCard(card)
        setIsFavorite(true)

        const updateCount = addToCard(card);
        setCartCount(updateCount);

        const updateCart = getAllCard();
        setCartLength(updateCart.length)
    }
    const handleAddToWishlist = (card) => {
        if (isFavorite) {
            toast.error('This item is already in the Cart!')
            return;
        }
        addToWishlist(card);
        setIsWishlist(true);
    };

    return (
        <>
            <div className='flex sm:flex-col sm:min-h-screen'>
                <div className='relative bg-primary w-full  h-[500px] pt-1 text-white/80'>
                    <Heading title={'Product Details'} subTitle={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}></Heading>
                </div>

                <div className='absolute lg:top-[40%] md:top-[100%] lg:left-[25%] md:left-[10%] top-[45%] z-10'>
                    <div className='container mx-auto sm:px-0 px-5'>
                        <div className=" rounded-lg flex justify-center bg-white">
                            <div className="flex flex-col sm:flex-row p-4 sm:gap-x-6 border-2 border-base-200 rounded-xl">
                                <div className='flex  lg:gap-x-4 rounded-lg bg-base-300 lg:py-28 md:p-4 lg:px-12'>
                                    <img
                                        src={product_image}
                                        className=" md:w-[600px] md:h-44 lg:h-full lg:w-[500px] rounded-lg shadow-2xl " />
                                </div>
                                <div>
                                    <h1 className="text-2xl sm:text-3xl font-bold">{product_title}</h1>
                                    <p className='font-bold mt-2 lg:text-2xl '>Price: {price}</p>

                                    <p className={` text-sm font-bold mt-2 ${availability ? 'text-green-500' : 'text-red-500'}`}>{availability ? 'Available' : 'Out of Stock'}</p>
                                    
                                    <div className="py-4 font-thin ">
                                        {description}
                                        {/* specifications */}
                                        <div className='flex-col justify-center gap-4'>
                                            <h1 className='text-2xl font-semibold my-1'>Specifications:</h1>
                                            <ul className='text-xl mb-4 ml-8'>
                                                {specifications &&
                                                    specifications.map(i => (
                                                        <li className='list-decimal my-2' key={i}>{i}</li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className='font-semibold text-xl sm:text-2xl mb-1'>Ratings:</h3>
                                        <div className='flex items-center gap-x-6'>
                                            <div><div className="rating sm:rating-md rating-xs">
                                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                                <input
                                                    type="radio"
                                                    name="rating-5"
                                                    className="mask mask-star-2 bg-orange-400"
                                                    defaultChecked />
                                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                            </div></div>
                                            <p className='font-bold sm:text-2xl text-xl'>{rating}</p>
                                        </div>
                                    </div>


                                    {/* add to card or wishlist button */}
                                    <div className='flex gap-x-1 sm:gap-x-2 mt-6'>

                                        <button
                                            disabled={isFavorite}
                                            onClick={() => handleAddToCard(card)}
                                            className="btn btn-sm btn-accent btn-outline bg-primary rounded-full">
                                            Add To Card
                                            <small className='text-2xl'><TiShoppingCart></TiShoppingCart>
                                            </small>
                                        </button>

                                        <button
                                            disabled={isWishlist}
                                            onClick={() => handleAddToWishlist(card)}
                                            className=" btn-sm px-3  btn-accent btn-outline bg-primary rounded-full text-2xl">
                                            <FcLike></FcLike>
                                        </button>
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