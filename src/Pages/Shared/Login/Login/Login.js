import React, { useState } from 'react';
// import { useForm } from "react-hook-form";
import useAuth from '../../../../hooks/useAuth/useAuth';

const Login = () => {
    const [user, setUser] = useState({})
    const { googleSignIn } = useAuth()
    // const { register, handleSubmit } = useForm();
    // const onSubmit = data => {
    //     console.log(data);
    // }

    const googleHandler = () => {
        googleSignIn()
            .then(result => {
                setUser(result.user)
            })
    }
    return (
        <div className=" my-20 w-80 shadow-md bg-white p-8 mx-auto rounded">
            {/* <form onSubmit={handleSubmit(onSubmit)}>
                <input className="border mb-2" type="email" {...register("email")} /> <br />
                <input className="border" type="password" {...register("password")} /> <br />
                <input type="Login" /> <br />
            </form> */}
            <div>
                <button className="bg-red-700 text-white py-2 px-4 rounded" onClick={googleHandler}>
                    <span className="flex justify-center items-center">
                        <img className="w-12" src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" alt="" />
                        <span>Continue With Google</span>
                    </span>


                </button>
            </div>

        </div>
    );
};

export default Login;