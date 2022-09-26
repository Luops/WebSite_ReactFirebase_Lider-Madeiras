import React from 'react'
import { FaFacebook, FaWhatsapp, FaMapMarkerAlt, FaGoogle} from 'react-icons/fa'

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
    {name: 'email', icon: <FaGoogle/>, URL: 'mailto:eliana.lidermadeiras@gmail.com?subject=orcamento'}
  ]

  const address = [
    {name: 'address', icon: <FaMapMarkerAlt/>, URL: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d864.6143673865794!2d-51.03808701038359!3d-29.90872946933981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95197316e7a7a3e5%3A0x8d04ad19085291ea!2sFerragem%20Viaduto!5e0!3m2!1spt-BR!2sbr!4v1662384112421!5m2!1spt-BR!2sbr'}
  ]

  


  return (
    
    <div className={styles.containerFather}>
      <div className={styles.containerAbout}>
        <div className={styles.containerTitleAbout}>
          <h2>Lider Madeiras</h2>
          <p className={styles.conheca}>Conheça a nossa empresa</p>
          <p className={styles.envieMensagem}>Entre em contato conosco para realizar um orçamento!</p>
          {imgLider.map((image) => (
          <img src={image.image} name={image.id} key={image.id} alt="Lider Madeiras" />
        ))}
        </div>
        <div className={styles.textAbout}>
        <p>
          Atuando desde 2010, nos localizamos na cidade de Gravataí - Rio Grande do Sul. 
          Além de construir casas em todo nosso estado, também construímos em Santa Catarina.
          Trabalhamos em projetos de casas de alvenaria ou madeira.
        </p>
        <p>
          Contamos com madeira própria, o que torna muito mais ágil e competitivo em termos financeiros.
          Nosso beneficiamento de madeiras garante os melhores preços para quem deseja adquirir a casa pronta ou 
          somente o madeiramento.
        </p>
        </div>
      </div>
      
      <div className={styles.containerContact}>
        <h2>Contato</h2>
        <div className={styles.containerContactDescriptions}>
          <div className={styles.containerWpp}>
            {networkWppOne.map((wppOne) => (
              <i>{wppOne.icon}</i>
            ))}
            <p className={styles.contactName}>Edmilson Lopes</p>
            <p className={styles.contactNumber}>
              {networkWppOne.map((WppOne) => (
                <a href={WppOne.URL} target="_blank" 
                  id={WppOne.name} 
                  key={WppOne.name}>
                    (51)98460-2351
                </a>
              ))}
            </p>
            <br />
            <p className={styles.contactName}>Claudiomiro</p>
            <p className={styles.contactNumber}>
              {networkWppTwo.map((WppTwo) => (
                <a href={WppTwo.URL} target="_blank" 
                id={WppTwo.name} 
                key={WppTwo.name}>
                  (51)98193-3245
                </a>
              ))}
            </p>
          </div>
            
          <div className={styles.containerFacebook}>
            {networkFace.map((Facebook) => (
              <i>{Facebook.icon}</i>
            ))}
            <p className={styles.textFacebook}>Facebook</p>
            <p>
              {networkFace.map((Facebook) => (
                <a href={Facebook.URL} target="_blank" 
                id={Facebook.name} 
                key={Facebook.name}>
                  @LiderMadeirasGravatai
                </a>
              ))}
            </p>
          </div>
            
          <div className={styles.containerEmail}>
            {networkEmail.map((Email) => (
              <i>{Email.icon}</i>
            ))}
            <p className={styles.textGmail}>Gmail</p>
            <p>
              {networkEmail.map((Email) => (
                <a href={Email.URL} target="_blank" 
                id={Email.name} 
                key={Email.name}>
                  Eliana.lidermadeiras
                </a>
              ))}
            </p>
          </div>

        </div>
      </div>

      <div className={styles.containerAddress}>
        <address>
          {address.map((Address) => (
            <i>{Address.icon}</i>
          ))}
          RS-020, 3929 - Neópolis, Gravataí - RS, 94100-250
        </address>
        {address.map((Address) => (
          <iframe src={Address.URL} frameborder="0" width="100%"></iframe>
        ))}
      </div>
    </div>
  )
}

export default About