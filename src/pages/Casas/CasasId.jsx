import React from 'react'

//hooks
import { Link, useParams } from 'react-router-dom'
import { useFetchDocument } from '../../hooks/useFetchDocument'

//CSS
import styles from './CasasId.module.css'

const CasasId = () => {
  const { id } = useParams();
  const { document: casa, loading } = useFetchDocument("casas", id); //Carregar o documento que vem do db(products, id) e renomeia para product
  

  return (
    <div className={styles.containerFather}>
      {loading && <p>Carregando produto...</p>}
        {casa && (
          <p>{casa.title}</p>
        )}
    </div>
  )
}

export default CasasId