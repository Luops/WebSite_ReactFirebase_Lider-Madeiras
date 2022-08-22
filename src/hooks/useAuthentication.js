import {db} from '../firebase/config'

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
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

    // Register
    const createUser = async (data) => {
        checkIfIsCancelled();

        setLoading(true);
        setError(null);

        try{

            const {user} = createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )
            await updateProfile(user, {
                displayName: data.displayName
            })
            setLoading(false);

            return user;

        }catch(error){

            console.log(error.message);
            console.log(typeof error.message);

            let systemErrorMessage;
            if(error.message.includes("password")){

                systemErrorMessage = "Senha precisa ter no mínimo 6 caracteres";

            }else if(error.message.includes("email-already-in-use")){
                systemErrorMessage = "E-mail já cadastrado";
            } else if(error.message){
                systemErrorMessage = "Erro ao cadastrar usuário";
            } else {

            }
            setLoading(false);
            setError(systemErrorMessage);

        };

        
    };  

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
        createUser,
        error,
        loading,
        logout,
        login,
    };

};