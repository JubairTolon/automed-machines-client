import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo.png'
import { BsCartPlusFill, BsFillHeartFill } from 'react-icons/bs';
import { AiOutlineDown } from 'react-icons/ai';
import NavCartSingleItem from './NavCartSingleItem';
import './Nav.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import Loading from './Loading';
import { useQuery } from 'react-query';
import { useState } from "react";
import auth from '../../firebase.init';
// import AccessLink from './AccessLink';

const Nav = ({ cart, subTotal, products }) => {
    const [user] = useAuthState(auth);
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    const email = user?.email;
    const { data: currentUser, isLoading } = useQuery(['user', user], () =>
        fetch(`https://automed-machines-server.vercel.app/profileInfo?user=${email}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }
        )
            .then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    }
    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    }

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = products.filter((value) => {
            return value.name.toLowerCase().includes(searchWord.toLowerCase());
        });

        if (searchWord === "") {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
    };

    return (
        <div className='bg-white sticky top-0 z-20'>
            {/* <div><AccessLink /></div> */}
            <nav className="">
                <div className="flex justify-between items-center px-8 py-3 mx-auto">
                    <Link to='/'>
                        <img src={logo} className="h-8" alt="Automet logo" />
                    </Link>

                    {/* search........... */}
                    <form className="items-center relative w-1/3 md:w-2/5">
                        <label htmlFor="simple-search" className="sr-only">Search</label>
                        <div className="relative w-full">
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                            </div>
                            <input value={wordEntered}
                                onChange={handleFilter} type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" placeholder="Search" required="" />
                        </div>
                        {/* <button type="submit" className="p-2.5 ml-2 text-sm font-medium text-white bg-orange-500 rounded-lg border border-orange-500 hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-500 dark:hover:bg-orange-400 dark:focus:ring-orange-300">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            <span className="sr-only">Search</span>
                        </button> */}
                        {filteredData.length !== 0 &&
                            <div className="searchResult absolute z-30 rounded-md p-4 bg-zinc-200 text-gray-800 w-full h-fit overflow-y-auto overflow-hidden mt-1">
                                {
                                    filteredData.map((value, key) => {
                                        return <Link to={`/productDetails/${value._id}`} >
                                            <div className='p-2 rounded-md hover:bg-slate-50'>
                                                {value.name}
                                            </div>
                                        </Link>
                                    })
                                }
                            </div>
                        }
                    </form>

                    <div className="flex items-center">
                        <Link to='/' className="flex flex-nowrap items-center mr-6 text-sm font-medium text-gray-800 hover:underline hover:text-red-600">Wishlist<span className='mx-1'><BsFillHeartFill /></span>({0})
                        </Link>
                        <div className="indicator">
                            <span className="indicator-item top-1 right-1 badge badge-primary bg-orange-500 border-none">{cart.length}</span>
                            <div className="dropdown dropdown-end">
                                <label tabIndex="0" className="btn btn-md btn-outline btn-circle text-2xl md:text-xl text-gray-800">< BsCartPlusFill /></label>
                                <ul tabIndex="0" className="dropdown-content cart-dropdown menu py-4 px-4 shadow bg-zinc-200 rounded">
                                    {
                                        cart.length === 0 ? <h1 className='text-center text-xl font-semibold  w-full mx-auto text-gray-600 my-6 '>Your cart is empty</h1> : cart?.map(item => <NavCartSingleItem
                                            key={item._id}
                                            item={item}
                                        ></NavCartSingleItem>)
                                    }
                                    <div className='flex gap-8 items-center text-gray-700 px-2 justify-between mt-8 mb-4'>
                                        <div className='font-bold'>
                                            <h2>Subtotal</h2>
                                        </div>
                                        <div className='font-bold'>
                                            <h2>$ {subTotal}</h2>
                                        </div>
                                    </div>
                                    {cart.length > 0 &&
                                        <div className='flex items-center justify-between mt-4 mb-4'>
                                            <Link to='/cart'><button className='btn btn-sm btn-primary bg-orange-500 border-none'>View Cart</button></Link>
                                            <Link to='/checkout'><button className='btn btn-sm btn-primary bg-orange-500 border-none'>Checkout</button></Link>
                                        </div>
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div >
            </nav >
            <nav className="">
                <div className="bg-gray-50 navbar px-6 mx-auto">
                    <div className="navbar-start lg:hidden">
                        <div className="dropdown text-white">
                            <label tabIndex="0" className="btn bg-gray-600 btn-outline lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-2 p-2 shadow rounded w-52 bg-gray-600">
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/aboutMore'>About</Link></li>
                                <li tabIndex="0">
                                    <Link to='/shop' className="justify-between">
                                        Shop
                                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                    </Link>
                                    <ul className="p-2 bg-gray-600 w-40">
                                        <li><Link className='' to='/shop'>Shop</Link></li>
                                    </ul>
                                </li>
                                <li tabIndex="0">
                                    <Link to='/blogs' className="justify-between">
                                        Blogs
                                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                    </Link>
                                    <ul className="p-2 bg-gray-600 w-40">
                                        <li><Link to='/blogs'>Blog</Link></li>
                                        <li><Link to='/blogs'>Blog details</Link></li>
                                    </ul>
                                </li>
                                <li><Link to='/contact'>Contact</Link></li>
                                <li><Link to='/reviewsMain'>Reviews</Link></li>

                                <li tabIndex="0">
                                    <Link to='/features' className='justify-between'>
                                        Features
                                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                    </Link>
                                    <ul className="p-2 bg-gray-600">
                                        <div className='grid grid-flow-col lg:grid-flow-row gap-2 mb-4'>
                                            <div className='w-28'>
                                                <h2 className='mb-8 mt-4 text-xl'>Column-1</h2>
                                                <li><Link to='/shop'>Shop</Link></li>
                                                <li><Link to='/checkout'>Checkout</Link></li>
                                                <li><Link to='/cart'>Cart</Link></li>
                                                <li><Link to='/wishlist'>Wishlist</Link></li>
                                                <li><Link to='/account'>My account</Link></li>
                                            </div>
                                            <div className='w-28'>
                                                <h2 className='mb-8 mt-4 text-xl'>Column-1</h2>
                                                <li><Link to='/shop'>Shop</Link></li>
                                                <li><Link to='/checkout'>Checkout</Link></li>
                                                <li><Link to='/cart'>Cart</Link></li>
                                                <li><Link to='/wishlist'>Wishlist</Link></li>
                                                <li><Link to='/account'>My account</Link></li>
                                            </div>
                                            <div className='w-28'>
                                                <h2 className='mb-8 mt-4 text-xl'>Column-1</h2>
                                                <li><Link to='/shop'>Shop</Link></li>
                                                <li><Link to='/checkout'>Checkout</Link></li>
                                                <li><Link to='/cart'>Cart</Link></li>
                                                <li><Link to='/wishlist'>Wishlist</Link></li>
                                                <li><Link to='/account'>My account</Link></li>
                                            </div>
                                        </div>
                                    </ul>
                                </li>
                                {user &&
                                    <li tabIndex="0">
                                        <Link to='/dashboard' className="justify-between">
                                            Dashboard
                                        </Link>
                                    </li>
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="navbar-start hidden lg:flex md:w-full">
                        <ul className="menu menu-horizontal p-0 font-bold text-gray-600 text-sm">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/aboutMore'>About</Link></li>
                            <li tabIndex="0">
                                <Link to='/shop'>
                                    Shop
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                </Link>
                                <ul className="p-2 bg-gray-50 rounded w-40 shadow-md">
                                    <div className='my-2 font-medium'>
                                        <Link className='hover:text-red-600 transition duration-0 hover:duration-100' to='/shop'>Shop</Link>
                                    </div>
                                </ul>
                            </li>
                            <li tabIndex="0">
                                <Link to='/blogs'>
                                    Blog
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                </Link>
                                <ul className="p-2 bg-gray-50 rounded w-40 shadow-md">
                                    <div className='my-2 font-medium'>
                                        <Link className='hover:text-red-600 transition duration-0 hover:duration-100' to='/blogs'>Blog</Link>
                                    </div>
                                    <div className='my-2 font-medium'>
                                        <Link className='hover:text-red-600 transition duration-0 hover:duration-100' to='/blogs'>Blog details</Link>
                                    </div>
                                </ul>
                            </li>
                            <li><Link to='/contact'>Contact</Link></li>
                            <li><Link to='/reviewsMain'>Reviews</Link></li>
                            <li tabIndex="0">
                                <Link to='/features'>
                                    Features
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                </Link>
                                <ul className="p-2 bg-gray-50 rounded shadow-md z-10 ">
                                    <div className='grid grid-flow-col gap-2 px-8 mb-4'>
                                        <div className='w-40'>
                                            <h2 className='mb-8 mt-4 text-xl'>Cart</h2>
                                            <div className='my-2 font-medium'>
                                                <Link className='hover:text-red-600 transition duration-0 hover:duration-100' to='/shop'>Shop</Link>
                                            </div>
                                            <div className='my-2 font-medium'>
                                                <Link className='hover:text-red-600 transition duration-0 hover:duration-100' to='/checkout'>Checkout</Link>
                                            </div>
                                            <div className='my-2 font-medium'>
                                                <Link className='hover:text-red-600 transition duration-0 hover:duration-100' to='/cart'>Cart</Link>
                                            </div>
                                            <div className='my-2 font-medium'>
                                                <Link className='hover:text-red-600 transition duration-0 hover:duration-100' to='/wishlist'>Wishlist</Link>
                                            </div>
                                            <div className='my-2 font-medium'>
                                                <Link className='hover:text-red-600 transition duration-0 hover:duration-100' to='/account'>My account</Link>
                                            </div>
                                        </div>
                                        <div className='w-40'>
                                            <h2 className='mb-8 mt-4 text-xl'>Cart</h2>
                                            <div className='my-2 font-medium'>
                                                <Link className='hover:text-red-600 transition duration-0 hover:duration-100' to='/shop'>Shop</Link>
                                            </div>
                                            <div className='my-2 font-medium'>
                                                <Link className='hover:text-red-600 transition duration-0 hover:duration-100' to='/checkout'>Checkout</Link>
                                            </div>
                                            <div className='my-2 font-medium'>
                                                <Link className='hover:text-red-600 transition duration-0 hover:duration-100' to='/cart'>Cart</Link>
                                            </div>
                                            <div className='my-2 font-medium'>
                                                <Link className='hover:text-red-600 transition duration-0 hover:duration-100' to='/wishlist'>Wishlist</Link>
                                            </div>
                                            <div className='my-2 font-medium'>
                                                <Link className='hover:text-red-600 transition duration-0 hover:duration-100' to='/account'>My account</Link>
                                            </div>
                                        </div>
                                        <div className='w-40'>
                                            <h2 className='mb-8 mt-4 text-xl'>Cart</h2>
                                            <div className='my-2 font-medium'>
                                                <Link className='hover:text-red-600 transition duration-0 hover:duration-100' to='/shop'>Shop</Link>
                                            </div>
                                            <div className='my-2 font-medium'>
                                                <Link className='hover:text-red-600 transition duration-0 hover:duration-100' to='/checkout'>Checkout</Link>
                                            </div>
                                            <div className='my-2 font-medium'>
                                                <Link className='hover:text-red-600 transition duration-0 hover:duration-100' to='/cart'>Cart</Link>
                                            </div>
                                            <div className='my-2 font-medium'>
                                                <Link className='hover:text-red-600 transition duration-0 hover:duration-100' to='/wishlist'>Wishlist</Link>
                                            </div>
                                            <div className='my-2 font-medium'>
                                                <Link className='hover:text-red-600 transition duration-0 hover:duration-100' to='/account'>My account</Link>
                                            </div>
                                        </div>
                                    </div>
                                </ul>
                            </li>
                            {user &&
                                <li tabIndex="0">
                                    <Link to='/dashboard' className="justify-between">
                                        Dashboard
                                    </Link>
                                </li>
                            }
                        </ul>
                    </div>

                    {/* address */}
                    <div className="navbar-end flex gap-5">
                        {/* <select defaultValue={'default'} className="select border-none active:bg-none focus:outline-none ">
                            <option value='default' disabled>Language</option>
                            <option>English</option>
                            <option>Francis</option>
                            <option>Germany</option>
                        </select> */}
                        <div className="dropdown dropdown-end">
                            <label tabIndex="0" className="btn btn-sm btn-primary rounded text-xs m-1 flex-nowrap text-white">Account<span className='text-md ml-2 text-white'> <AiOutlineDown /></span></label>
                            <ul tabIndex="0" className="dropdown-content menu shadow bg-base-100 rounded">
                                <div className='grid items-center py-2 text-gray-800 bg-gray-50'>
                                    <div className='px-4'>
                                        <div className='w-60 mb-2'>
                                            <h2>Welcome to <Link className='font-medium hover:underline hover:decoration-2' to='/'>Automed Machines</Link></h2>
                                        </div>
                                        {!currentUser || !user ?
                                            <Link to='/login'><button className='btn btn-primary btn-wide btn-sm p-2 my-2 bg-orange-500 border-none'>Login</button></Link>
                                            :
                                            <Link to='/profile' className='flex gap-2 items-center rounded-md py-1 hover:bg-slate-200'>
                                                {
                                                    currentUser[0]?.img ? <img className="w-9 h-9 rounded-full" src={currentUser[0]?.img} alt="profile" />
                                                        :
                                                        <div className="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600">
                                                            <svg className="absolute -left-1 w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                                                        </div>
                                                }
                                                <h1 className='text-md text-purple-500 font-semibold'>{user?.displayName}</h1>
                                            </Link>
                                        }

                                    </div>
                                    <div className="divider m-1"></div>
                                    <div className=''>
                                        <div className='px-4 py-1'><Link className='hover:text-orange-500' to='/'>My orders</Link></div>
                                        <div className='px-4 py-1'><Link className='hover:text-orange-500' to='/'>Message center</Link></div>
                                        <div className='px-4 py-1'><Link className='hover:text-orange-500' to='/'>Payment</Link></div>
                                        <div className='px-4 py-1'><Link className='hover:text-orange-500' to='/'>Wishlist</Link></div>
                                        <div className='px-4 py-1'><Link className='hover:text-orange-500' to='/'>My favourite stories</Link></div>
                                        <div className='px-4 py-1'><Link className='hover:text-orange-500' to='/'>My cupons</Link></div>
                                    </div>
                                    {user && <Link onClick={logout} to='/login'>
                                        <button className='btn btn-primary btn-wide btn-sm p-2 my-2 mx-4 bg-orange-500 border-none'>Log out</button>
                                    </Link>}
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div >
    );
};

export default Nav; <h2>This is nav bar</h2>