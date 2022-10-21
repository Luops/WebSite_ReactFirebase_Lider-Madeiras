import React from 'react'
import { Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination, Autoplay} from 'swiper';

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
  useFetchDocumentsCategoryParede,
  useFetchDocumentsCategoryForro,
  useFetchDocumentsCategoryAssoalho,
  useFetchDocumentsCategoryDeck,
  useFetchDocumentsCategoryMeiaCana,
  useFetchDocumentsCategoryRodape,
  useFetchDocumentsCategoryVista5cm,
  useFetchDocumentsCategoryVista7cm,
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
  const {documentsCategoryParede: productsCategoryParede}  = useFetchDocumentsCategoryParede("products");
  const {documentsCategoryForro: productsCategoryForro}  = useFetchDocumentsCategoryForro("products");
  const {documentsCategoryAssoalho: productsCategoryAssoalho}  = useFetchDocumentsCategoryAssoalho("products");
  const {documentsCategoryDeck: productsCategoryDeck}  = useFetchDocumentsCategoryDeck("products");
  const {documentsCategoryMeiaCana: productsCategoryMeiaCana}  = useFetchDocumentsCategoryMeiaCana("products");
  const {documentsCategoryRodape: productsCategoryRodape}  = useFetchDocumentsCategoryRodape("products");
  const {documentsCategoryVista5cm: productsCategoryVista5cm}  = useFetchDocumentsCategoryVista5cm("products");
  const {documentsCategoryVista7cm: productsCategoryVista7cm}  = useFetchDocumentsCategoryVista7cm("products");
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
          style={{
            "--swiper-navigation-color": "white",
            "--swiper-navigation-size": "45px",
          }}
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
        <h2 className={styles.lastFiveProducts}>
          Últimos produtos adicionados!
        </h2>
        
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
           style={{
            "--swiper-navigation-color": "black",
            "--swiper-navigation-size": "30px",
          }}
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
            style={{
              "--swiper-navigation-color": "black",
              "--swiper-navigation-size": "30px",
            }}
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
            style={{
              "--swiper-navigation-color": "black",
              "--swiper-navigation-size": "30px",
            }}
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
            style={{
              "--swiper-navigation-color": "black",
              "--swiper-navigation-size": "30px",
            }}
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
            style={{
              "--swiper-navigation-color": "black",
              "--swiper-navigation-size": "30px",
            }}
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
            style={{
              "--swiper-navigation-color": "black",
              "--swiper-navigation-size": "30px",
            }}
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
            style={{
              "--swiper-navigation-color": "black",
              "--swiper-navigation-size": "30px",
            }}
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
        <h2 className={styles.categoryTitle}>Paredes</h2>
        <div className={styles.slideCategorys}>
          <Swiper
            style={{
              "--swiper-navigation-color": "black",
              "--swiper-navigation-size": "30px",
            }}
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
              {productsCategoryParede && productsCategoryParede.map((Parede) => (
                <SwiperSlide className={styles.swiperSlide}>
                  <ProductDetail key={Parede.id} products={Parede}/>
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
        <h2 className={styles.categoryTitle}>Forros</h2>
        <div className={styles.slideCategorys}>
          <Swiper
            style={{
              "--swiper-navigation-color": "black",
              "--swiper-navigation-size": "30px",
            }}
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
              {productsCategoryForro && productsCategoryForro.map((Forro) => (
                <SwiperSlide className={styles.swiperSlide}>
                  <ProductDetail key={Forro.id} products={Forro}/>
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
        <h2 className={styles.categoryTitle}>Assoalhos</h2>
        <div className={styles.slideCategorys}>
          <Swiper
            style={{
              "--swiper-navigation-color": "black",
              "--swiper-navigation-size": "30px",
            }}
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
              {productsCategoryAssoalho && productsCategoryAssoalho.map((Assoalho) => (
                <SwiperSlide className={styles.swiperSlide}>
                  <ProductDetail key={Assoalho.id} products={Assoalho}/>
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
        <h2 className={styles.categoryTitle}>Decks</h2>
        <div className={styles.slideCategorys}>
          <Swiper
            style={{
              "--swiper-navigation-color": "black",
              "--swiper-navigation-size": "30px",
            }}
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
              {productsCategoryDeck && productsCategoryDeck.map((Deck) => (
                <SwiperSlide className={styles.swiperSlide}>
                  <ProductDetail key={Deck.id} products={Deck}/>
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
        <h2 className={styles.categoryTitle}>Meia Cana</h2>
        <div className={styles.slideCategorys}>
          <Swiper
            style={{
              "--swiper-navigation-color": "black",
              "--swiper-navigation-size": "30px",
            }}
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
              {productsCategoryMeiaCana && productsCategoryMeiaCana.map((MeiaCana) => (
                <SwiperSlide className={styles.swiperSlide}>
                  <ProductDetail key={MeiaCana.id} products={MeiaCana}/>
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
        <h2 className={styles.categoryTitle}>Rodapé</h2>
        <div className={styles.slideCategorys}>
          <Swiper
            style={{
              "--swiper-navigation-color": "black",
              "--swiper-navigation-size": "30px",
            }}
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
              {productsCategoryRodape && productsCategoryRodape.map((Rodape) => (
                <SwiperSlide className={styles.swiperSlide}>
                  <ProductDetail key={Rodape.id} products={Rodape}/>
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
        <h2 className={styles.categoryTitle}>Vistas de 5cm</h2>
        <div className={styles.slideCategorys}>
          <Swiper
            style={{
              "--swiper-navigation-color": "black",
              "--swiper-navigation-size": "30px",
            }}
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
              {productsCategoryVista5cm && productsCategoryVista5cm.map((Vista5cm) => (
                <SwiperSlide className={styles.swiperSlide}>
                  <ProductDetail key={Vista5cm.id} products={Vista5cm}/>
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
        <h2 className={styles.categoryTitle}>Vistas de 7cm</h2>
        <div className={styles.slideCategorys}>
          <Swiper
            style={{
              "--swiper-navigation-color": "black",
              "--swiper-navigation-size": "30px",
            }}
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
              {productsCategoryVista7cm && productsCategoryVista7cm.map((Vista7cm) => (
                <SwiperSlide className={styles.swiperSlide}>
                  <ProductDetail key={Vista7cm.id} products={Vista7cm}/>
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
            style={{
              "--swiper-navigation-color": "black",
              "--swiper-navigation-size": "30px",
            }}
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