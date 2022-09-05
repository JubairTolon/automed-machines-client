import { Button, FormControl, InputLabel, Link, List, ListItem, ListItemText, ListSubheader, MenuItem, Pagination, Select, Slider, ToggleButton, ToggleButtonGroup } from '@mui/material';
import React from 'react';
import Product from './Product';
import { BsFillGrid3X3GapFill } from 'react-icons/bs';
import { BiGridVertical } from 'react-icons/bi';


function valuetext(value) {
    return `${value}`;
}

const minDistance = 20000;

const Shop = ({ products }) => {

    const itemTitels = ['Categories', 'Brands', 'Price', 'Color', 'Tags'];
    const categories = ['All items', 'Small', 'Medium', 'Large', 'Extra-Large']
    const colorItems = ['Black', 'Blue', 'Silver', 'Yellow', 'Red', 'Mercury Black', 'White']
    const brandsItems = ['Audi', 'Toyota', 'Bugati', 'Lemborgeni', 'BMW', 'Acura', 'Alfa Romeo', 'Bentley', 'Buick', 'Chevrolet', 'Cadillac', 'Honda', 'Ford', 'Hyundai']
    const tags = ['Car', 'Bus', 'Truck', 'Pickup']

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
    const [value2, setValue2] = React.useState([10000, 30000]);

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


    return (
        <div className='mt-52 lg:mt-32 flex'>
            <div className='w-1/3 lg:w-1/5 pl-5'>
                <List
                    sx={{
                        bgcolor: 'background.paper',
                        overflow: 'auto',
                        position: 'relative',
                        maxHeight: 1200,
                        '& ul': { padding: 0 },
                    }}
                    subheader={<li />}>

                    <li key={`${itemTitels[0]}`}>
                        <ul>
                            <ListSubheader sx={{ fontSize: 28, fontWeight: 'bold' }}>{`${itemTitels[0]}`}</ListSubheader>
                            {categories?.map((item) => (
                                <ListItem key={`${itemTitels[0]}-${item}`}>
                                    <Link sx={{ textDecoration: 'none', color: '#303030', '&:hover': { cursor: 'pointer', color: '#FF5733' } }}>
                                        <ListItemText primary={`${item}`} />
                                    </Link>
                                </ListItem>
                            ))}
                        </ul>
                    </li>
                    <li key={`${itemTitels[1]}`}>
                        <ul>
                            <ListSubheader sx={{ fontSize: 28, fontWeight: 'bold' }}>{`${itemTitels[1]}`}</ListSubheader>
                            {brandsItems?.map((item) => (
                                <ListItem key={`${itemTitels[1]}-${item}`}>
                                    <Link sx={{ textDecoration: 'none', color: '#303030', '&:hover': { cursor: 'pointer', color: '#FF5733' } }}>
                                        <ListItemText primary={`${item}`} />
                                    </Link>
                                </ListItem>
                            ))}
                        </ul>
                    </li>
                    <li key={`${itemTitels[2]}`}>
                        <ul>
                            <ListSubheader sx={{ fontSize: 28, fontWeight: 'bold' }}>{`${itemTitels[2]}`}</ListSubheader>
                            <ListItem>
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
                            </ListItem>
                        </ul>
                    </li>
                    <li key={`${itemTitels[3]}`}>
                        <ul>
                            <ListSubheader sx={{ fontSize: 28, fontWeight: 'bold' }}>{`${itemTitels[3]}`}</ListSubheader>
                            {colorItems?.map((item) => (
                                <ListItem key={`${itemTitels[3]}`}>
                                    <Link sx={{ textDecoration: 'none', color: '#303030', '&:hover': { cursor: 'pointer', color: '#FF5733' } }}>
                                        <ListItemText primary={`${item}`} />
                                    </Link>
                                </ListItem>
                            ))}
                        </ul>
                    </li>
                    <li key={`${itemTitels[4]}`}>
                        <ul>
                            <ListSubheader sx={{ fontSize: 28, fontWeight: 'bold' }}>{`${itemTitels[4]}`}</ListSubheader>
                            <ListItem sx={{ display: 'flex', columnGap: 2, rowGap: 2, flexWrap: 'wrap' }} key={`${itemTitels[4]}`}>
                                {tags?.map((item) => (
                                    <Button sx={{ borderColor: '#303030', color: '#303030', '&:hover': { cursor: 'pointer', color: '#FF5733' } }} primary={`${item}`} size="small" variant="outlined">{item}</Button>
                                ))}
                            </ListItem>
                        </ul>
                    </li>
                </List>
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
                        products?.map(product =>
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