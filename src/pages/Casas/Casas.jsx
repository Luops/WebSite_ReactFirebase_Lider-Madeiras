

//hooks
import { useState,} from 'react'
import { useNavigate, Link, Navigate } from 'react-router-dom'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'

//Components
import CasasDetail from '../../components/CasasDetail'

//CSS
import styles from './Casas.module.css'

const Casas = () => {
  const [query, setQuery] = useState("");
  const {documents: casas, loading} = useFetchDocuments("casas");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    //Caso contenha um valor na busca, envie para o que pesquisou.
    if(query){
      return navigate(`/search?q=${query}`);
    }else{

    }
  }
  return (
    <div>
        <div className={styles.list_products}>
          {loading && <p>Carregando...</p>}
          {casas && casas.map((casas) => (
            <CasasDetail key={casas.id} casas={casas}/>
          ))}
          {casas && casas.length === 0 && (
            <div className={styles.noproducts}>
              <p>Não foram encontrados produtos</p>
            </div>
          )}
        </div>
    </div>
  )
}

export default Casas