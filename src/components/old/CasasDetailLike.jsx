import React from 'react'
import { 
    FaMapMarkerAlt, 
    FaBed,
    FaBath, 
    FaExpandArrowsAlt, 
    FaCarAlt,
} from 'react-icons/fa'

//Hooks
import { Link } from 'react-router-dom'

//Components

//CSS
import styles from './CasasDetailLike.module.css'



const CasasDetailLike = ({casas}) => {
    const address = [
        {name: 'address', icon: <FaMapMarkerAlt/>}
    ]

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

    

  return (
    <div className={styles.casa_detail}>
        <Link to={`/casas/${casas.id}`}>
            <a className={styles.containerImage}>
                <img className={styles.image} src={casas.imageOne} alt={casas.title} />
                <p className={styles.locality}>
                    {address.map((Address) => (
                        <i>{Address.icon}</i>
                    ))} {casas.city} - {casas.uf}
                </p>
                <p className={styles.category}>{casas.category}</p>
            </a>
        </Link>
        <h3 className={styles.title}>
            {casas.title}
        </h3>
        <div className={styles.containerInformations}>
            <p className={styles.bedRooms}>
                {bed.map((Bed) => (
                    <i>{Bed.icon}</i>
                ))} {casas.bedRooms}
            </p>
            <p className={styles.bathRooms}>
                {bath.map((Bath) => (
                    <i>{Bath.icon}</i>
                ))} {casas.bathRooms}
            </p>
            <p className={styles.car}>
                {car.map((Car) => (
                    <i>{Car.icon}</i>
                ))} {casas.car}
            </p>
            <p className={styles.size}>
                {size.map((Size) => (
                    <i>{Size.icon}</i>
                ))} {casas.size}
            </p>
        </div>
        
    </div>
  )
}

export default CasasDetailLike