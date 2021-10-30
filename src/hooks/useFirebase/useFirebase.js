import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuth from "../../Pages/Shared/Login/firebase/firebase.init";

initializeAuth()
const useFirebase = () => {
    const [user, setUser] = useState({})

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth()

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)

    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
        })
    }, [])
    return {
        user,
        googleSignIn
    }

};

export default useFirebase;