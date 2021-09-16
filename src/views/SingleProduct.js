import React, { useEffect, useState } from 'react';
import {useParams, Link} from 'react-router-dom';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

const SingleProduct = (props) => {
    const {_id} = useParams();
    const [product, setProduct] = useState({});

    useEffect(()=>{
        axios.get("http://localhost:8000/api/products/" + _id)
            .then(res=>setProduct(res.data.results))
            .catch(err=>console.log(err));
    },[_id])

    return(
        <div className="d-flex justify-content-center mt-5">
            <div>
                <ProductCard data={product}/>
                <Link to={`/products/${_id}/edit`} className="btn btn-lg btn-warning">Edit</Link>
            </div>
        </div>
    )
}

export default SingleProduct;
