import { 
  FaHome, 
  FaLongArrowAltDown,
  FaMapMarkerAlt 
} from 'react-icons/fa'

//hooks
import { useState,} from 'react'
import { useNavigate, Link, Navigate } from 'react-router-dom'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'

//Components
import CasasDetail from '../../components/CasasDetail'

//CSS
import styles from './Casas.module.css'

const Casas = () => {
  const [query, setQuery] = useState("");
  const {documents: casas, loading} = useFetchDocuments("casas");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    //Caso contenha um valor na busca, envie para o que pesquisou.
    if(query){
      return navigate(`/search?q=${query}`);
    }else{

    }
  }

  const image = [
    {name: 'image', icon: <FaHome/>, URL: 'https://www.portalsteelframe.com.br/wp-content/uploads/2021/01/Noticias-20.jpg'}
  ]

  const arrowBellow = [
    {name: 'arrowBellow', icon: <FaLongArrowAltDown/>}
  ]

  const location = [
    {name: 'location', icon: <FaMapMarkerAlt/>}
  ]

  return (
    <div className={styles.containerFather}>
      <div className={styles.background}>
        <div className={styles.containerLocationsProjects}>
          <h2>Locais que a <span>Lider Madeiras</span> já esteve :</h2>
          {location.map((location) => (
            <i>{location.icon} <p>Gravataí - RS</p></i>
          ))}
          {location.map((location) => (
            <i>{location.icon} <p>Canoas - RS</p></i>
          ))}
          {location.map((location) => (
            <i>{location.icon} <p>Santo Antônio - RS</p></i>
          ))}
          {location.map((location) => (
            <i>{location.icon} <p>Porto Alegre - RS</p></i>
          ))}
          {location.map((location) => (
            <i>{location.icon} <p>Imbituba - SC</p></i>
          ))}
          <p>Entre outras localizações</p>
        </div>
        {image.map((image) => (
          <img src={image.URL} alt="" />
        ))}
        <div className={styles.txtBackground}>
          <p>Lider Madeiras</p>
          <h2>Faça seu sonho se tornar <span>realidade!</span></h2>
        </div>
      </div>

      <div className={styles.txtProjects}>
        <h3>Veja os nosso projetos abaixo</h3>
        {image.map((casa) => (
          <i>
            {casa.icon}
          </i>
        ))}
      </div>

      <div className={styles.list_products}>
        <p>Nós trabalhamos com</p>
        <div className={styles.weWorkWith}>
          <div>Alvenaria</div>
          <div>Madeira</div>
        </div>
        <div className={styles.containerOptions}>
          
        </div>
        {loading && <p>Carregando...</p>}
        {casas && casas.map((casas) => (
          <CasasDetail key={casas.id} casas={casas}/>
        ))}
        {casas && casas.length === 0 && (
          <div className={styles.noproducts}>
            <p>Não foram encontrados produtos</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Casas