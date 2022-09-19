import { useQuery } from 'react-query';


const useLoadProduct = (reviews, page, showingItem) => {
    const { data: products, isLoading, refetch } = useQuery(['product', reviews, page, showingItem], () =>
        fetch(`http://localhost:5000/product?page=${page}&showingItem=${showingItem}`)
            .then(res => res.json())
    )

    // for load all product reviews
    products?.map(p => {
        let totalRatings = 0;
        const sprs = reviews?.filter(r => r.productId === p._id);
        sprs?.map(element => totalRatings = totalRatings + element.rating);
        let rating = Math.round(totalRatings / sprs?.length);
        if (isNaN(rating)) {
            p.rating = 0;
        }
        else {
            p.rating = rating;
        }
        return p;
    })


    return { products, isLoading, refetch };
};

export default useLoadProduct;