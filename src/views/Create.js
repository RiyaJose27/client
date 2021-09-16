import React, {useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

const Create = (props) => {
    const history = useHistory();
    
    
    const [form, setForm] = useState({
        title: "",
        price: "",
        description: ""
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

        axios.post("http://localhost:8000/api/products/create", form)
            .then(res=>{
                console.log(res.data);

                if(res.data.results){
                history.push('/');
                }
                else{
                    setErrors(res.data.err.errors);
                }
                
            })
            .catch(err => console.log(err))

    }
    return(
        <div className="w-50 mx-auto p-3">       
            <form onSubmit={onSubmitHandler}>
                <div className="form-group">
                    <input name="title" placeholder="title" className="form-control" type="text" onChange={onChangeHandler} />
                    <span className="alert-danger">{errors.title && errors.title.message}</span>
                </div>

                <div className="form-group">
                    <input name="price" placeholder="price" className="form-control" type="number" onChange={onChangeHandler} />
                    <span className="alert-danger">{errors.price && errors.price.message}</span>
                </div>
                <div className="form-group">
                    <input name="description" placeholder="description" className="form-control" type="text" onChange={onChangeHandler} />
                    <span className="alert-danger">{errors.description && errors.description.message}</span>
                </div><br />

                <input type="submit" className="btn btn-primary" />
            </form>
        </div>
    )
}
export default Create;