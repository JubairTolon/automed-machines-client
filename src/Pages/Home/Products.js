import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, styled } from '@mui/material';
import Product from './Product';
import { Link } from 'react-router-dom';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3, }}>
                    <Typography sx={{ display: 'grid', gridTemplateColumns: { sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: 2 }} variant='overline'>{children}</Typography>
                </Box>
            )
            }
        </div >
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
};
const AntTabs = styled(Tabs)({
    borderBottom: '1px solid #e8e8e8',
    '& .MuiTabs-indicator': {
        backgroundColor: '#F53005',
    },
});
const AntTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
    textTransform: 'none',
    minWidth: 200,
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
        minWidth: 421,
    },
    fontWeight: 700,
    color: 'rgba(0, 0, 0, 0.85)',
    fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
        color: '#5A5A5A',
        opacity: 1,
    },
    '&.Mui-selected': {
        color: '#F53005',
        fontWeight: theme.typography.fontWeightMedium,
    },
    '&.Mui-focusVisible': {
        backgroundColor: '#d1eaff',
    },
}));

const Products = ({ products }) => {
    const newP = products?.filter(p => p.status === 'New');
    const popularP = products?.filter(p => p.rating >= 4);
    const mostOrderedP = products?.filter(p => p.status === 'Hot');

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ marginLeft: 'auto', marginRight: 'auto', py: 4, width: '75%', backgroundColor: '#f2f2f2' }}>
            <Box sx={{ textAlign: 'center' }}>
                <Typography variant='h3' component="div">Our Products Collections</Typography>
            </Box>
            <Box sx={{ marginTop: 6, borderBottom: 1, borderColor: 'divider' }}>
                <AntTabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <AntTab label="New Collections" {...a11yProps(0)} />
                    <AntTab label="Populer Collection" {...a11yProps(1)} />
                    <AntTab label="Most Ordered" {...a11yProps(2)} />
                </AntTabs>
            </Box>
            <TabPanel value={value} index={0}>
                {
                    newP?.map(product =>
                        <Product
                            key={product._id}
                            product={product}
                        ></Product>
                    )
                }
            </TabPanel>
            <TabPanel value={value} index={1}>
                {
                    popularP?.map(product =>
                        <Product
                            key={product._id}
                            product={product}
                        ></Product>
                    )
                }
            </TabPanel>
            <TabPanel value={value} index={2}>
                {
                    mostOrderedP?.map(product =>
                        <Product
                            key={product._id}
                            product={product}
                        ></Product>
                    )
                }
            </TabPanel>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Link to='/shop'>
                    <Button sx={{
                        borderColor: '#F53005', color: '#F53005', '&:hover': {
                            borderColor: "#F53005",
                        },
                    }} variant="outlined">See All Products</Button>
                </Link>
            </Box>
        </Box>
    );
}

export default Products;