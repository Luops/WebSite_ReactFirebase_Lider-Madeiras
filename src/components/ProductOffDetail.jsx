import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import {Navigation, Thumbs} from 'swiper'

//Hooks
import { Link } from 'react-router-dom'

//Components


//CSS
import styles from "./ProductOffDetail.module.css"

const ProductOffDetail = ({productsOff}) => {
  return (
    
    <li className={styles.product_detail}>
        
        <div className={styles.containerPorcentOff}>
              <p>{productsOff.percent} de DESCONTO!</p>
        </div>
        <div className={styles.geral}>
            <img src={productsOff.image} alt={productsOff.title} />
            <div className={styles.informations}>
                <h2>{productsOff.title}</h2>
                <div className={styles.prices}>
                    <div className={styles.price}>
                        <span>De: </span> <span className={styles.oldPrice}> R$ {productsOff.oldPrice}</span> <span>{productsOff.unity}</span>
                    </div>
                    <p className={styles.newPrice}>
                        <span>Por: R$</span> {productsOff.newPrice} <span>{productsOff.unity}</span>
                    </p>
                </div>
                <p className={styles.payment_method}>{productsOff.method}</p>
                <Link to={`/productsOff/${productsOff.id}`} className='btn btn-outlinev2'>Veja mais</Link>
            </div>
        </div>
        
    </li>
  )
}

export default ProductOffDetail