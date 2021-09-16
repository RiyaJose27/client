import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';



const AllProducts = (props) => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(true);

    useEffect(() => {
        console.log("running use effect");
        console.log(loaded);
        axios.get("http://localhost:8000/api/products/all")
            .then(res => {
                setProducts(res.data.results);
            })
            .catch(err => console.log(err))
    }, [loaded])
    return (
        <div>
                {
                    products.map((item, i) => {
                        return <ProductCard key={i} data={item} setLoaded={setLoaded} />
                    })
                }
        </div>
    )
}
export default AllProducts;