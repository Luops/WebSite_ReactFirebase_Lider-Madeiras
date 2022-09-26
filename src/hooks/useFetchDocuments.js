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

//Puxar somente Madeira Bruta de Eucalipto
export const useFetchDocumentsCategoryMadeiraBrutaEucalipto = (docCollection, uid = null) => {
    const [documentsCategoryMadeiraBrutaEucalipto, setDocumentsCategoryMadeiraBrutaEucalipto] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    const [cancelled, setCancelled] = useState(false);
    
    

    useEffect(() => {

               async function loadData() {
            if(cancelled) return

            setLoading(true);

            const collectionRef = await collection(db, docCollection);
            
            //Variavel que pega somente uma coisa: const byCategoryByMadeiraBrutaEucalipto = query(collectionRef, where("title", "==", "Janela de madeira"));
            //Após declarar deve-se inseri-la após o await onSnapShot, no lugar do querycomplex

            try {

                let byCategoryByMadeiraBrutaEucalipto = query(collectionRef, where("category", "==", "Madeira bruta de eucalipto"));
                
                await onSnapshot(byCategoryByMadeiraBrutaEucalipto, (querySnapshot) => {
                    setDocumentsCategoryMadeiraBrutaEucalipto(
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
        documentsCategoryMadeiraBrutaEucalipto,
        loading,
        error
    };

}

//Puxar somente Madeira Bruta de Cedrinho
export const useFetchDocumentsCategoryMadeiraBrutaCedrinho = (docCollection, uid = null) => {
    const [documentsCategoryMadeiraBrutaCedrinho, setDocumentsCategoryMadeiraBrutaCedrinho] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    const [cancelled, setCancelled] = useState(false);
    
    

    useEffect(() => {

               async function loadData() {
            if(cancelled) return

            setLoading(true);

            const collectionRef = await collection(db, docCollection);
            
            //Variavel que pega somente uma coisa: const byCategoryByMadeiraBrutaCedrinho = query(collectionRef, where("title", "==", "Janela de madeira"));
            //Após declarar deve-se inseri-la após o await onSnapShot, no lugar do querycomplex

            try {

                let byCategoryByMadeiraBrutaCedrinho = query(collectionRef, where("category", "==", "Madeira bruta de cedrinho"));
                
                await onSnapshot(byCategoryByMadeiraBrutaCedrinho, (querySnapshot) => {
                    setDocumentsCategoryMadeiraBrutaCedrinho(
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
        documentsCategoryMadeiraBrutaCedrinho,
        loading,
        error
    };

}

//Puxar somente Madeira Bruta de Pinus
export const useFetchDocumentsCategoryMadeiraBrutaPinus = (docCollection, uid = null) => {
    const [documentsCategoryMadeiraBrutaPinus, setDocumentsCategoryMadeiraBrutaPinus] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    const [cancelled, setCancelled] = useState(false);
    
    

    useEffect(() => {

               async function loadData() {
            if(cancelled) return

            setLoading(true);

            const collectionRef = await collection(db, docCollection);
            
            //Variavel que pega somente uma coisa: const byCategoryByMadeiraBrutaPinus = query(collectionRef, where("title", "==", "Janela de madeira"));
            //Após declarar deve-se inseri-la após o await onSnapShot, no lugar do querycomplex

            try {

                let byCategoryByMadeiraBrutaPinus = query(collectionRef, where("category", "==", "Madeira bruta de pinus"));
                
                await onSnapshot(byCategoryByMadeiraBrutaPinus, (querySnapshot) => {
                    setDocumentsCategoryMadeiraBrutaPinus(
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
        documentsCategoryMadeiraBrutaPinus,
        loading,
        error
    };

}

//Puxar somente Madeira Beneficiada de Pinus
export const useFetchDocumentsCategoryMadeiraBeneficiadaPinus = (docCollection, uid = null) => {
    const [documentsCategoryMadeiraBeneficiadaPinus, setDocumentsCategoryMadeiraBeneficiadaPinus] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    const [cancelled, setCancelled] = useState(false);
    
    

    useEffect(() => {

               async function loadData() {
            if(cancelled) return

            setLoading(true);

            const collectionRef = await collection(db, docCollection);
            
            //Variavel que pega somente uma coisa: const byCategoryByMadeiraBeneficiadaPinus = query(collectionRef, where("title", "==", "Janela de madeira"));
            //Após declarar deve-se inseri-la após o await onSnapShot, no lugar do querycomplex

            try {

                let byCategoryByMadeiraBeneficiadaPinus = query(collectionRef, where("category", "==", "Madeira beneficiada de pinus"));
                
                await onSnapshot(byCategoryByMadeiraBeneficiadaPinus, (querySnapshot) => {
                    setDocumentsCategoryMadeiraBeneficiadaPinus(
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
        documentsCategoryMadeiraBeneficiadaPinus,
        loading,
        error
    };

}

//Puxar somente Madeira Beneficiada de Eucalipto
export const useFetchDocumentsCategoryMadeiraBeneficiadaEucalipto = (docCollection, uid = null) => {
    const [documentsCategoryMadeiraBeneficiadaEucalipto, setDocumentsCategoryMadeiraBeneficiadaEucalipto] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    const [cancelled, setCancelled] = useState(false);
    
    

    useEffect(() => {

               async function loadData() {
            if(cancelled) return

            setLoading(true);

            const collectionRef = await collection(db, docCollection);
            
            //Variavel que pega somente uma coisa: const byCategoryByMadeiraBeneficiadaEucalipto = query(collectionRef, where("title", "==", "Janela de madeira"));
            //Após declarar deve-se inseri-la após o await onSnapShot, no lugar do querycomplex

            try {

                let byCategoryByMadeiraBeneficiadaEucalipto= query(collectionRef, where("category", "==", "Madeira beneficiada de eucalipto"));
                
                await onSnapshot(byCategoryByMadeiraBeneficiadaEucalipto, (querySnapshot) => {
                    setDocumentsCategoryMadeiraBeneficiadaEucalipto(
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
        documentsCategoryMadeiraBeneficiadaEucalipto,
        loading,
        error
    };

}

//Puxar somente Madeira Beneficiada Nobre
export const useFetchDocumentsCategoryMadeiraBeneficiadaNobre = (docCollection, uid = null) => {
    const [documentsCategoryMadeiraBeneficiadaNobre, setDocumentsCategoryMadeiraBeneficiadaNobre] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    const [cancelled, setCancelled] = useState(false);
    
    

    useEffect(() => {

               async function loadData() {
            if(cancelled) return

            setLoading(true);

            const collectionRef = await collection(db, docCollection);
            
            //Variavel que pega somente uma coisa: const byCategoryByMadeiraBeneficiadaNobre = query(collectionRef, where("title", "==", "Janela de madeira"));
            //Após declarar deve-se inseri-la após o await onSnapShot, no lugar do querycomplex

            try {

                let byCategoryByMadeiraBeneficiadaNobre= query(collectionRef, where("category", "==", "Madeira beneficiada nobre"));
                
                await onSnapshot(byCategoryByMadeiraBeneficiadaNobre, (querySnapshot) => {
                    setDocumentsCategoryMadeiraBeneficiadaNobre(
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
        documentsCategoryMadeiraBeneficiadaNobre,
        loading,
        error
    };

}

//Puxar somente Aberturas de Eucalipto
export const useFetchDocumentsCategoryAberturasEucalipto = (docCollection, uid = null) => {
    const [documentsCategoryAberturasEucalipto, setDocumentsCategoryAberturasEucalipto] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    const [cancelled, setCancelled] = useState(false);
    
    

    useEffect(() => {

               async function loadData() {
            if(cancelled) return

            setLoading(true);

            const collectionRef = await collection(db, docCollection);
            
            //Variavel que pega somente uma coisa: const byCategoryByAberturasEucalipto = query(collectionRef, where("title", "==", "Janela de madeira"));
            //Após declarar deve-se inseri-la após o await onSnapShot, no lugar do querycomplex

            try {

                let byCategoryByAberturasEucalipto= query(collectionRef, where("category", "==", "Aberturas de eucalipto"));
                
                await onSnapshot(byCategoryByAberturasEucalipto, (querySnapshot) => {
                    setDocumentsCategoryAberturasEucalipto(
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
        documentsCategoryAberturasEucalipto,
        loading,
        error
    };

}

//Puxar somente Pregos
export const useFetchDocumentsCategoryPregos = (docCollection, uid = null) => {
    const [documentsCategoryPregos, setDocumentsCategoryPregos] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    const [cancelled, setCancelled] = useState(false);
    
    

    useEffect(() => {

               async function loadData() {
            if(cancelled) return

            setLoading(true);

            const collectionRef = await collection(db, docCollection);
            
            //Variavel que pega somente uma coisa: const byCategoryByPregos = query(collectionRef, where("title", "==", "Janela de madeira"));
            //Após declarar deve-se inseri-la após o await onSnapShot, no lugar do querycomplex

            try {

                let byCategoryByPregos= query(collectionRef, where("category", "==", "Pregos"));
                
                await onSnapshot(byCategoryByPregos, (querySnapshot) => {
                    setDocumentsCategoryPregos(
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
        documentsCategoryPregos,
        loading,
        error
    };

}

//Puxar somente Casas de alvenaria
export const useFetchDocumentsAlvenaria = (docCollection, uid = null) => {
    const [documentsAlvenaria, setDocumentsAlvenaria] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    const [cancelled, setCancelled] = useState(false);
    
    

    useEffect(() => {

               async function loadData() {
            if(cancelled) return

            setLoading(true);

            const collectionRef = await collection(db, docCollection);
            
            //Variavel que pega somente uma coisa: const byAlvenaria = query(collectionRef, where("title", "==", "Janela de madeira"));
            //Após declarar deve-se inseri-la após o await onSnapShot, no lugar do querycomplex

            try {

                let byAlvenaria= query(collectionRef, where("category", "==", "Casa de alvenaria"));
                
                await onSnapshot(byAlvenaria, (querySnapshot) => {
                    setDocumentsAlvenaria(
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
        documentsAlvenaria,
        loading,
        error
    };

}

//Puxar somente Casas de Madeira
export const useFetchDocumentsMadeira = (docCollection, uid = null) => {
    const [documentsMadeira, setDocumentsMadeira] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    const [cancelled, setCancelled] = useState(false);
    
    

    useEffect(() => {

               async function loadData() {
            if(cancelled) return

            setLoading(true);

            const collectionRef = await collection(db, docCollection);
            
            //Variavel que pega somente uma coisa: const byMadeira = query(collectionRef, where("title", "==", "Janela de madeira"));
            //Após declarar deve-se inseri-la após o await onSnapShot, no lugar do querycomplex

            try {

                let byMadeira= query(collectionRef, where("category", "==", "Casa de madeira"));
                
                await onSnapshot(byMadeira, (querySnapshot) => {
                    setDocumentsMadeira(
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
        documentsMadeira,
        loading,
        error
    };

}


