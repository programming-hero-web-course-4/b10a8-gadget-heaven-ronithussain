import React, { useEffect, useState } from 'react';
import Heading from '../Components/Heading';
import { getAllCard } from '../Utilities';
import { TiDeleteOutline } from "react-icons/ti";

const Dashboard = () => {
    const [card, setCard] = useState([]);
    useEffect(()=>{
        const favorite = getAllCard()
        setCard(favorite)
    } ,[])
    return (
        <>
         <div className=' bg-primary w-full  h-[500px] pt-1 text-white/80'>
            <Heading 
            title='Dashboard'
            subTitle='Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'
            ></Heading>
         </div>

         <div>
           
           {
            card.map((card) => (
                <div className='container mx-auto border-2 border-base-300 p-4 rounded-xl my-4'>
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-4 items-center'>
                        <img className='w-28 rounded-lg' src={card.product_image} alt="" />
                        <div>
                            <h3 className='fontSora font-bold text-2xl'>{card.product_title}</h3>
                            <p>{card.description}</p>
                            <p className='font-semibold'>Price: {card.price}</p>
                        </div>
                        </div>
                        <button className='btn text-3xl text-red-500 '><TiDeleteOutline></TiDeleteOutline></button>

                    </div>
                </div>
            ))
        } 
        </div>
        </>
    );
};

export default Dashboard;