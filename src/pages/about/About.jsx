import React from 'react'
import { FaFacebook, FaWhatsapp, FaEnvelope, FaLocationArrow} from 'react-icons/fa'

//CSS
import styles from "./About.module.css"

const About = () => {
  const imgLider = [
    {name: 'lider', image: 'https://scontent.fpoa41-1.fna.fbcdn.net/v/t1.6435-9/91157888_102176614777665_722806325486026752_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_ohc=mq8gXNARNokAX_iZg2n&tn=KrqVGr2wlT6MRQSs&_nc_ht=scontent.fpoa41-1.fna&oh=00_AT8P-Bz6PUWB6_nAH8u196B-_2x5CaKmARXZ0OE6OaH_og&oe=633CACCE' }
  ]

  const networkWppOne = [
    {name: 'wppOne', icon: <FaWhatsapp/>, URL: 'https://api.whatsapp.com/send?phone=5551984602351&text=Inicie%20uma%20conversa%20com%20um%20vendendor%20da%20Lider%20Madeiras!'},
  ]

  const networkWppTwo = [
    {name: 'wppTwo', icon: <FaWhatsapp/>, URL: 'https://api.whatsapp.com/send?phone=5551981933245&text=Inicie%20uma%20conversa%20com%20um%20vendendor%20da%20Lider%20Madeiras!'}
  ]

  const networkFace = [
    {name: 'facebook', icon: <FaFacebook/>, URL: 'https://www.facebook.com/LiderMadeirasGravatai'}
  ]

  const networkEmail = [
    {name: 'email', icon: <FaEnvelope/>, URL: 'mailto:eliana.lidermadeiras@gmail.com?Subject=Or%E7amento'}
  ]

  const address = [
    {name: 'address', icon: <FaLocationArrow/>, URL: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d864.6143673865794!2d-51.03808701038359!3d-29.90872946933981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95197316e7a7a3e5%3A0x8d04ad19085291ea!2sFerragem%20Viaduto!5e0!3m2!1spt-BR!2sbr!4v1662384112421!5m2!1spt-BR!2sbr'}
  ]

  


  return (
    
    <div className={styles.containerFather}>
      <h2>Sobre</h2>
      <div className={styles.containerImgText}>
        {imgLider.map((image)=>(
          <img src={image.image} alt="Lider Madeiras" className={styles.imgLider}/>
        ))}
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Facilis sint tempore cum quod harum placeat cumque labore enim! 
        Iste tempora maxime velit quos cupiditate temporibus eveniet, 
        voluptas commodi dignissimos beatae.</p>
      </div>
      <h2>Contatos</h2>
      <div className={styles.containerContact}>

        <div className={styles.containerWppOne}>
          {networkWppOne.map((wpp) => (
            <a href={wpp.URL} target="_blank" id={wpp.name} key={wpp.name}>
              {wpp.icon}
            </a>                   
            ))}
          <span>WhatsApp</span>
          <p>(51)98460-2351</p>
        </div>

        <div className={styles.containerWppOne}>
          {networkWppTwo.map((wpp) => (
            <a href={wpp.URL} target="_blank" id={wpp.name} key={wpp.name}>
              {wpp.icon}
            </a>                   
            ))}
          <span>WhatsApp</span>
          <p>(51)98193-3245</p>
        </div>

        <div className={styles.containerFacebook}>
            {networkFace.map((facebook) => (
              <a href={facebook.URL} target="_blank" id={facebook.name} key={facebook.name}>
                {facebook.icon}
              </a>
            ))}
            <span>Facebook</span>
            <p>@LiderMadeirasGravatai</p>
        </div>
        
        <div className={styles.containerGmail}>
          {networkEmail.map((email) => (
            <a href={email.URL} target="_blank" id={email.name} key={email.name}>
              {email.icon}
            </a>
          ))}
          <span>Email</span>
          <p>Eliana.lidermadeiras@gmail.com</p>
        </div>
      
      </div>

      <h2>Endereço</h2>
      <div className={styles.containerEndereco}>
        <address><FaLocationArrow/>RS-020 Nº 3919, Loja 01 parada 67 / faixa de taquara</address>
        {address.map((address) =>(
          <iframe src={address.URL}></iframe>
        ))}
      </div>
    </div>
  )
}

export default About