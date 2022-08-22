import React from 'react'

//CSS
import styles from "./Home.module.css"

const Home = () => {
  return (
    <main>
      <div className={styles.divPromocoes}>

        <div className={styles.tituloDaDiv}><h3>Aproveite as nossas promoções!</h3></div>

        <ul className={styles.promocoes}>
          
        </ul>
      </div>

    </main>
  )
}

export default Home