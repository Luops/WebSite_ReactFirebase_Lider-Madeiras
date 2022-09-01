import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { 
    collection, 
    query, 
    orderBy, 
    onSnapshot, 
    where,
    limit,
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

            //Variavel que pega somente uma coisa: const byCategoryByForro = query(collectionRef, where("title", "==", "Janela de madeira"));
            //Após declarar deve-se inseri-la após o await onSnapShot, no lugar do querycomplex
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
                    queryComplex = await query(collectionRef, orderBy("createdAt", "desc"), limit(5));
                }

                await onSnapshot(queryComplex, (querySnapshot) => {
                    setDocuments(
                        querySnapshot.docs.map((doc) => ({
                            id: doc.id,
                            ...doc.data()
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



//Puxar somente Tábua
export const useFetchDocumentsCategoryTabua = (docCollection, uid = null) => {
    const [documentsCategoryTabua, setDocumentsCategoryTabua] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    const [cancelled, setCancelled] = useState(false);
    
    

    useEffect(() => {

               async function loadData() {
            if(cancelled) return

            setLoading(true);

            const collectionRef = await collection(db, docCollection);
            
            //Variavel que pega somente uma coisa: const byCategoryByForro = query(collectionRef, where("title", "==", "Janela de madeira"));
            //Após declarar deve-se inseri-la após o await onSnapShot, no lugar do querycomplex

            try {

                let byCategoryByTabua = query(collectionRef, where("category", "==", "Tábua"));
                
                await onSnapshot(byCategoryByTabua, (querySnapshot) => {
                    setDocumentsCategoryTabua(
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

    },[docCollection, uid, cancelled])


    //Não carregar os dados do componente quando "desmontar"
    useEffect(() => {
        return () => setCancelled(true);
    }, []);

    return {
        documentsCategoryTabua,
        loading,
        error
    };

}

//Puxar somente Janela
export const useFetchDocumentsCategoryJanela = (docCollection, uid = null) => {
    const [documentsCategoryJanela, setDocumentsCategoryJanela] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    const [cancelled, setCancelled] = useState(false);
    
    

    useEffect(() => {

               async function loadData() {
            if(cancelled) return

            setLoading(true);

            const collectionRef = await collection(db, docCollection);
            
            //Variavel que pega somente uma coisa: const byCategoryByForro = query(collectionRef, where("title", "==", "Janela de madeira"));
            //Após declarar deve-se inseri-la após o await onSnapShot, no lugar do querycomplex

            try {

                let byCategoryByTabua = query(collectionRef, where("category", "==", "Janela"));
                
                await onSnapshot(byCategoryByTabua, (querySnapshot) => {
                    setDocumentsCategoryJanela(
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

    },[docCollection, uid, cancelled])


    //Não carregar os dados do componente quando "desmontar"
    useEffect(() => {
        return () => setCancelled(true);
    }, []);

    return {
        documentsCategoryJanela,
        loading,
        error
    };

}

