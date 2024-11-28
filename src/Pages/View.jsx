import { NavLink, useLoaderData } from 'react-router-dom';

const View = () => {
    const data = useLoaderData();

    console.log(data)
    return (
        <>
            <div className='container mx-auto mt-4'>
                <h1 className='text-xl md:text-2xl lg:text-3xl font-bold mb-6 text-center underline'>Products</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 mb-6 sm:px-0 px-1'>
                    {
                        data.map(view => (
                            <div key={view.product_id}>
                                <div className=' border-2 border-base-300 rounded-lg p-2 '>
                                    <div
                                        className='transition hover:scale-105 rounded-xl overflow-hidden'
                                    >
                                        <figure className='w-full   overflow-hidden'>
                                            <img className=' rounded-lg  w-full h-44' src={view.product_image} alt="" />
                                        </figure>
                                        <div className='mt-4'>
                                            {view.id}
                                            <h1 className='text-xl font-medium'> {view.product_title}</h1>
                                            <h3 className='text-xl'>{view.category}</h3>
                                            <p className='font-semibold'>Price: {view.price}</p>
                                            <div className='border-b-2 my-2 border-slate-300'></div>
                                            <p>{view.description}</p>
                                            <div className='flex items-center justify-between px-1 mt-2'>
                                                <p className={`text-sm font-bold ${view.availability ? 'text-green-500': 'text-red-500'}`}>{view.availability? 'Available' : 'Out of Stock'}</p>
                                                <p className='font-semibold'>Ratings: {view.rating}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            <NavLink to="/" className="btn mt-2 border-primary/30  rounded-lg text-primary font-bold bg-[#FFFFFF] mb-6 px-8 hover:bg-primary hover:text-white">Back Home</NavLink >
            </div>
        </>
    );
};

export default View;
