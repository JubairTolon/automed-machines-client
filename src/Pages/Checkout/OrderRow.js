import React from 'react';

const OrderRow = () => {
    return (
        <div>
            <tr class="bg-white dark:bg-gray-800">
                <td>1</td>
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Brake pad
                </th>
                <td class="py-4 px-6">
                    50
                </td>
                <td class="py-4 px-6">
                    $2999
                </td>
            </tr>
        </div>
    );
};

export default OrderRow;