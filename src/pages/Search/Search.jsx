import { Link } from 'react-router-dom'

//hooks
import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import { useQuery } from '../../hooks/useQuery'

//Components
import ProductDetail from '../../components/ProductDetail'


//CSS
import styles from './Search.module.css'

const Search = () => {

    const query = useQuery();
    const search = query.get('q');

    //carregar os documentos baseados na busca feita pelo usuário
    const { documents: products } = useFetchDocuments("products", search); //buscar os produtos que não sao promoções ("products")

  return (
    <div className={styles.search_container}>
        <div>
            <h1>Busca de produtos por categoria</h1>
        </div>
        <div className={styles.products}>
            {/*Vieram os produtos? se sim (&&) faça o mapeamento deles*/}
            {products && products.length === 0 && (
                <div className={styles.noproducts}>
                    <p>Não foi encontrado a categoria desejada a partir da sua busca.</p>
                    <Link to="/" className='btn btn-dark'>
                        Voltar
                    </Link>
                </div>
            )}
            {products && products.map((product) => 
                <ProductDetail key={product.id} products={product}/>
            )}
        </div>
    </div>
  )
}

export default Search