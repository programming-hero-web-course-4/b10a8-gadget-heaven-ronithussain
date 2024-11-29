// import React, { useEffect, useState } from 'react';
import Heading from '../Components/Heading';

import React, { useEffect, useState } from "react";
import { Helmet } from 'react-helmet';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const Statistic = () => {
    const [chart, setChart] = useState([])
    useEffect(() => {
        fetch('/rechart.json')
            .then(res => res.json())
            .then(data => setChart(data))
    }, [])
    return (
        <>
           
            <div className=' bg-primary w-full  h-[400px] pt-1 text-white/80'>
            <Helmet>
                <title> StatisticPage</title>
            </Helmet>
                <Heading
                    title='Statistics'
                    subTitle='Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'
                ></Heading>
            </div>
            <div className='container mx-auto border my-14 bg-white/90 rounded-lg border-primary/30 shadow-md'>
                <div className="flex flex-col items-center">
                    <h1 className="text-2xl font-bold my-4">Product Bar Chart</h1>
                    <BarChart
                        width={1200}
                        height={550}
                        data={chart}
                        margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="price" fill="#9538E8" />
                        <Bar dataKey="total" fill="#9522E9" />
                        <Bar dataKey="rating" fill="#9538E2" />
                    </BarChart>
                </div>
            </div>
        </>
    );
};
export default Statistic;