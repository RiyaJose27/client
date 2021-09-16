import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {useParams, useHistory} from 'react-router-dom';

const Edit = (props) => {
    const {_id} = useParams();
    const history = useHistory();

    const [form, setForm] = useState({
        title: "",
        price: "",
        description: "",
    })
    const [errors, setErrors] = useState({});

    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        axios.patch(`http://localhost:8000/api/products/${_id}/update`,form)
            .then(res=>{
                console.log(res.data);

                if(res.data.results){
                    history.push('/');
                }
                else{
                    setErrors(res.data.err.errors);
                }
            })
            .catch(err=>console.log(err))
    }

    useEffect(()=>{
        axios.get("http://localhost:8000/api/products/" + _id)
            .then(res=>setForm(res.data.results))
            .catch(err=>console.log(err));
    },[_id])

    return(
        <div className="w-50 mx-auto p-3">
            <form onSubmit={onSubmitHandler}>
                <h1>Edit me!!</h1>
                <div className="form-group">
                    <input name="title" value={form.title} className="form-control" type="text" placeholder="title" onChange={onChangeHandler} />
                    <span className="alert-danger">{errors.title && errors.title.message}</span>
                </div>

                <div className="form-group">
                    <input name="price" $ value={form.price} className="form-control" type="number" placeholder="price" onChange={onChangeHandler} />
                    <span className="alert-danger">{errors.price && errors.price.message}</span>
                </div>

                <div className="form-group">
                    <input name="description" value={form.description} className="form-control" type="text" placeholder="description" onChange={onChangeHandler} />
                    <span className="alert-danger">{errors.description && errors.description.message}</span>
                </div>

                <input type="submit" className="btn btn-primary"/>
            </form>
        </div>
    )
}

export default Edit;