import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { 
    collection, 
    query, 
    orderBy, 
    onSnapshot, 
    where,
} from "firebase/firestore";

export const useFetchDocuments = (docCollection, search = null, uid = null) => {
    const [documents, setDocuments] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    const [cancelled, setCancelled] = useState(false);


    useEffect(() => {

        async function loadData() {
            if(cancelled) return

            setLoading(true);

            const collectionRef = await collection(db, docCollection);

            try {
                let queryComplex 

                
                //dashboard

                //busca
                //Verificar se há uma busca pelo usuário
                if (search) {
                    queryComplex = await query(
                        collectionRef, 
                        where('category','==', search), 
                        orderBy('createdAt', 'desc')
                    );
                } else if(uid){
                    queryComplex = await query(
                        collectionRef, 
                        where('uid','==', uid), 
                        orderBy('createdAt', 'desc')
                    );
                } else {
                    queryComplex = await query(collectionRef, orderBy("createdAt", "desc"));
                }

                await onSnapshot(queryComplex, (querySnapshot) => {
                    setDocuments(
                        querySnapshot.docs.map((doc) => ({
                            id: doc.id,
                            ...doc.data(),
                        }))
                    )
                })
                setLoading(false);
            } catch (error) {
                console.log(error);
                setError(error.message);

                setLoading(false);
            }
        }

        loadData();

    },[docCollection, search, uid, cancelled])


    //Não carregar os dados do componente quando "desmontar"
    useEffect(() => {
        return () => setCancelled(true);
    }, []);

    return {
        documents, 
        loading,
        error
    };

}



//Tentativa
export const useFetchDocumentsCategory = (docCollection, search = null, category = null) => {
    const [documentsCategory, setDocumentsCategory] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    const [cancelled, setCancelled] = useState(false);


    useEffect(() => {

        async function loadData() {
            if(cancelled) return

            setLoading(true);

            const collectionRef = await collection(db, docCollection);

            try {
                let queryComplex 

                
                //dashboard

                //busca
                //Verificar se há uma busca pelo usuário
                if (search) {
                    queryComplex = await query(
                        collectionRef, 
                        where('category','==', search), 
                        orderBy('createdAt', 'desc')
                    );
                } else if(category){
                    queryComplex = await query(
                        collectionRef, 
                        where('category','==', category), 
                        orderBy('createdAt', 'desc')
                    );
                } else {
                    queryComplex = await query(collectionRef, orderBy("createdAt", "desc"));
                }

                await onSnapshot(queryComplex, (querySnapshot) => {
                    setDocumentsCategory(
                        querySnapshot.docs.map((doc) => ({
                            category: doc.category,
                            ...doc.data(),
                        }))
                    )
                })
                setLoading(false);
            } catch (error) {
                console.log(error);
                setError(error.message);

                setLoading(false);
            }
        }

        loadData();

    },[docCollection, search, category, cancelled])


    //Não carregar os dados do componente quando "desmontar"
    useEffect(() => {
        return () => setCancelled(true);
    }, []);

    return {
        documentsCategory, 
        loading,
        error
    };

}

