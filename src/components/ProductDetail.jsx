import React from 'react'

//Hooks
import { Link } from 'react-router-dom'

//Components


//CSS
import styles from "./ProductDetail.module.css"

const ProductDetail = ({products}) => {
  return (
    <div className={styles.product_detail}>
        <img src={products.image} alt={products.title} />
        <h2>{products.title}</h2>
        <p className={styles.price}><span>R$</span> {products.price} <span>{products.unity}</span></p>
        <p className={styles.payment_method}>{products.method}</p>
        <Link to={`/products/${products.id}`} className='btn btn-outline'>Veja mais</Link>
    </div>
    
  )
}

export default ProductDetail