import React from 'react'
import { Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination, Autoplay, Mousewheel, Keyboard} from 'swiper';

//hooks
import { useNavigate, Link, Navigate } from 'react-router-dom'
import { useState,} from 'react'
import { 
  useFetchDocuments,
  useFetchDocumentsCategoryMadeiraBrutaEucalipto, 
  useFetchDocumentsCategoryMadeiraBrutaCedrinho, 
  useFetchDocumentsCategoryMadeiraBrutaPinus,
  useFetchDocumentsCategoryMadeiraBeneficiadaPinus,
  useFetchDocumentsCategoryMadeiraBeneficiadaEucalipto,
  useFetchDocumentsCategoryMadeiraBeneficiadaNobre,
  useFetchDocumentsCategoryAberturasEucalipto,
  useFetchDocumentsCategoryPregos,
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
import "swiper/css/bundle";



const Home = () => {
  const [query, setQuery] = useState("");
  const {documents: products, loading} = useFetchDocuments("products");
  const {documentsCategoryMadeiraBrutaEucalipto: productsCategoryMadeiraBrutaEucalipto} = useFetchDocumentsCategoryMadeiraBrutaEucalipto("products");
  const {documentsCategoryMadeiraBrutaCedrinho: productsCategoryMadeiraBrutaCedrinho} = useFetchDocumentsCategoryMadeiraBrutaCedrinho("products");
  const {documentsCategoryMadeiraBrutaPinus: productsCategoryMadeiraBrutaPinus} = useFetchDocumentsCategoryMadeiraBrutaPinus("products");
  const {documentsCategoryMadeiraBeneficiadaPinus: productsCategoryMadeiraBeneficiadaPinus} = useFetchDocumentsCategoryMadeiraBeneficiadaPinus("products");
  const {documentsCategoryMadeiraBeneficiadaEucalipto: productsCategoryMadeiraBeneficiadaEucalipto} = useFetchDocumentsCategoryMadeiraBeneficiadaEucalipto("products");
  const {documentsCategoryMadeiraBeneficiadaNobre: productsCategoryMadeiraBeneficiadaNobre} = useFetchDocumentsCategoryMadeiraBeneficiadaNobre("products");
  const {documentsCategoryAberturasEucalipto: productsCategoryAberturasEucalipto}  = useFetchDocumentsCategoryAberturasEucalipto("products");
  const {documentsCategoryPregos: productsCategoryPregos}  = useFetchDocumentsCategoryPregos("products");
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
        {/*<form onSubmit={handleSubmit} className={styles.search_form}>
          <input 
          type="text" 
          placeholder='Busque por categoria. Exemplo: Madeira bruta eucalipto'
          onChange={(e) => setQuery(e.target.value[0].toUpperCase()+e.target.value.substring(1))}
            />
          <button className='btn btn-dark'>Pesquisar</button>
            </form>*/}
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
        <h2 className={styles.categoryTitle}>Madeira Bruta de Eucalipto</h2>
        <div className={styles.slideCategorys}>
          <Swiper
            slidesPerView={4}
            spaceBetween={10}
            navigation={true}
            pagination={true}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              670: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              950: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            modules={[Pagination, Navigation]}
            className={styles.mySwiperCategorys}
            >
            <div className={styles.categoryCards}>
              {loading && <p>Carregando...</p>}
                {productsCategoryMadeiraBrutaEucalipto && productsCategoryMadeiraBrutaEucalipto.map((MadeiraBrutaEucalipto) => (
                  <SwiperSlide className={styles.swiperSlide}>
                    <ProductDetail key={MadeiraBrutaEucalipto.id} products={MadeiraBrutaEucalipto}/>
                  </SwiperSlide>
                ))}
                {productsCategoryMadeiraBrutaEucalipto && productsCategoryMadeiraBrutaEucalipto.length === 0 && (
                  <div className={styles.noproducts}>
                    <p>Não foram encontrados produtos</p>
                  </div>
                )}
              </div>
            </Swiper>
          </div>
        <hr />
      </div>
      
      <div className={styles.byCategory}>
        <h2 className={styles.categoryTitle}>Madeira Bruta de Cedrinho</h2>
        <div className={styles.slideCategorys}>
          <Swiper
            slidesPerView={4}
            spaceBetween={10}
            pagination={true}
            navigation={true}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              670: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              950: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            modules={[Pagination, Navigation]}
            className={styles.mySwiperCategorys}
          >
            <div className={styles.categoryCards}>
            {loading && <p>Carregando...</p>}
              {productsCategoryMadeiraBrutaCedrinho && productsCategoryMadeiraBrutaCedrinho.map((MadeiraBrutaCedrinho) => (
                <SwiperSlide className={styles.swiperSlide}>
                  <ProductDetail key={MadeiraBrutaCedrinho.id} products={MadeiraBrutaCedrinho}/>
                </SwiperSlide>
              ))}
              {productsCategoryMadeiraBrutaCedrinho && productsCategoryMadeiraBrutaCedrinho.length === 0 && (
                <div className={styles.noproducts}>
                  <p>Não foram encontrados produtos</p>
                </div>
              )}
            </div>
          </Swiper>
        </div>
        <hr />
      </div>

      <div className={styles.byCategory}>
        <h2 className={styles.categoryTitle}>Madeira Bruta de Pinus</h2>
        <div className={styles.slideCategorys}>
          <Swiper
            slidesPerView={4}
            spaceBetween={10}
            pagination={true}
            navigation={true}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              670: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              950: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            modules={[Pagination, Navigation]}
            className={styles.mySwiperCategorys}
          >
            <div className={styles.categoryCards}>
            {loading && <p>Carregando...</p>}
              {productsCategoryMadeiraBrutaPinus && productsCategoryMadeiraBrutaPinus.map((MadeiraBrutaPinus) => (
                <SwiperSlide className={styles.swiperSlide}>
                  <ProductDetail key={MadeiraBrutaPinus.id} products={MadeiraBrutaPinus}/>
                </SwiperSlide>
              ))}
              {productsCategoryMadeiraBrutaPinus && productsCategoryMadeiraBrutaPinus.length === 0 && (
                <div className={styles.noproducts}>
                  <p>Não foram encontrados produtos</p>
                </div>
              )}
            </div>
          </Swiper>
        </div>
        <hr />
      </div>

      <div className={styles.byCategory}>
        <h2 className={styles.categoryTitle}>Madeira Beneficiada de Pinus</h2>
        <div>
          <Swiper
            slidesPerView={4}
            spaceBetween={10}
            pagination={true}
            navigation={true}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              670: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              950: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            modules={[Pagination, Navigation]}
            className={styles.mySwiperCategorys}
          >
            <div className={styles.categoryCards}>
            {loading && <p>Carregando...</p>}
              {productsCategoryMadeiraBeneficiadaPinus && productsCategoryMadeiraBeneficiadaPinus.map((MadeiraBeneficiadaPinus) => (
                <SwiperSlide className={styles.swiperSlide}>
                  <ProductDetail key={MadeiraBeneficiadaPinus.id} products={MadeiraBeneficiadaPinus}/>
                </SwiperSlide>
              ))}
              {productsCategoryMadeiraBeneficiadaPinus && productsCategoryMadeiraBeneficiadaPinus.length === 0 && (
                <div className={styles.noproducts}>
                  <p>Não foram encontrados produtos</p>
                </div>
              )}
            </div>
          </Swiper>
        </div>
        <hr />
      </div>

      <div className={styles.byCategory}>
        <h2 className={styles.categoryTitle}>Madeira Beneficiada de Eucalipto</h2>
        <div className={styles.slideCategorys}>
          <Swiper
            slidesPerView={4}
            spaceBetween={10}
            pagination={true}
            navigation={true}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              670: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              950: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            modules={[Pagination, Navigation]}
            className={styles.mySwiperCategorys}
          >
            <div className={styles.categoryCards}>
              {loading && <p>Carregando...</p>}
              {productsCategoryMadeiraBeneficiadaEucalipto && productsCategoryMadeiraBeneficiadaEucalipto.map((MadeiraBeneficiadaEucalipto) => (
                <SwiperSlide className={styles.swiperSlide}>
                  <ProductDetail key={MadeiraBeneficiadaEucalipto.id} products={MadeiraBeneficiadaEucalipto}/>
                </SwiperSlide>
              ))}
                {productsCategoryMadeiraBeneficiadaEucalipto && productsCategoryMadeiraBeneficiadaEucalipto.length === 0 && (
                <div className={styles.noproducts}>
                  <p>Não foram encontrados produtos</p>
                </div>
              )}
            </div>
          </Swiper>
        </div>
      </div>

      <div className={styles.byCategory}>
        <h2 className={styles.categoryTitle}>Madeira Beneficiada Nobre</h2>
        <div className={styles.slideCategorys}>
          <Swiper
          slidesPerView={4}
          spaceBetween={10}
          pagination={true}
          navigation={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            670: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            950: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          modules={[Pagination, Navigation]}
          className={styles.mySwiperCategorys}
          >
            <div className={styles.categoryCards}>
            {loading && <p>Carregando...</p>}
              {productsCategoryMadeiraBeneficiadaNobre && productsCategoryMadeiraBeneficiadaNobre.map((MadeiraBeneficiadaNobre) => (
                <SwiperSlide className={styles.swiperSlide}>
                  <ProductDetail key={MadeiraBeneficiadaNobre.id} products={MadeiraBeneficiadaNobre}/>
                </SwiperSlide>
              ))}
              {productsCategoryMadeiraBeneficiadaNobre && productsCategoryMadeiraBeneficiadaNobre.length === 0 && (
                <div className={styles.noproducts}>
                  <p>Não foram encontrados produtos</p>
                </div>
              )}
            </div>
          </Swiper>
        </div>
        <hr />
      </div>

      <div className={styles.byCategory}>
        <h2 className={styles.categoryTitle}>Aberturas de Eucalipto</h2>
        <div className={styles.slideCategorys}>
          <Swiper
            slidesPerView={4}
            spaceBetween={10}
            pagination={true}
            navigation={true}
            modules={[Pagination, Navigation]}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              670: {
                slidesPerView: 2,
              },
              950: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              },
            }}
            className={styles.mySwiperCategorys}
          >
            <div className={styles.categoryCards}>
            {loading && <p>Carregando...</p>}
              {productsCategoryAberturasEucalipto && productsCategoryAberturasEucalipto.map((AberturasEucalipto) => (
                <SwiperSlide className={styles.swiperSlide}>
                  <ProductDetail key={AberturasEucalipto.id} products={AberturasEucalipto}/>
                </SwiperSlide>
              ))}
              {productsCategoryAberturasEucalipto && productsCategoryAberturasEucalipto.length === 0 && (
                <div className={styles.noproducts}>
                  <p>Não foram encontrados produtos</p>
                </div>
              )}
            </div>
          </Swiper>
        </div>
        <hr />
      </div>

      <div className={styles.byCategory}>
        <h2 className={styles.categoryTitle}>Pregos</h2>
        <div className={styles.slideCategorys}>
          <Swiper
            slidesPerView={3}
            spaceBetween={10}
            pagination={true}
            navigation={true}
            modules={[Pagination, Navigation]}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              670: {
                slidesPerView: 2,
              },
              950: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              },
            }}
            className={styles.mySwiperCategorys}
          >
            <div className={styles.categoryCards}>
            {loading && <p>Carregando...</p>}
              {productsCategoryPregos && productsCategoryPregos.map((Pregos) => (
                <SwiperSlide className={styles.swiperSlide}>
                  <ProductDetail key={Pregos.id} products={Pregos}/>
                </SwiperSlide>
              ))}
              {productsCategoryPregos && productsCategoryPregos.length === 0 && (
                <div className={styles.noproducts}>
                  <p>Não foram encontrados produtos</p>
                </div>
              )}
            </div>
          </Swiper>
        </div>
        <hr />
      </div>
      

    </main>
  )
}

export default Home