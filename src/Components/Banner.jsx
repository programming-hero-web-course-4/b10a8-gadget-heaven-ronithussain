import { useNavigate } from "react-router-dom";

const Banner = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className='sm:px-8 px-3 m'>
                <div className="hero bg-primary  min-h-[900px] rounded-lg ">
                    <div className="text-center ">
                        <h1 className="lg:text-5xl md:text-3xl text-2xl font-bold -mt-14 text-white">Upgrade Your Tech Accessorize with <br />Gadget Heaven Accessories</h1>
                        <p className="mt-3 mb-4 lg:w-[900px] text-justify sm:px-0 px-2 sm:text-center mx-auto md:w-[700px] text-white/80">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                        <button onClick={() => navigate("/dashboard")} className="btn border-none px-7 py-4 rounded-full text-primary font-bold bg-[#FFFFFF]">Shop Now</button>
                    </div>

                </div>
            </div>
            <div className="relative lg:mb-96 md:mb-36 mb-28 ">
                <div className='
                borders p-4  position absolute -top-20 left-10 md:-top-28 md:left-[20%] lg:-top-22 lg:left-[21%] 
                '>
                    <div className=' bg-banner  rounded-lg  bg-cover   bg-no-repeat bg-center w-[250px] h-[200px] lg:w-[1400px] md:w-[500px] lg:h-[600px] md:h-[300px]
                    
                    '>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;