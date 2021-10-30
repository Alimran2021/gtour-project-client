import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../../hooks/useAuth/useAuth';

const Login = () => {
    const [user, setUser] = useState({})
    const { googleSignIn } = useAuth()
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
    }

    const googleHandler = () => {
        googleSignIn()
            .then(result => {
                setUser(result.user)
            })
    }
    return (
        <div className="border">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="email" {...register("email")} /> <br />
                <input type="password" {...register("password")} /> <br />
                <input type="Login" /> <br />
            </form>
            <button onClick={googleHandler}>Goole Sign in</button>
        </div>
    );
};

export default Login;