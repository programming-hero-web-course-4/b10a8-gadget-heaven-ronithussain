
import { NavLink, useLocation } from 'react-router-dom';
import { TiShoppingCart } from "react-icons/ti";
import { FcLike } from "react-icons/fc";

const Navbar = ({ cartCount }) => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    //state for cart lwngth


    return (

        <nav className={`sm:p-8  mt-4 sm:mt-0 ${isHomePage ? 'absolute top-0 left-0 w-full text-white' : 'text-primary'}`}>
            <div className='rounded-xl'>
                <div className='navbar container mx-auto'>
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                <li><NavLink
                                    to='/'>Home</NavLink></li>
                                <li><NavLink to='/statistic'>Statistic</NavLink ></li>
                                <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
                                <li><NavLink to='/view'>Views</NavLink></li>
                            </ul>
                        </div>
                        <h3 className={`hidden sm:block md:text-2xl lg:text-3xl font-medium ${isHomePage ? 'bg-transparent text-white' : 'text-primary'
                            }`}>Gadget Heaven</h3>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 gap-x-5">

                            <li><NavLink to='/'>Home</NavLink></li>
                            <li><NavLink to='/statistic'>Statistic</NavLink ></li>
                            <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
                            <li><NavLink to='/view'>Views</NavLink></li>
                        </ul>
                    </div>
                    <div className="navbar-end flex gap-x-3">
                        <NavLink to="/dashboard">
                            <button
                                className="hover:text-white hover:bg-primary text-3xl text-black bg-white px-2 py-1 rounded-full flex items-center"><TiShoppingCart ></TiShoppingCart>
                                <span className='text-base font-bold bg-primary px-2 rounded-full'>{cartCount}</span>
                            </button>
                        </NavLink>

                        <NavLink to="/dashboard">
                            <button className="hover:text-white hover:bg-primary text-3xl text-black bg-white p-2 rounded-full "><FcLike></FcLike></button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;