import { FormControl, InputLabel, MenuItem, Pagination, Select, Slider, ToggleButton, ToggleButtonGroup } from '@mui/material';
import React from 'react';
import Product from './Product';
import { BsFillGrid3X3GapFill } from 'react-icons/bs';
import { BiGridVertical } from 'react-icons/bi';
import { useState } from 'react';


function valuetext(value) {
    return `${value}`;
}

const minDistance = 1000;

const Shop = ({ products }) => {

    //for product showing by toggle
    const [alignment, setAlignment] = React.useState('left');

    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    const [showingItem, setShowingItem] = React.useState('');
    const [sortBy, setSortBy] = React.useState('');

    const handleChangePageItemShow = (event) => {
        setShowingItem(event.target.value);
    };

    const handleChangeSortItem = (event) => {
        setSortBy(event.target.value);
    };

    //for price range selector
    const [value2, setValue2] = React.useState([1000, 20000]);

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

    const [items, setItems] = useState(products)

    const filterCategory = (category) => {
        if (category === 'All items') {
            setItems(products)
        }
        else {
            const updatedItems = products.filter(product => {
                return product.category === category;
            });
            setItems(updatedItems)
        }

    }
    const filterBrand = (brand) => {
        if (brand === 'All items') {
            setItems(products)
        }
        else {
            const updatedItems = products.filter(product => {
                return product.brand === brand;
            });
            setItems(updatedItems)
        }

    }
    const filterColor = (color) => {
        if (color === 'All items') {
            setItems(products)
        }
        else {
            const updatedItems = products.filter(product => {
                return product.color === color;
            });
            setItems(updatedItems)
        }

    }
    const filterTag = (tag) => {
        if (tag === 'All items') {
            setItems(products)
        }
        else {
            const updatedItems = products.filter(product => {
                return product.tag === tag;
            });
            setItems(updatedItems)
        }

    }


    return (
        <div className='mt-52 lg:mt-32 flex'>
            <div className='w-1/3 lg:w-1/5 px-5 bg-zinc-100'>
                <div>
                    <h1 className='text-gray-500 font-bold uppercase text-2xl my-4'>Vehicle Category</h1>
                    <ul className=''>
                        <li><button onClick={() => filterCategory('All items')} className=' text-gray-600 text-lg mb-1 font-semibold focus:text-orange-500 hover:text-gray-800'>All items</button></li>
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
                        getAriaValueText={valuetext}
                        max='100000'
                        step='1000'
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
                                <ToggleButton sx={{ fontSize: 24 }} value="left" aria-label="left aligned">
                                    <BsFillGrid3X3GapFill />
                                </ToggleButton>
                                <ToggleButton sx={{ fontSize: 24 }} value="center" aria-label="centered">
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
                                    defaultValue={12}
                                >
                                    <MenuItem value={8}>8</MenuItem>
                                    <MenuItem value={12}>12</MenuItem>
                                    <MenuItem value={16}>16</MenuItem>
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
                                    defaultValue={3}
                                >
                                    <MenuItem value={1}>Trending items</MenuItem>
                                    <MenuItem value={2}>Newest items</MenuItem>
                                    <MenuItem value={3}>Price: Low to high</MenuItem>
                                    <MenuItem value={4}>Price: high to low</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                    <div>
                        <h1 className='font-semibold text-md hidden lg:block text-gray-600'>Page 1 of 15</h1>
                    </div>
                </div>
                <div className='w-full grid grid-flow-row grid-cols-2 lg:grid-cols-5 gap-2 lg:gap-2'>
                    {
                        items?.map(product =>
                            <Product
                                key={product._id}
                                product={product}
                            ></Product>)
                    }
                </div>
                <div className='w-full flex justify-center my-8'>
                    <Pagination size='large' count={10} variant="outlined" shape="rounded" />
                </div>
            </div>
        </div>
    );
};

export default Shop;