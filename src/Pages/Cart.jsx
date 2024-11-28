import { useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { useNavigate } from "react-router-dom";


const Cart = ({ card, handleDelete}) => {
    const [active, setActive] = useState('cart');
    const [sort, setSort] = useState('asc')

    const handleSort = () => {
        setActive(previousActive => previousActive === 'cart' ? 'wishlist' : 'cart');
        setSort(previousSort => previousSort === 'asc' ? 'desc' : 'asc');
    }

    const sortedCards = [...card].sort((a, b) => {
        if (sort === 'asc') {
            return b.price - a.price;
        }
    })

    const totalPrice = card.reduce((total, item) => total + item.price, 0);

    return (
        <>
            <div className="flex items-center sm:justify-between container mx-auto my-8 sm:pl-0 pl-8">
                <div className="font-bold text-4xl hidden sm:block">Cart </div>

                <div className='flex flex-col lg:flex-row gap-x-4  justify-center '>
                    {/* total price */}
                    <div className="text-center my-4 font-bold text-xl">
                        Total Price: <span className="text-primary">${totalPrice.toFixed(2)}</span>
                    </div>
                    <button
                        onClick={handleSort}
                        className={`btn lg:my-0 my-4 border-primary/50 rounded-full text-primary font-medium px-12 text-xl hover:text-primary ${active === 'cart' ? 'bg-primary text-white' : 'text-primary'}`}>
                        Sort By Price
                    </button>
                    <button
                        onClick={() => setActive('wishlist')}
                        className={`border-primary/50 rounded-full text-primary font-medium px-12 text-xl btn hover:text-primary ${active === 'wishlist' ? 'bg-primary text-white' : 'text-primary'}`}>
                        Purchase
                    </button>
                </div>
            </div>
            <div className="sm:px-0 px-2">
                {sortedCards.map(item => (
                    <div key={item.id} className='container mx-auto border-2 border-base-300 p-4 rounded-xl my-4'>
                        <div className='flex justify-between items-center'>
                            <div className='flex flex-col sm:flex-row gap-4 items-center'>
                                <img className='sm:w-28 w-full rounded-lg' src={item.product_image} alt={item.product_title} />
                                <div>
                                    <h3 className='fontSora font-bold text-2xl'>{item.product_title}</h3>
                                    <p>{item.description}</p>
                                    <p className='font-semibold'>Price: {item.price}</p>
                                </div>
                            </div>
                           <button //----------
                                onClick={() => handleDelete(item.id)}
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

export default Cart;