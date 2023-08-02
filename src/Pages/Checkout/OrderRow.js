import React from 'react';

const OrderRow = ({ item, no }) => {
    const quantity = item.minOrder;
    const price = quantity * item.price;

    return (
        <tr className="bg-white dark:bg-gray-800 text-center">
            <td>{no}</td>
            <td>{item._id}</td>
            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                {item.name}
            </th>
            <td className="py-4 px-6">
                {quantity}
            </td>
            <td className="py-4 px-6">
                $ {price.toFixed(2)}
            </td>
        </tr>
    );
};

export default OrderRow;