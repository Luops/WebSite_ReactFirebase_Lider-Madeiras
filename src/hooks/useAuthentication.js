import {db} from '../firebase/config'

import {
    getAuth,
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth';


import { useState, useEffect } from 'react';

export const useAuthentication = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    const [cancelled, setCancelled] = useState(false);

    const auth = getAuth();

    function checkIfIsCancelled() {
        if (cancelled) {
            return;
        };
    }


    //Logout
    const logout = () => {
        checkIfIsCancelled();

        signOut(auth);
    }

    //Login
    const login = async (data) => {
        checkIfIsCancelled();

        setLoading(true);
        setError(false);

        try{

            await signInWithEmailAndPassword(auth, data.email, data.password);
            setLoading(false);
        }catch(error){
            let systemErrorMessage;
            if(error.message.includes("user-not-found")){

                systemErrorMessage = "Usuário não encontrado";

            } else if(error.message.includes("wrong-password")){
                systemErrorMessage = "Senha incorreta";
            } else {
                systemErrorMessage = "Erro ao logar";
            }

            setError(systemErrorMessage);
            setLoading(false);

        } 
    }

    useEffect(() => {
        return () => setCancelled(true); 
    }, []);

    return {
        auth,
        error,
        loading,
        logout,
        login,
    };

};