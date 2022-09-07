import React from 'react'
import { FaFacebook, FaWhatsapp } from 'react-icons/fa'


//hooks
import { Link, useParams } from 'react-router-dom'
import { useFetchDocument } from '../../hooks/useFetchDocument'



//CSS
import styles from './ProductOff.module.css'


const ProductOff = () => {
    const { id } = useParams();
    const { document: productOff, loading } = useFetchDocument("productsOff", id); //Carregar o documento que vem do db(products, id) e renomeia para product

    const socialNetworks = [
        {name: 'facebook', icon: <FaFacebook/>, URL: 'https://www.facebook.com/LiderMadeirasGravatai'},
        {name: 'wpp', icon: <FaWhatsapp/>, URL: 'https://api.whatsapp.com/send?phone=5551984602351&text=Inicie%20uma%20conversa%20com%20um%20vendendor%20da%20Lider%20Madeiras!'}
    ]
    

  return (
    <div className={styles.container_principal}>
        {loading && <p>Carregando produto...</p>}
        {productOff && (
            <div className={styles.container_produto}>
                <div className={styles.container_imgTitleBodyCategory}>
                    <div className={styles.fotoPromocao}>
                        <h2>Promoção!</h2>
                        <img src={productOff.image} alt={productOff.title} />
                    </div>
                    <div className={styles.container_titleBodyPriceUnityMethod}>
                        <div className={styles.titleBodyPriceUnityMethod}>
                            <h1>{productOff.title}</h1>
                            <p className={styles.body}>{productOff.body}</p>
                            <div className={styles.prices}>
                                <div className={styles.price}>
                                    <span>De: </span> <span className={styles.oldPrice}> R$ {productOff.oldPrice}</span> <span>{productOff.unity}</span>
                                </div>
                                <p className={styles.newPrice}>
                                    <span>Por: R$ {productOff.newPrice}</span> <span>{productOff.unity}</span>
                                </p>
                            </div>
                            <p className={styles.method}>{productOff.method}</p>
                        </div>
                        <div className={styles.categoryIcons}>
                            <p className={styles.category}>Categoria do produto: <span>{productOff.category}</span></p>
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

export default ProductOff