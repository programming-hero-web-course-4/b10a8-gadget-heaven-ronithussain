import React from 'react';
import Banner from '../Components/Banner';
import Categories from '../Components/Categories';
import CategoriesCards from '../Components/CategoriesCards';

const Home = () => {
    return (
        <div>
            Home
            {/* Banner */}
            <Banner></Banner>
            {/* Heading */}
            {/* Category Tab Section */}
            <div className='flex gap-x-4 container mx-auto'>
            <Categories></Categories>
            <CategoriesCards></CategoriesCards>
            </div>
            {/* Dynamic Nested Components  */}
        </div>
    );
};

export default Home;