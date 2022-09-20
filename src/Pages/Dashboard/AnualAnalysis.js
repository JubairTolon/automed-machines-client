import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Pie, PieChart, ReferenceLine, Tooltip, XAxis, YAxis } from 'recharts';
import useLoadOrders from '../../Hooks/useLoadOrders';
import useLoadProduct from '../../Hooks/useLoadProduct';

const AnualAnalysis = () => {
    const { products } = useLoadProduct();
    const { allOrders } = useLoadOrders();

    let totalInvest = 0;
    let totalSell = 0;
    products?.map(product => totalInvest = totalInvest + (product.avaiableQuentty * product.price)
    )
    allOrders?.map(or => totalSell = totalSell + parseInt(or.total))

    const data01 = [
        { name: "invest", value: totalInvest },
        { name: "sell", value: totalSell },

    ];
    const data02 = [
        { name: "January", value: 100 },
        { name: "February", value: 300 },
        { name: "March", value: 100 },
        { name: "April", value: 80 },
        { name: "May", value: 40 },
        { name: "June", value: 30 },
        { name: "July", value: 50 },
        { name: "August", value: 100 },
        { name: "September", value: 200 },
        { name: "October", value: 150 },
        { name: "November", value: 50 },
        { name: "December", value: 50 },
    ];
    const data = [
        {
            name: 'January',
            invest: 4000,
            sell: 2400,
            amt: 2400,
        },
        {
            name: 'February',
            invest: -3000,
            sell: 1398,
            amt: 2210,
        },
        {
            name: 'March',
            invest: -2000,
            sell: -9800,
            amt: 2290,
        },
        {
            name: 'April',
            invest: 2780,
            sell: 3908,
            amt: 2000,
        },
        {
            name: 'May',
            invest: -1890,
            sell: 5800,
            amt: 2181,
        },
        {
            name: 'June',
            invest: 2390,
            sell: 3800,
            amt: 2500,
        },
        {
            name: 'July',
            invest: 3490,
            sell: 6300,
            amt: 2100,
        },
        {
            name: 'August',
            invest: 3490,
            sell: 4300,
            amt: 2100,
        },
        {
            name: 'September',
            invest: 3490,
            sell: 3300,
            amt: 2100,
        },
        {
            name: 'Octobar',
            invest: 8490,
            sell: 4300,
            amt: 2100,
        },
        {
            name: 'November',
            invest: 3490,
            sell: 4300,
            amt: 2100,
        },
        {
            name: 'December',
            invest: 3490,
            sell: 6300,
            amt: 2100,
        },
    ];
    return (
        <div>
            <h1 className='text-4xl font-semibold text-center text-gray-500'>Annual Business Review</h1>
            <div className='block lg:flex items-center mt-10 mb-16'>
                <PieChart width={400} height={400}>
                    <Pie
                        data={data01}
                        dataKey="value"
                        cx={200}
                        cy={200}
                        outerRadius={60}
                        fill="#8884d8"
                    />
                    <Pie
                        data={data02}
                        dataKey="value"
                        cx={200}
                        cy={200}
                        innerRadius={70}
                        outerRadius={90}
                        fill="#82ca9d"
                        label
                    />
                    <Tooltip />
                </PieChart>

                <BarChart
                    width={800}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <ReferenceLine y={0} stroke="#000" />
                    <Bar dataKey="invest" fill="#8884d8" />
                    <Bar dataKey="sell" fill="#82ca9d" />
                </BarChart>
            </div>
        </div>
    );
};

export default AnualAnalysis;