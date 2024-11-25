import React from 'react';
import { NavLink } from 'react-router-dom';

const Categories = ({ categories}) => {
    return (
        <div className='w-[100%] sm:w-[30%] sm:px-0 px-1'>
            <div className='border p-6 border-base-300 rounded-lg '>
            {
                        categories.map(category => (
                            <NavLink 
                            key={category.category}
                                to={`/category/${category.category}`}
                                className={({ isActive }) =>
                                    `flex flex-col mb-4 rounded-full px-4 py-2 ${
                                        isActive ? 'bg-primary text-white' : 'bg-gray-200 text-black'
                                    }`
                                }
                            >
                                <button>{category.category}</button>
                            </NavLink>
                            
                        ))
                    }
            </div>
        </div>
    );
};

export default Categories;

{/* <NavLink
                            key={category.category}
                            to={`/category/${category.category}`}
                            className={({ isActive }) =>
                                `flex flex-col mb-4 rounded-full px-4 py-2 ${
                                    isActive ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'
                                }`
                            }
                        >
                            <button>{category.category}</button>
                        </NavLink> */}