import toast from "react-hot-toast";

// get all card from local storage
const getAllCard = () => {
    const all = localStorage.getItem('favorite');
    if(all){
        const favorite = JSON.parse(all)
        console.log(favorite)  
        return favorite;
    }else{
        console.log([])
        return [];
    }
     
}
//  add a card to local storage
const addToCard = (card) => {
    // get all previously saved card data
    const favorite = getAllCard()
    const isExist = favorite.find(item => item.id == card.id)

    if(isExist) return toast.error('Card is Already Exist');

    favorite.push(card)
    localStorage.setItem('favorite', JSON.stringify(favorite));
    toast.success('Card is Successfully Added')
}
// remove a card from local storage

export {addToCard , getAllCard};