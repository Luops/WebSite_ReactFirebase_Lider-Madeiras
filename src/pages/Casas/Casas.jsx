import { 
  FaHome, 
  FaLongArrowAltDown,
  FaMapMarkerAlt 
} from 'react-icons/fa'

//hooks
import { useState,} from 'react'
import { useNavigate, Link, Navigate } from 'react-router-dom'
import { useFetchDocuments, useFetchDocumentsAlvenaria, useFetchDocumentsMadeira } from '../../hooks/useFetchDocuments'

//Components
import CasasDetail from '../../components/CasasDetail'

//CSS
import styles from './Casas.module.css'

const Casas = () => {
  const [query, setQuery] = useState("");
  const {documents: casas, loading} = useFetchDocuments("casas");
  
  //Chamar as categorias das casas
  const {documentsAlvenaria: casasAlvenaria} = useFetchDocumentsAlvenaria("casas");
  const {documentsMadeira: casasMadeira} = useFetchDocumentsMadeira("casas");

  const [isAlvenaria, setIsAlvenaria] = useState(true);
  const [isMadeira, setIsMadeira] = useState(false);

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
          <h2>Locais onde a <span>Lider Madeiras</span> já esteve :</h2>
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

      {/*container dos locais para celular */}
      <div className={styles.containerLocationsProjectsPhone}>
          <h2>Locais onde a <span>Lider Madeiras</span> já esteve:</h2>
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

      <div className={styles.list_products}>
        <p className={styles.txtWeWorkWith}>
          Trabalhamos com:
        </p>
        <div className={styles.weWorkWith}>
          <button 
          onClick={() => {
          setIsAlvenaria(!isAlvenaria);
        }}>Alvenaria</button>

          <button 
          onClick={() => {
          setIsMadeira(!isMadeira);
        }}>Madeira</button>
        </div>

        <div className={styles.options}>
          {isAlvenaria && isMadeira && (
            <p>Estão selecionadas as categorias: Alvenaria e Madeira</p>
          )}
          {isAlvenaria && !isMadeira && (
            <p>Está selecionada a categoria: Alvenaria</p>
          )}
          {!isAlvenaria && isMadeira && (
            <p>Está selecionada a categoria: Madeira</p>
          )}
          {!isAlvenaria && !isMadeira && (
            <p>Selecione no mínimo uma das categorias acima!</p>
          )}
        </div>

        {/*Chamada para os cards das casas*/}
        {isAlvenaria && (
          <>
            <div className={styles.containerAlvenaria}>
              <h2>Casas de Alvenaria</h2>
              {loading && <p>Carregando...</p>}
              <div className={styles.containerCards}>
                {casasAlvenaria && casasAlvenaria.map((casas) => (
                  <CasasDetail key={casas.id} casas={casas}/>
                ))}
              </div>
            </div>
          </>
        )}
        
        {isMadeira && (
          <>
          <div className={styles.containerMadeira}>
            <h2>Casas de Madeira</h2>
            {loading && <p>Carregando...</p>}
            <div className={styles.containerCards}>
              {casasMadeira && casasMadeira.map((casas) => (
                  <CasasDetail key={casas.id} casas={casas}/>
                ))}
            </div>
            {casasMadeira && casasMadeira.length === 0 &&  (
              <p>Não foram encontradas casas!</p>
            )}
          </div>
          </>
        )}
        
      </div>
    </div>
  )
}

export default Casas