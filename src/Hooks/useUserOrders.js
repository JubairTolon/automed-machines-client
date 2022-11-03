import { signOut } from 'firebase/auth';
import { useQuery } from 'react-query';
import auth from '../firebase.init';

const useUserOrders = (user) => {
    const { data: orders } = useQuery(['order', user], () =>
        fetch(`https://gentle-peak-82604.herokuapp.com/userOrders?user=${user?.email}`, {
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

    return { orders };
};

export default useUserOrders;