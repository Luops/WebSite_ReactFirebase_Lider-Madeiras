import React, { useRef, useState } from 'react'
import 
  { FaFacebook, 
    FaWhatsapp, 
    FaMapMarkerAlt, 
    FaBed, 
    FaBath, 
    FaExpandArrowsAlt, 
    FaCarAlt 
  } from 'react-icons/fa'

//hooks
import { Link, useParams } from 'react-router-dom'
import { useFetchDocument } from '../../hooks/useFetchDocument'


//
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper";

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
              Categoria: {casa.category}
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
            <p className={styles.containerBody}>
              <h2>Descrição da {casa.title}</h2>
              <p>{casa.body}</p>
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default CasasId