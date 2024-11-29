import React from 'react';
import Banner from '../Components/Banner';
import Categories from '../Components/Categories';
import { Outlet, useLoaderData } from 'react-router-dom';
import Heading from '../Components/Heading';
import { Helmet } from 'react-helmet';

const Home = () => {
    const categories = useLoaderData();
    return (
        <div className='mt-8'>
            <Helmet>
                <title> HomePage</title>
            </Helmet>
            {/* Banner */}
            <Banner></Banner>

            {/* Heading */}
            <Heading title={'Explore Cutting-Edge Gadgets'}></Heading>

            {/* Category Tab Section */}
            <div className='flex flex-col md:flex-row gap-x-4 container mx-auto'>
                <Categories categories={categories}></Categories>
                <Outlet></Outlet>
                {/* <CategoriesCards></CategoriesCards> */}
            </div>
            {/* Dynamic Nested Components  */}

        </div>
    );
};

export default Home;