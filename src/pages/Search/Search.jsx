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
    <div>
        <h2>Search</h2>
        <div>
            {/*Vieram os produtos? se sim (&&) faça o mapeamento deles*/}
            {products && products.length === 0 && (
                <>
                    <p>Não foram encontrados produtos a partir da sua busca...</p>
                    <Link to="/" className='btn btn-dark'>
                        Voltar
                    </Link>
                </>
            )}
            {products && products.map((product) => 
                <ProductDetail key={product.id} products={product}/>
            )}
        </div>
    </div>
  )
}

export default Search