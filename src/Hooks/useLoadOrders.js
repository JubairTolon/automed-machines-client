import { signOut } from 'firebase/auth';
import { useQuery } from 'react-query';
import auth from '../firebase.init';

const useLoadOrders = () => {
    const { data: allOrders, isLoading, refetch } = useQuery('order', () =>
        fetch('https://gentle-peak-82604.herokuapp.com/orders', {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem('accessToken');
                }
                return res.json()
            })
    );

    return { allOrders, isLoading, refetch };
};

export default useLoadOrders;