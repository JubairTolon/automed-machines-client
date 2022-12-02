import { signOut } from 'firebase/auth';
import { useQuery } from 'react-query';
import auth from '../firebase.init';

const useLoadReviews = () => {
    const { data: reviews, isLoading, refetch } = useQuery('review', () =>
        fetch('https://automed-machines-server.vercel.app/productReview', {
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

    return { reviews, isLoading, refetch };
};

export default useLoadReviews;