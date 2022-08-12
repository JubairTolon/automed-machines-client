import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, styled } from '@mui/material';
import Product from './Product';
import { Repeat } from '@mui/icons-material';


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
                    <Typography sx={{ display: 'grid', gridTemplateColumns: { sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: 4 }} variant='overline'>{children}</Typography>
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

const Products = () => {
    const [products, setProducts] = React.useState([]);
    const url = 'Products.json';
    React.useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    //data load
    return (
        <Box sx={{ marginLeft: 'auto', marginRight: 'auto', marginTop: 36, width: '75%' }}>
            <Box sx={{ textAlign: 'center' }}>
                <Typography variant='h5' component="div" color='#F53005'>Collections</Typography>
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
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </TabPanel>
            <TabPanel value={value} index={0}>

            </TabPanel>
            <TabPanel value={value} index={1}>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </TabPanel>
            <TabPanel value={value} index={2}>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </TabPanel>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button sx={{
                    borderColor: '#F53005', color: '#F53005', '&:hover': {
                        borderColor: "#F53005",
                    },
                }} variant="outlined">See All Products</Button>
            </Box>
        </Box>
    );
}

export default Products;