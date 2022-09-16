import React from 'react'
import { FaFacebook, FaWhatsapp } from 'react-icons/fa'


//hooks
import { Link, useParams } from 'react-router-dom'
import { useFetchDocument } from '../../hooks/useFetchDocument'



//CSS
import styles from './Product.module.css'


const Product = () => {
    const { id } = useParams();
    const { document: product, loading } = useFetchDocument("products", id); //Carregar o documento que vem do db(products, id) e renomeia para product

    const socialNetworks = [
        {name: 'facebook', icon: <FaFacebook/>, URL: 'https://www.facebook.com/LiderMadeirasGravatai'},
        {name: 'wpp', icon: <FaWhatsapp/>, URL: 'https://api.whatsapp.com/send?phone=5551984602351&text=Inicie%20uma%20conversa%20com%20um%20vendendor%20da%20Lider%20Madeiras!'}
    ]
    

  return (
    <div className={styles.container_principal}>
        {loading && <p>Carregando produto...</p>}
        {product && (
            <div className={styles.container_produto}>
                <div className={styles.container_imgTitleBodyCategory}>
                    <img src={product.image} alt={product.title} />
                    <div className={styles.container_titleBodyPriceUnityMethod}>
                        <div className={styles.titleBodyPriceUnityMethod}>
                            <h1>{product.title}</h1>
                            <p className={styles.body}>{product.body}</p>
                            <p className={styles.price}><span>R$ {product.price} </span>{product.unity}</p>
                            <p className={styles.method}>{product.method}</p>
                        </div>
                        <div className={styles.categoryIcons}>
                            <p className={styles.category}>Categoria do produto: <span>{product.category}</span></p>
                            <div className={styles.icons}>
                                <p>Entre em contato:</p>
                                {socialNetworks.map((network) => (
                                    <a href={network.URL} target="_blank" id={network.name} key={network.name}>
                                        {network.icon}
                                    </a>
                                    
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )}
    </div>
  )
}

export default Product