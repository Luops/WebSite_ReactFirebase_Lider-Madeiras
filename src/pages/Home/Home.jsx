import React from 'react'

//hooks
import { useNavigate, Link, Navigate } from 'react-router-dom'
import { useState } from 'react'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'


//Components
import ProductDetail from '../../components/ProductDetail'

//CSS
import styles from "./Home.module.css"



const Home = () => {
  const [query, setQuery] = useState("");
  const {documents: products, loading} = useFetchDocuments("products");

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
    <main className={styles.home}>
      <div className={styles.divPromocoes}>

        <div className={styles.tituloDaDiv}><h3>Aproveite as nossas promoções!</h3></div>

        <ul className={styles.promocoes}>
          
        </ul>
      </div>
      <div className={styles.divProdutos}>
        <h1>Veja os nosso produtos</h1>
        <form onSubmit={handleSubmit} className={styles.search_form}>
          <input 
          type="text" 
          placeholder='Busque por categoria...'
          onChange={(e) => setQuery(e.target.value[0].toUpperCase()+e.target.value.substring(1))}
          />
          <button className='btn btn-dark'>Pesquisar</button>
        </form>
        <div className={styles.list_products}>
          {loading && <p>Carregando...</p>}
          {products && products.map((product) => (
            <ProductDetail key={product.id} products={product}/>
          ))}
          {products && products.length === 0 && (
            <div className={styles.noproducts}>
              <p>Não foram encontrados produtos</p>
            </div>
          )}
        </div>
      </div>

    </main>
  )
}

export default Home