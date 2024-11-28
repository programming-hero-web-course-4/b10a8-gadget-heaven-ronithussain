import React, { useEffect, useState } from 'react';
import Heading from '../Components/Heading';
import { getAllCard, removeFavorite } from '../Utilities';
import { getAllWishlist, removeFromWishlist } from '../Utilities/wishlist';
import Cart from './Cart';
import Wishlist from './Wishlist';

const Dashboard = () => {
    const [card, setCard] = useState([]);
    const [wishlist, setWishlist] = useState([])
    const [active, setActive] = useState('cart');

    useEffect(() => {
        const favorite = getAllCard()
        setCard(favorite)

        const wishlists = getAllWishlist();
        setWishlist(wishlists)

    }, []);


    const handleDelete = (id) => {
        removeFavorite(id)
        const favorite = getAllCard()
        setCard(favorite)
    }

    const handleWishlistDelete = (id) => {
        removeFromWishlist(id)
        const wishlist = getAllWishlist()
        setWishlist(wishlist);
    };

    return (
        <>
            <div className='mb-44'>
                <div className=' bg-primary w-full  h-[500px] pt-1 text-white/80'>
                    <Heading
                        title='Dashboard'
                        subTitle='Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'
                    ></Heading>

                    <div className='flex flex-col sm:flex-row gap-x-4 justify-center px-4 sm:px-0'>
                        <button
                            onClick={() => setActive('cart')}
                            className={`btn sm:my-0 my-3 border-primary/50 rounded-full text-primary font-medium px-12 text-xl ${active === 'cart' ? 'bg-yellow-400 text-primary' : 'text-secondary'}`}>Cart</button>

                        <button
                            onClick={() => setActive('wishlist')}
                            className={`border-primary/50 rounded-full text-primary font-medium px-12 text-xl btn ${active === 'wishlist' ? 'bg-yellow-400 text-primary' : 'text-secondary'}`}>Wishlist</button>
                    </div>
                </div>

                <div>
                    {active === 'cart' && (
                        <Cart card={card} handleDelete={handleDelete} />
                    )}
                    {active === 'wishlist' && (
                        <Wishlist wishlist={wishlist} handleWishlistDelete={handleWishlistDelete} />
                    )}
                </div>
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