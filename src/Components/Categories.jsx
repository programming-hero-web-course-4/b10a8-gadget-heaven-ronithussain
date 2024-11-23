import React from 'react';
import { Link } from 'react-router-dom';

const Categories = ({categories=[]}) => {
    return (
        <div className='w-[20%]'>
            <div className='border-2 border-base-300 p-8 rounded-lg'>
                {
                    categories.map(category => (
                        <Link key={category.category}
                        to="/cards"
                        className="btn btn-xs px-8">
                         {category.category}   
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default Categories;