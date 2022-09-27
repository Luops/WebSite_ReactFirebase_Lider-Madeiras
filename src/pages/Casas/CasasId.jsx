import React, { useRef, useState, useNavigate } from 'react'
import 
  { FaFacebook, 
    FaWhatsapp,
    FaBed, 
    FaBath, 
    FaExpandArrowsAlt, 
    FaCarAlt,
    FaArrowLeft,
    FaMapMarkerAlt
  } from 'react-icons/fa'
import 
  { Visa,
    Mastercard,
    Hiper,
    Elo
  } from 'react-pay-icons'

//hooks
import { Link, useParams } from 'react-router-dom'
import { useFetchDocument } from '../../hooks/useFetchDocument'


//Components


//
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs, Pagination } from "swiper";

//CSS
import styles from './CasasId.module.css'


const CasasId = () => {
  const { id } = useParams();
  const { document: casa, loading } = useFetchDocument("casas", id); //Carregar o documento que vem do db(products, id) e renomeia para product

  //Icones e targets das redes sociais
  const facebook = [
    {name: 'facebook', icon: <FaFacebook/>, URL: 'https://www.facebook.com/LiderMadeirasGravatai'},
  ]
  const wpp = [
    {name: 'whatsapp', icon: <FaWhatsapp/>, URL: 'https://api.whatsapp.com/send?phone=5551984602351&text=Inicie%20uma%20conversa%20com%20um%20vendendor%20da%20Lider%20Madeiras!'},
  ]

  //Atributos da casa
  const bed = [
    {name: 'bed', icon: <FaBed/>}
  ]

  const bath = [
      {name: 'bath', icon: <FaBath/>}
  ]

  const size = [
      {name: 'size', icon: <FaExpandArrowsAlt/>}
  ]

  const car = [
      {name: 'car', icon: <FaCarAlt/>}
  ]

  const arrowLeft = [
    {name: 'arrowleft', icon: <FaArrowLeft/>}
  ]

  const address = [
    {name: 'address', icon: <FaMapMarkerAlt/>, URL: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d864.6143673865794!2d-51.03808701038359!3d-29.90872946933981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95197316e7a7a3e5%3A0x8d04ad19085291ea!2sFerragem%20Viaduto!5e0!3m2!1spt-BR!2sbr!4v1662384112421!5m2!1spt-BR!2sbr'}
  ]

  //Icones de pagamentos
  const cartoes = [
    {name: 'visa', icon: <Visa />},
    {name: 'mastercard', icon: <Mastercard />},
    {name: 'elo', icon: <Elo />},
  ]

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className={styles.containerFather}>
      {loading && <p>Carregando produto...</p>}
      {casa && (
        <div className={styles.containerSlideDescription}>
          <h2>{casa.title}</h2>
          <div className={styles.containerSlide}>
            <Swiper
            style={{
              "--swiper-navigation-color": "#000000",
              "--swiper-pagination-color": "#000000",
            }}
            loop={true}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className={styles.mySwiper2}
            >
              <SwiperSlide className={styles.imageOne}>
                <img src={casa.imageOne} alt={casa.title} key={casa.id} />
              </SwiperSlide>
              <SwiperSlide className={styles.imageTwo}>
              <img src={casa.imageTwo} alt={casa.title} key={casa.id} />
              </SwiperSlide>
              <SwiperSlide className={styles.imageThree}>
                <img src={casa.imageThree} alt={casa.title} key={casa.id} />
              </SwiperSlide>
              <SwiperSlide className={styles.imageFour}>
                <img src={casa.imageFour} alt={casa.title} key={casa.id} />
              </SwiperSlide>
              <SwiperSlide className={styles.imageFive}>
                <img src={casa.imageFive} alt={casa.title} key={casa.id}/>
              </SwiperSlide>
              <SwiperSlide className={styles.imageSix}>
                <img src={casa.imageSix} alt={casa.title} key={casa.id}/>
              </SwiperSlide>
            </Swiper>
            <div className={styles.containerPriceContact}>
              <h3 className={styles.price}>
                R$ {casa.price}
              </h3>
              <div className={styles.containerContact}>
              <h3>Lider Madeiras</h3>
              <p>Gostou deste projeto?</p>
              <p className={styles.callUs}>Entre em contato conosco!</p>
              {facebook.map((facebook) => (
                <a 
                  href={facebook.URL} 
                  target="_blank" 
                  id={facebook.name} 
                  key={facebook.name}
                  className={styles.facebook}
                  >
                    {facebook.icon} <p>Facebook</p>
                </a>               
              ))}
              {wpp.map((wpp) => (
                <a 
                  href={wpp.URL} 
                  target="_blank" 
                  id={wpp.name} 
                  key={wpp.name}
                  className={styles.wpp}
                  >
                    {wpp.icon} <p>WhatsApp</p>
                </a>               
              ))}
            </div>
          </div>
            
          </div>
          <div className={styles.containerDescription}>
            <p className={styles.containerCategory}>
              Categoria: {casa.category} / Cidade: {casa.city} - {casa.uf}
            </p>
            <div className={styles.attributesHouse}>
                <div className={styles.bedRooms}>
                  {bed.map((bed) => (
                    <i>{bed.icon}</i>
                  ))} <p>{casa.bedRooms} Quarto(s)</p>
                </div>
                <div className={styles.bathRooms}>
                  {bath.map((bath) => (
                    <i>{bath.icon}</i>
                  ))} <p>{casa.bathRooms} Banheiro(s)</p>
                </div>
                <div className={styles.car}>
                  {car.map((car) => (
                    <i>{car.icon}</i>
                  ))} <p>{casa.car} Vaga(s)</p>
                </div>
                <div className={styles.size}>
                  {size.map((size) => (
                    <i>{size.icon}</i>
                  ))} <p>{casa.size}</p>
                </div>
            </div>
            <div className={styles.containerBody}>
              <h2>Descrição da {casa.title}</h2>
              <p>{casa.body}</p>
              <p>{casa.method}</p>
            </div>

            <div className={styles.containerBody}>
              <h2 className={styles.cartoes}>
                Cartões aceitos
              </h2>
              <div className={styles.creditCards}>
                {cartoes.map((cartoes) => (
                  <i>{cartoes.icon}</i>
                ))}
                <p>Entre outros</p>
              </div>   
            </div>
          </div>
        </div>
      )}
      
      <div className={styles.containerAddress}>
        <address>
          <h4>Venha conversar conosco!</h4>
          <div className={styles.addressIcon}>
            {address.map((Address) => (
              <i>{Address.icon}</i>
            ))}
            RS-020, 3929 - Neópolis, Gravataí - RS, 94100-250
          </div>
        </address>
        {address.map((Address) => (
          <iframe src={Address.URL} frameborder="0" width="100%"></iframe>
        ))}
      </div>

      {arrowLeft.map((arrow) =>(
        <div className={styles.containerArrow}>
          <a href={`/casas`}>
            {arrow.icon} <p>Voltar</p>
          </a>
        </div>
      ))}
    </div>
    
  )
}

export default CasasId