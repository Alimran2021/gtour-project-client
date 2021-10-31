
import { useLocation, useHistory } from 'react-router';
import useAuth from '../../../../hooks/useAuth/useAuth';

// login form here

const Login = () => {
    const { googleSignIn } = useAuth()
    const location = useLocation()
    const history = useHistory()
    const location_url = location?.state?.from || '/home'
    const googleHandler = () => {
        googleSignIn()
            .then(result => {
                history.push(location_url)
            })
    }
    return (
        <div className=" my-20 w-80 shadow-md bg-white p-8 mx-auto rounded">
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