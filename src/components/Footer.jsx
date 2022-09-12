import React from 'react'
import { FaFacebook } from 'react-icons/fa'

//CSS
import styles from "./Footer.module.css"

const socialNetworks = [
  {name: 'facebook', icon: <FaFacebook/>, URL: 'https://www.facebook.com/LiderMadeirasGravatai'},
  
]

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.lider}>Lider Madeiras &copy; 2022</p>
      {socialNetworks.map((network) => (
        <a className={styles.facebookIcon} href={network.URL} target="_blank" id={network.name} key={network.name}>
          {network.icon}
        </a>
       ))}
       <p className={styles.developedBy}>Desenvolvido por Fabrício Lopes</p>
    </footer>
  )
}

export default Footer