import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';

//hooks
import { useNavigate, Link, Navigate } from 'react-router-dom'
import { useState } from 'react'
import { 
  useFetchDocuments, 
  useFetchDocumentsCategoryJanela, 
  useFetchDocumentsCategoryTabua 
} from '../../hooks/useFetchDocuments'


//Components
import ProductDetail from '../../components/ProductDetail'
import ProductOffDetail from '../../components/ProductOffDetail'

//CSS
import styles from "./Home.module.css"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'



const Home = () => {
  const [query, setQuery] = useState("");
  const {documents: products, loading} = useFetchDocuments("products");
  const {documentsCategoryTabua: productsCategoryTabua} = useFetchDocumentsCategoryTabua("products");
  const {documentsCategoryJanela: productsCategoryJanela} = useFetchDocumentsCategoryJanela("products");
  const {documents: productsOff} = useFetchDocuments("productsOff");

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
        <div className={styles.tituloDaDiv}>
          <h2>Aproveite as nossas promoções!</h2>
        </div>

        <div className={styles.slide}>
          <Swiper 
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            speed={800}
            slidesPerView={1}
            pagination={{clickable: true}}
            autoplay={true}
            className={styles.mySwiper}
          >
            {loading && <p>Carregando...</p>}
            {productsOff && productsOff.map((productOff) =>(
              <SwiperSlide className={styles.swiperSlide}>
                <ProductOffDetail key={productOff.id} productsOff={productOff} className={styles.promocao}/>
              </SwiperSlide>
              
            ))}
            {productsOff && productsOff.length === 0 && (
                <div className={styles.noproducts}>
                  <p>Não foram encontrados produtos</p>
                </div>
              )}
          </Swiper>
        </div>
      </div>
      
      <div className={styles.divProdutos}>
        <form onSubmit={handleSubmit} className={styles.search_form}>
          <input 
          type="text" 
          placeholder='Busque por categoria... Exemplo: Forro'
          onChange={(e) => setQuery(e.target.value[0].toUpperCase()+e.target.value.substring(1))}
          />
          <button className='btn btn-dark'>Pesquisar</button>
        </form>
        <h2 className={styles.lastFiveProducts}>Últimos produtos adicionados!</h2>
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

      <div className={styles.byCategory}>
        <h2 className={styles.categoryTitle}>Tábuas</h2>
        <div className={styles.categoryCards}>
          {loading && <p>Carregando...</p>}
            {productsCategoryTabua && productsCategoryTabua.map((Tabua) => (
              <ProductDetail key={Tabua.id} products={Tabua}/>
            ))}
            {productsCategoryTabua && productsCategoryTabua.length === 0 && (
              <div className={styles.noproducts}>
                <p>Não foram encontrados produtos</p>
              </div>
            )}
          </div>
        <hr />
      </div>
      
      <div className={styles.byCategory}>
        <h2 className={styles.categoryTitle}>Janelas</h2>
        <div className={styles.categoryCards}>
          {loading && <p>Carregando...</p>}
            {productsCategoryJanela && productsCategoryJanela.map((Janela) => (
              <ProductDetail key={Janela.id} products={Janela}/>
            ))}
            {productsCategoryTabua && productsCategoryTabua.length === 0 && (
              <div className={styles.noproducts}>
                <p>Não foram encontrados produtos</p>
              </div>
            )}
          </div>
        <hr />
      </div>
      

    </main>
  )
}

export default Home