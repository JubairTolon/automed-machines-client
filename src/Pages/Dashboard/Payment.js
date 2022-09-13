import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51LRf4qKqB6yxEpg7JdpNZPg9pjBBS6qqUVBa5xFlYszyXYQ5XPlGgBraUbGm7X3RixHS7WTMOMFcygrxXC3vhTa400edYUwZ2b');

const Payment = () => {
    const { id } = useParams();

    const { data: sOrder, isLoading } = useQuery(['order', id], () =>
        fetch(`http://localhost:5000/order/${id}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body bg-teal-100">
                    <h2 class="card-title">Pay for {sOrder?._id}</h2>
                    <p>Your ordered at {sOrder?.date}</p>
                    <p>Please pay: ${sOrder?.total} </p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-gray-200">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        {sOrder && <CheckoutForm
                            sOrder={sOrder}
                        />}

                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;