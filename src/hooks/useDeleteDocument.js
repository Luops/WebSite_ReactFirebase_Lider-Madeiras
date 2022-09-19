import { useState, useEffect, useReducer } from "react";
import {db} from '../firebase/config'
import { doc, deleteDoc} from "firebase/firestore";


const initialState = {
    loading: null,
    error: null
}

const deleteReducer = (state, action) => {
    switch(action.type){

        case "LOADING":
            return {loading: true, error: null}
        case "DELETEDD_DOC":
            return {loading: false, error: null}
        case "ERROR":
            return {loading: false, error: action.payload}
        default:
            return state;

    }
}

export const useDeleteDocument = (docColletion) => {
    const [response, dispatch] = useReducer(deleteReducer, initialState);

    const [cancelled, setCancelled] = useState(false);

    const checkCancelBeforeDispatch = (action) => {
        if(!cancelled){
            dispatch(action);
        }
    }

    //Deletar produto normal
    const deleteDocumentNoOff = async (id) => {
        checkCancelBeforeDispatch({
            type: "LOADING"
        })

        try{
            const deletedDocument = await deleteDoc(doc(db,docColletion, id)) //receber

            checkCancelBeforeDispatch({
                type: "DELETED_DOC",
                payload: deletedDocument,
            });

        }catch(error){

            checkCancelBeforeDispatch({
                type: "ERROR",
                payload: error.message,
            });

        }
    }


    //Deletar produto em promoção
    const deleteDocumentOff = async (id) => {
        checkCancelBeforeDispatch({
            type: "LOADING"
        })

        try{
            const deletedDocument = await deleteDoc(doc(db,docColletion, id)) //receber

            checkCancelBeforeDispatch({
                type: "DELETED_DOC",
                payload: deletedDocument,
            });

        }catch(error){

            checkCancelBeforeDispatch({
                type: "ERROR",
                payload: error.message,
            });

        }
    }

    //Deletar casa
    const deleteHouse = async (id) => {
        checkCancelBeforeDispatch({
            type: "LOADING"
        })

        try{
            const deletedDocument = await deleteDoc(doc(db,docColletion, id)) //receber

            checkCancelBeforeDispatch({
                type: "DELETED_DOC",
                payload: deletedDocument,
            });

        }catch(error){

            checkCancelBeforeDispatch({
                type: "ERROR",
                payload: error.message,
            });

        }
    }

    useEffect(() => {
        return () => setCancelled(true)
    },[]);

    return { 
        deleteDocumentNoOff,
        deleteDocumentOff, 
        deleteHouse,
        response 
    }

}