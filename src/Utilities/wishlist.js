import toast from "react-hot-toast";


// Get all wishlist items from local storage
const getAllWishlist = () => {
    const all = localStorage.getItem('wishlist');
    if (all) {
        const wishlist = JSON.parse(all);
        console.log(wishlist)
        return wishlist;
    } else {
        console.log([])
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




















// // for wishlist====================
// //get all product from local storage
// const getAllWishlist = ()=> {
//     const all = localStorage.getItem('whishList')
//     if(all){
//         const favorites =JSON.parse(all)
//         return favorites
//     }
//     else{
//         return []
//     }
// }



// // add a product to local storage
// const addWishlist = product => {
//     const favorites = getAllWishlist()
//     const isExist = favorites.find(item => item.product_id === product.product_id)
//     if(isExist) return toast.error('Product already Exist!');
//     favorites.push(product)
//     localStorage.setItem('whishList', JSON.stringify(favorites))
//     toast.success('Successfully added!');
// }


// //remove a product from local storage
// const removeWishlist = id => {
//     const wishlistRemove = getAllFavorites()
//     const remaining = wishlistRemove.filter(item => item.id !== id)
//     localStorage.setItem('whishList', JSON.stringify(remaining))
//     toast.success('Successfully removed!');
// }

// export {getAllWishlist, addWishlist, removeWishlist}