import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../firebase/firebase.config";

 export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    // create user
    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // login with email and password
    const logIn = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const userInfo = {
        user, 
        createUser, 
        logIn
    }
    return (
        <AuthContext.Provider value= {userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;