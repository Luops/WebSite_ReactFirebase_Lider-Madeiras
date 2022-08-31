import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { 
    doc,
    getDoc
} from "firebase/firestore";

//docCollection parâmetro onde saberemos resgatar os dados do db
export const useFetchDocument = (docCollection, id) => {
    const [document, setDocument] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    const [cancelled, setCancelled] = useState(false);


    useEffect(() => {

        async function loadDocument() {
            if(cancelled) return

            setLoading(true);

            try {
                
                const docRef = await doc(db, docCollection, id); //Pegar a referencia do documento a ser exibido
                const docSnap = await getDoc(docRef);

                setDocument(docSnap.data());

                setLoading(false);

            } catch (error) {
                console.log(error);
                setError(error.message);

                setLoading(true);
            }

            
        }

        loadDocument();

    },[docCollection, id, cancelled])


    //Não carregar os dados do componente quando "desmontar"
    useEffect(() => {
        return () => setCancelled(true);
    }, []);

    return {
        document, 
        loading,
        error
    };

}



