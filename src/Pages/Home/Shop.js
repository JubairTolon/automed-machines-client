import { FormControl, IconButton, InputLabel, MenuItem, Select, Slider, ToggleButton, ToggleButtonGroup } from '@mui/material';
import React from 'react';
import Product from './Product';
import { BsFillGrid3X3GapFill } from 'react-icons/bs';
import { BiGridVertical } from 'react-icons/bi';
import { useState } from 'react';
import { useEffect } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import './Shop.css';
import useLoadReviews from '../../Hooks/useLoadReviews';
import useLoadProduct from '../../Hooks/useLoadProduct';
import Loading from '../Shared/Loading';


const Shop = () => {
    const { reviews } = useLoadReviews();
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [showingItem, setShowingItem] = React.useState(10);
    const { products, isLoading } = useLoadProduct(reviews, page, showingItem);

    const [items, setItems] = useState(products);
    useEffect(() => {
        fetch('http://localhost:5000/productCount')
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                const pages = Math.ceil(count / showingItem);
                setPageCount(pages);
            })
    }, [showingItem])

    useEffect(() => {
        setItems(products)
    }, [products])

    //for product showing by toggle
    const [alignment, setAlignment] = React.useState('items-5');

    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    const [sortBy, setSortBy] = React.useState('');

    const handleBackword = (page) => {
        setPage(page - 1)
    }

    const handleForword = (page) => {
        setPage(page + 1)
    }

    const handleChangePageItemShow = (event) => {
        setShowingItem(event.target.value);
    };

    const handleChangeSortItem = (event) => {
        setSortBy(event.target.value);
    };
    if (sortBy === 1) {
        products?.sort((a, b) => a.price - b.price);
    }


    //for price range selector
    const minDistance = 1000;
    const [value2, setValue2] = React.useState([0, 100000]);

    if (isLoading) {
        return <Loading></Loading>
    }

    const handleChange2 = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (newValue[1] - newValue[0] < minDistance) {
            if (activeThumb === 0) {
                const clamped = Math.min(newValue[0], 100000 - minDistance);
                setValue2([clamped, clamped + minDistance]);
            } else {
                const clamped = Math.max(newValue[1], minDistance);
                setValue2([clamped - minDistance, clamped]);
            }
        } else {
            setValue2(newValue);
        }

        //for price filter
        const updatedItems = products?.filter(product => {
            return product.price >= value2[0] && product.price <= value2[1];
        });
        setItems(updatedItems);
    };

    const followersMarks = [
        {
            value: 1000,
            label: '1k',
        },
        {
            value: 10000,
            label: '10k',
        },
        {
            value: 25000,
            label: '25k',
        },
        {
            value: 50000,
            label: '50k',
        },
        {
            value: 100000,
            label: '100k',
        }
    ]
    function numFormatter(num) {
        if (num > 999 && num < 1000000) {
            return (num / 1000).toFixed(0) + "K"; // convert to K for number from > 1000 < 1 million
        } else if (num >= 1000000) {
            return (num / 1000000).toFixed(0) + "M"; // convert to M for number from > 1 million
        } else if (num < 900) {
            return num; // if value < 1000, nothing to do
        }
    }

    //for filtering
    const filterAllItems = (category) => {
        if (category === 'All items') {
            setItems(products);
        }
    }
    const filterCategory = (category) => {
        const updatedItems = products.filter(product => {
            return product.category === category;
        });
        setItems(updatedItems);

    }
    const filterBrand = (brand) => {
        const updatedItems = products.filter(product => {
            return product.brand === brand;
        });
        setItems(updatedItems);
    }
    const filterColor = (color) => {
        const updatedItems = products.filter(product => {
            return product.color === color;
        });
        setItems(updatedItems);
    }

    const filterTag = (tag) => {
        const updatedItems = products.filter(product => {
            return product.tag === tag;
        });
        setItems(updatedItems);
    }

    return (
        <div>

            <div className='mt-52 lg:mt-32 flex'>
                <div className='w-1/3 lg:w-1/5 px-5 bg-zinc-100'>
                    <div>
                        <h1 className='text-gray-500 font-bold uppercase text-2xl my-4'>Vehicle Category</h1>
                        <ul className=''>
                            <li><button onClick={() => filterAllItems('All items')} className=' text-gray-600 text-lg mb-1 font-semibold focus:text-orange-500 hover:text-gray-800'>All items</button></li>
                            <li><button onClick={() => filterCategory('Small')} className=' text-gray-600 text-lg mb-1 font-semibold focus:text-orange-500 hover:text-gray-800'>Small</button></li>
                            <li><button onClick={() => filterCategory('Medium')} className=' text-gray-600 text-lg mb-1 font-semibold focus:text-orange-500 hover:text-gray-800'>Medium</button></li>
                            <li><button onClick={() => filterCategory('Large')} className=' text-gray-600 text-lg mb-1 font-semibold focus:text-orange-500 hover:text-gray-800'>Large</button></li>
                            <li><button onClick={() => filterCategory('Extra-Large')} className=' text-gray-600 text-lg mb-1 font-semibold focus:text-orange-500 hover:text-gray-800'>Extra-Large</button></li>
                        </ul>
                    </div>
                    <div>
                        <h1 className='text-gray-500 font-bold uppercase text-2xl my-4'>Brands</h1>
                        <ul className=''>
                            <li><button onClick={() => filterBrand('Audi')} className=' text-gray-600 text-lg mb-1 font-semibold focus:text-orange-500 hover:text-gray-800'>Audi</button></li>
                            <li><button onClick={() => filterBrand('BMW')} className=' text-gray-600 text-lg mb-1 font-semibold focus:text-orange-500 hover:text-gray-800'>BMW</button></li>
                            <li><button onClick={() => filterBrand('Bentley')} className=' text-gray-600 text-lg mb-1 font-semibold focus:text-orange-500 hover:text-gray-800'>Bentley</button></li>
                            <li><button onClick={() => filterBrand('Ford')} className=' text-gray-600 text-lg mb-1 font-semibold focus:text-orange-500 hover:text-gray-800'>Ford</button></li>
                            <li><button onClick={() => filterBrand('Honda')} className=' text-gray-600 text-lg mb-1 font-semibold focus:text-orange-500 hover:text-gray-800'>Honda</button></li>
                            <li><button onClick={() => filterBrand('Hyundai')} className=' text-gray-600 text-lg mb-1 font-semibold focus:text-orange-500 hover:text-gray-800'>Hyundai</button></li>
                            <li><button onClick={() => filterBrand('Toyota')} className=' text-gray-600 text-lg mb-1 font-semibold focus:text-orange-500 hover:text-gray-800'>Toyota</button></li>
                        </ul>
                    </div>
                    <div>
                        <h1 className='text-gray-500 font-bold uppercase text-2xl my-4'>Color</h1>
                        <ul className=''>
                            <li><button onClick={() => filterColor('Black')} className=' text-gray-600 text-lg mb-2 font-semibold focus:text-orange-500 hover:text-gray-800'>Black</button></li>
                            <li><button onClick={() => filterColor('Blue')} className=' text-gray-600 text-lg mb-2 font-semibold focus:text-orange-500 hover:text-gray-800'>Blue</button></li>
                            <li><button onClick={() => filterColor('Silver')} className=' text-gray-600 text-lg mb-2 font-semibold focus:text-orange-500 hover:text-gray-800'>Silver</button></li>
                            <li><button onClick={() => filterColor('Yellow')} className=' text-gray-600 text-lg mb-2 font-semibold focus:text-orange-500 hover:text-gray-800'>Yellow</button></li>
                            <li><button onClick={() => filterColor('Red')} className=' text-gray-600 text-lg mb-2 font-semibold focus:text-orange-500 hover:text-gray-800'>Red</button></li>
                            <li><button onClick={() => filterColor('Mercury Black')} className=' text-gray-600 text-lg mb-2 font-semibold focus:text-orange-500 hover:text-gray-800'>Mercury Black</button></li>
                            <li><button onClick={() => filterColor('White')} className=' text-gray-600 text-lg mb-2 font-semibold focus:text-orange-500 hover:text-gray-800'>White</button></li>
                        </ul>
                    </div>
                    <div>
                        <h1 className='text-gray-500 font-bold uppercase text-2xl mt-4'>Price</h1>
                        <Slider
                            sx={{ my: 5, color: '#FF5733' }}
                            getAriaLabel={() => 'Minimum distance shift'}
                            value={value2}
                            onChange={handleChange2}
                            valueLabelDisplay="auto"
                            max={100000}
                            step={1000}
                            marks={followersMarks}
                            valueLabelFormat={numFormatter}
                            disableSwap
                        />

                    </div>
                    <div>
                        <h1 className='text-gray-500 font-bold uppercase text-2xl my-4'>Tags</h1>
                        <div className='flex flex-wrap gap-2'>
                            <button onClick={() => filterTag('Car')} className='btn btn-sm btn-outline px-4 focus:text-white focus:bg-gray-800'>Car</button>
                            <button onClick={() => filterTag('Bus')} className='btn btn-sm btn-outline px-4 focus:text-white focus:bg-gray-800'>Bus</button>
                            <button onClick={() => filterTag('Truck')} className='btn btn-sm btn-outline px-4 focus:text-white focus:bg-gray-800'>Truck</button>
                            <button onClick={() => filterTag('Pickup')} className='btn btn-sm btn-outline px-4 focus:text-white focus:bg-gray-800'>Pickup</button>
                        </div>

                    </div>
                </div>
                <div className='w-2/3 lg:w-5/6 px-2 lg:px-2'>
                    <div className='bg-orange-100 px-4 py-2 my-4 flex justify-between items-center'>
                        <div className='flex gap-5'>
                            <div className='flex items-center'>
                                <ToggleButtonGroup
                                    value={alignment}
                                    exclusive
                                    onChange={handleAlignment}
                                    aria-label="text alignment"
                                    sx={{ color: '#494747' }}
                                >
                                    <ToggleButton sx={{ fontSize: 24 }} value="items-5" aria-label="items 5">
                                        <BsFillGrid3X3GapFill />
                                    </ToggleButton>
                                    <ToggleButton sx={{ fontSize: 24 }} value="items-3" aria-label="items 3">
                                        <BiGridVertical />
                                    </ToggleButton>
                                </ToggleButtonGroup>
                            </div>
                            <div className='flex items-center'>
                                <h1>Showing</h1>
                                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                                    <InputLabel>Items</InputLabel>
                                    <Select
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        value={showingItem}
                                        label="Items"
                                        onChange={handleChangePageItemShow}
                                    >
                                        <MenuItem selected value={10}>10</MenuItem>
                                        <MenuItem value={15}>15</MenuItem>
                                        <MenuItem value={20}>20</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div className='flex items-center'>
                                <h1>Sort by</h1>
                                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                                    <InputLabel>Sort</InputLabel>
                                    <Select
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        value={sortBy}
                                        label="Sort"
                                        onChange={handleChangeSortItem}
                                        defaultValue={1}
                                    >
                                        <MenuItem value={1}>Price: Low to high</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                        <div className='w-1/3'>
                            <form class="flex items-center">
                                <label for="simple-search" class="sr-only">Search</label>
                                <div class="relative w-full">
                                    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                                    </div>
                                    <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search a product" />
                                </div>
                            </form>
                        </div>
                        <div>
                            <h1 className='font-semibold text-md hidden lg:block text-gray-600'>Page {page} of {pageCount}</h1>
                        </div>
                    </div>
                    <div className={alignment === 'items-5' ? 'w-full grid grid-flow-row grid-cols-2 lg:grid-cols-5 gap-2 lg:gap-2' : 'w-full lg:w-5/6 mx-auto grid grid-flow-row grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-5'}>
                        {
                            items?.map(product =>
                                <Product
                                    key={product._id}
                                    product={product}
                                ></Product>)
                        }
                    </div>
                </div>
            </div>
            <div className='pagination w-full flex justify-center mt-10'>
                {page > 0 ?
                    <IconButton onClick={() => handleBackword(page)} aria-label="delete">
                        <span>
                            <IoIosArrowBack />
                        </span>
                    </IconButton> : <IconButton disabled onClick={() => handleBackword(page)} aria-label="delete">
                        <span>
                            <IoIosArrowBack />
                        </span>
                    </IconButton>
                }
                {
                    [...Array(pageCount).keys()].map(number =>
                        <button
                            className={page === number ? 'selected' : ''}
                            onClick={() => setPage(number)}>
                            {number}
                        </button>)
                }
                {page + 1 !== pageCount ?
                    <IconButton onClick={() => handleForword(page)} aria-label="delete">
                        <span>
                            <IoIosArrowForward />
                        </span>
                    </IconButton> : <IconButton disabled aria-label="delete">
                        <span>
                            <IoIosArrowForward />
                        </span>
                    </IconButton>
                }
            </div>
        </div >
    );
};

export default Shop;