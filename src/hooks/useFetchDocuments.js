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

//Puxar somente Parede
export const useFetchDocumentsCategoryParede = (docCollection, uid = null) => {
    const [documentsCategoryParede, setDocumentsCategoryParede] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    const [cancelled, setCancelled] = useState(false);
    
    

    useEffect(() => {

               async function loadData() {
            if(cancelled) return

            setLoading(true);

            const collectionRef = await collection(db, docCollection);
            
            //Variavel que pega somente uma coisa: const byCategoryByParede = query(collectionRef, where("title", "==", "Janela de madeira"));
            //Após declarar deve-se inseri-la após o await onSnapShot, no lugar do querycomplex

            try {

                let byCategoryByParede= query(collectionRef, where("category", "==", "Parede"));
                
                await onSnapshot(byCategoryByParede, (querySnapshot) => {
                    setDocumentsCategoryParede(
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
        documentsCategoryParede,
        loading,
        error
    };

}

//Puxar somente Forro
export const useFetchDocumentsCategoryForro = (docCollection, uid = null) => {
    const [documentsCategoryForro, setDocumentsCategoryForro] = useState(null);
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

                let byCategoryByForro= query(collectionRef, where("category", "==", "Forro"));
                
                await onSnapshot(byCategoryByForro, (querySnapshot) => {
                    setDocumentsCategoryForro(
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
        documentsCategoryForro,
        loading,
        error
    };

}

//Puxar somente Assoalho
export const useFetchDocumentsCategoryAssoalho = (docCollection, uid = null) => {
    const [documentsCategoryAssoalho, setDocumentsCategoryAssoalho] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    const [cancelled, setCancelled] = useState(false);
    
    

    useEffect(() => {

               async function loadData() {
            if(cancelled) return

            setLoading(true);

            const collectionRef = await collection(db, docCollection);
            
            //Variavel que pega somente uma coisa: const byCategoryByAssoalho = query(collectionRef, where("title", "==", "Janela de madeira"));
            //Após declarar deve-se inseri-la após o await onSnapShot, no lugar do querycomplex

            try {

                let byCategoryByAssoalho= query(collectionRef, where("category", "==", "Assoalho"));
                
                await onSnapshot(byCategoryByAssoalho, (querySnapshot) => {
                    setDocumentsCategoryAssoalho(
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
        documentsCategoryAssoalho,
        loading,
        error
    };

}

//Puxar somente Deck
export const useFetchDocumentsCategoryDeck = (docCollection, uid = null) => {
    const [documentsCategoryDeck, setDocumentsCategoryDeck] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    const [cancelled, setCancelled] = useState(false);
    
    

    useEffect(() => {

               async function loadData() {
            if(cancelled) return

            setLoading(true);

            const collectionRef = await collection(db, docCollection);
            
            //Variavel que pega somente uma coisa: const byCategoryByDeck = query(collectionRef, where("title", "==", "Janela de madeira"));
            //Após declarar deve-se inseri-la após o await onSnapShot, no lugar do querycomplex

            try {

                let byCategoryByDeck= query(collectionRef, where("category", "==", "Deck"));
                
                await onSnapshot(byCategoryByDeck, (querySnapshot) => {
                    setDocumentsCategoryDeck(
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
        documentsCategoryDeck,
        loading,
        error
    };

}

//Puxar somente MeiaCana
export const useFetchDocumentsCategoryMeiaCana = (docCollection, uid = null) => {
    const [documentsCategoryMeiaCana, setDocumentsCategoryMeiaCana] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    const [cancelled, setCancelled] = useState(false);
    
    

    useEffect(() => {

               async function loadData() {
            if(cancelled) return

            setLoading(true);

            const collectionRef = await collection(db, docCollection);
            
            //Variavel que pega somente uma coisa: const byCategoryByMeiaCana = query(collectionRef, where("title", "==", "Janela de madeira"));
            //Após declarar deve-se inseri-la após o await onSnapShot, no lugar do querycomplex

            try {

                let byCategoryByMeiaCana= query(collectionRef, where("category", "==", "Meia cana"));
                
                await onSnapshot(byCategoryByMeiaCana, (querySnapshot) => {
                    setDocumentsCategoryMeiaCana(
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
        documentsCategoryMeiaCana,
        loading,
        error
    };

}

//Puxar somente Rodape
export const useFetchDocumentsCategoryRodape = (docCollection, uid = null) => {
    const [documentsCategoryRodape, setDocumentsCategoryRodape] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    const [cancelled, setCancelled] = useState(false);
    
    

    useEffect(() => {

               async function loadData() {
            if(cancelled) return

            setLoading(true);

            const collectionRef = await collection(db, docCollection);
            
            //Variavel que pega somente uma coisa: const byCategoryByMeiaRodape = query(collectionRef, where("title", "==", "Janela de madeira"));
            //Após declarar deve-se inseri-la após o await onSnapShot, no lugar do querycomplex

            try {

                let byCategoryByRodape= query(collectionRef, where("category", "==", "Rodape"));
                
                await onSnapshot(byCategoryByRodape, (querySnapshot) => {
                    setDocumentsCategoryRodape(
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
        documentsCategoryRodape,
        loading,
        error
    };

}

//Puxar somente Vista5cm
export const useFetchDocumentsCategoryVista5cm = (docCollection, uid = null) => {
    const [documentsCategoryVista5cm, setDocumentsCategoryVista5cm] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    const [cancelled, setCancelled] = useState(false);
    
    

    useEffect(() => {

               async function loadData() {
            if(cancelled) return

            setLoading(true);

            const collectionRef = await collection(db, docCollection);
            
            //Variavel que pega somente uma coisa: const byCategoryByVista5cm = query(collectionRef, where("title", "==", "Janela de madeira"));
            //Após declarar deve-se inseri-la após o await onSnapShot, no lugar do querycomplex

            try {

                let byCategoryByVista5cm= query(collectionRef, where("category", "==", "Vista de 5cm"));
                
                await onSnapshot(byCategoryByVista5cm, (querySnapshot) => {
                    setDocumentsCategoryVista5cm(
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
        documentsCategoryVista5cm,
        loading,
        error
    };

}

//Puxar somente Vista7cm
export const useFetchDocumentsCategoryVista7cm = (docCollection, uid = null) => {
    const [documentsCategoryVista7cm, setDocumentsCategoryVista7cm] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    const [cancelled, setCancelled] = useState(false);
    
    

    useEffect(() => {

               async function loadData() {
            if(cancelled) return

            setLoading(true);

            const collectionRef = await collection(db, docCollection);
            
            //Variavel que pega somente uma coisa: const byCategoryByVista7cm = query(collectionRef, where("title", "==", "Janela de madeira"));
            //Após declarar deve-se inseri-la após o await onSnapShot, no lugar do querycomplex

            try {

                let byCategoryByVista7cm= query(collectionRef, where("category", "==", "Vista de 7cm"));
                
                await onSnapshot(byCategoryByVista7cm, (querySnapshot) => {
                    setDocumentsCategoryVista7cm(
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
        documentsCategoryVista7cm,
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

//Puxar somente Kit casa
export const useFetchDocumentsCategoryKitCasa = (docCollection, uid = null) => {
    const [documentsCategoryKitCasa, setDocumentsCategoryKitCasa] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    const [cancelled, setCancelled] = useState(false);
    
    

    useEffect(() => {

               async function loadData() {
            if(cancelled) return

            setLoading(true);

            const collectionRef = await collection(db, docCollection);
            
            //Variavel que pega somente uma coisa: const byKitCasa = query(collectionRef, where("title", "==", "Janela de madeira"));
            //Após declarar deve-se inseri-la após o await onSnapShot, no lugar do querycomplex

            try {

                let byKitCasa= query(collectionRef, where("category", "==", "Kit casa"));
                
                await onSnapshot(byKitCasa, (querySnapshot) => {
                    setDocumentsCategoryKitCasa(
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
        documentsCategoryKitCasa,
        loading,
        error
    };

}


