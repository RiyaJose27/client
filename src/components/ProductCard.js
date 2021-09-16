import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



const ProductCard = (props) => {
    const {title, price, description} = props.data;

    const onDeleteHandler =(_id) => {
        console.log(_id);
        
        axios.delete(`http://localhost:8000/api/products/${_id}/delete`)
        .then(res=>{
            console.log(res);
            props.setLoaded(prevState=>!prevState);
        })
        .catch(err => console.log(err));
    }



    return (
        <div className="productCard">
            <p><Link to={`/products/${props.data._id}`}>{title}</Link></p>
            <p>{price}</p>
            <p>{description}</p>
            <button className="delete" onClick={()=>onDeleteHandler(props.data._id)}>X</button>
        </div>

    )

}


export default ProductCard;