import React, { useEffect, useState } from 'react';
import Heading from '../Components/Heading';
import { getAllCard, removeFavorite } from '../Utilities';
import { TiDeleteOutline } from "react-icons/ti";
import { getAllWishlist } from '../Utilities/wishlist';

const Dashboard = () => {
    const [card, setCard] = useState([]);
    const [wishlist, setWishlist] = useState([])
    
    const [active, setActive] = useState('cart')
    useEffect(() => {
        const favorite = getAllCard()
        setCard(favorite)
        
        const wishlists= getAllWishlist();
        setWishlist(wishlists)
        
    }, []);
    console.log(wishlist)

    // useEffect(()=>{
    //     const wishlist = getAllWishlist();
    //     setWishlist(wishlist)
    // } ,[])


    const handleDelete = (id) => {
        removeFavorite(id)
        const favorite = getAllCard()
        setCard(favorite)
    }

    return (
        <>
            <div className=' bg-primary w-full  h-[500px] pt-1 text-white/80'>
                <Heading
                    title='Dashboard'
                    subTitle='Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'
                ></Heading>

                <div
                    onClick={() => setActive('cart')}
                    className='flex gap-x-4 justify-center'>
                    <button className='btn border-primary/50 rounded-full text-primary font-medium px-12 text-xl'>Cart</button>

                    <button
                        onClick={() => setActive('wishlist')}
                        className='btn border-primary/50 rounded-full text-primary font-medium px-12 text-xl'>Wishlist</button>
                </div>
            </div>

            <div>
                {active === 'cart' && (
                    <>
                        <h2 className='text-center text-2xl font-bold mt-6'>Your Cart Items {card.length}</h2>
                        {card.length > 0 ? (
                            card.map((item, idx) => (
                                <div key={idx} className='container mx-auto border-2 border-base-300 p-4 rounded-xl my-4'>
                                    <div className='flex justify-between items-center'>
                                        <div className='flex gap-4 items-center'>
                                            <img className='w-28 rounded-lg' src={item.product_image} alt={item.product_title} />
                                            <div>
                                                <h3 className='font-bold text-2xl'>{item.product_title}</h3>
                                                <p>{item.description}</p>
                                                <p className='font-semibold'>Price: {item.price}</p>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => handleDelete(item.id)}
                                            className='btn text-3xl text-red-500'>
                                            <TiDeleteOutline />
                                        </button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className='text-center text-gray-500'>No items in your cart.</p>
                        )}
                    </>
                )}
            {/* -------------wishlist card----------------- */}

            </div>
        </>
    );
};

export default Dashboard;











// {
//     card.map((card,idx) => (
//         <div key={idx} className='container mx-auto border-2 border-base-300 p-4 rounded-xl my-4'>
//             <div className='flex justify-between items-center'>
//                 <div className='flex gap-4 items-center'>
//                 <img className='w-28 rounded-lg' src={card.product_image} alt="" />
//                 <div>
//                     <h3 className='fontSora font-bold text-2xl'>{card.product_title}</h3>
//                     <p>{card.description}</p>
//                     <p className='font-semibold'>Price: {card.price}</p>
//                 </div>
//                 </div>
//                 <button
//                 onClick={()=> handleDelete(card.id)}
//                 className='btn text-3xl text-red-500 '><TiDeleteOutline></TiDeleteOutline></button>

//             </div>
//         </div>
//     ))
// } 