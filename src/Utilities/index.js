import toast from "react-hot-toast";

// get all card from local storage
const getAllCard = () => {
    const all = localStorage.getItem('favorite');
    if (all) {
        const favorite = JSON.parse(all)
        return favorite;
    } else {
        return [];
    }

}
//  add a card to local storage
const addToCard = (card) => {
    // get all previously saved card data
    const favorite = getAllCard()
    const isExist = favorite.find(item => item.id == card.id)

    if (isExist) return toast.error('Card is Already Exist');

    favorite.push(card)
    localStorage.setItem('favorite', JSON.stringify(favorite));
    toast.success('Card is Successfully Added')
}
// remove a card from local storage
const removeFavorite = (id) => {
    const favorite = getAllCard();
    const remaining = favorite.filter(card => card.id != id);
    localStorage.setItem('favorite', JSON.stringify(remaining));
    toast.success('Card is Successfully removed')
}

// Get all wishlist items from local storage

// Add a card to wishlist

// Remove an item from wishlist

export { addToCard, getAllCard, removeFavorite };

// import toast from "react-hot-toast";

// //get all product from local storage
// const getAllFavorites = ()=> {
//     const all = localStorage.getItem('favorites')
//     if(all){
//         const favorites =JSON.parse(all)
//         return favorites
//     }
//     else{
//         return []
//     }
// }



// // add a product to local storage
// const addFavorite = product => {
//     const favorites = getAllFavorites()
//     const isExist = favorites.find(item => item.product_id === product.product_id)
//     if(isExist) return toast.error('Product already Exist!');
//     favorites.push(product)
//     localStorage.setItem('favorites', JSON.stringify(favorites))
//     toast.success('Successfully added!');
// }


// const removeFavorite = id => {
//     const favorites = getAllFavorites()
//     const remaining = favorites.filter(coffee => coffee.id !== id)
//     localStorage.setItem('favorites', JSON.stringify(remaining))
//     toast.success('Successfully removed!');
// }


// //remove a product from local storage

// export {addFavorite, getAllFavorites, removeFavorite}



