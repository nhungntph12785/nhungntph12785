import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, Redirect } from 'react-router-dom';
import { signin } from '../../api/authAPI';
import { isAuthenticated, authenticate } from '../../auth';
import jwt from 'jsonwebtoken';

const Signin = () => {
    const { id } = isAuthenticated();
    console.log(id);
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const onSubmit = async (user) => {
        try {
            const { data } = await signin(user);
            authenticate(data.user);
            setSuccess(true);
            // e.target.reset();
            console.log(data);
        } catch (error) {
            //setError(error.response.data)
        }
    }
    const redirectUser = () => {
        if (success) {
            if (id == 2) {
                return <Redirect to="/admin" />
            } else {
                return <Redirect to="/" />
            }
        }
    }
    return (
        <div className="col-6 mx-auto mt-2">
            {redirectUser()}
            <h2> Đăng nhập</h2>
            <hr />
            {error && <div className="alert alert-danger">{error}</div>}
            <form action="" onSubmit={handleSubmit(onSubmit)} className="">
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" {...register('email')} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" {...register('password')} />
                </div>
                <button type="submit" className="btn btn-primary btn-lg btn-block">Đăng nhập</button>
            </form>
        </div>
    )
}

export default Signin
