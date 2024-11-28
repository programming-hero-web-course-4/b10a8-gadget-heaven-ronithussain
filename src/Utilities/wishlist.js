import toast from "react-hot-toast";


// Get all wishlist items from local storage
const getAllWishlist = () => {
    const all = localStorage.getItem('wishlist');
    if (all) {
        const wishlist = JSON.parse(all);
        return wishlist;
    } else {
        
        return [];
    }
};

// Add a card to wishlist
const addToWishlist = (card) => {
    const wishlist = getAllWishlist();
    const isExist = wishlist.find(item => item.id === card.id);

    if (isExist) return toast.error('Item is already in the wishlist');

    wishlist.push(card);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    toast.success('Item added to wishlist');
};

// Remove an item from wishlist
const removeFromWishlist = (id) => {
    const wishlist = getAllWishlist();
    const updatedWishlist = wishlist.filter(item => item.id !== id);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    toast.success('Item removed from wishlist');
};

export { getAllWishlist, addToWishlist, removeFromWishlist };
