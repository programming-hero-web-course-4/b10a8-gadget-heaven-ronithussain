import React from 'react';
import { Link } from 'react-router-dom';

const Categories = ({ categories}) => {
    return (
        <div className='w-[100%] sm:w-[30%]'>
            <div className='border p-6 border-base-300 rounded-lg'>
                <div className=''>
                    {
                        categories.map(category => (
                            <Link key={category.category}
                                to={`/category/${category.category}`}
                                className=" flex flex-col mb-4 rounded-full px-4 py-2 bg-gray/20 ">
                                <button>{category.category}</button>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Categories;