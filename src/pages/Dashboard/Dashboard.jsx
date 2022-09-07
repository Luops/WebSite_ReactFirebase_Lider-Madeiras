import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom'

//hooks
import { useAuthValue} from '../../context/authContext'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'; //Fazer lista
import { useDeleteDocument } from '../../hooks/useDeleteDocument'; //Deletar documentos


//CSS
import styles from './Dashboard.module.css';


const Dashboard = () => {
  const {user} = useAuthValue();
  const uid = user.uid;


  //produtos adicionados do usuário
  const {documents: products, loading} = useFetchDocuments("products", null, uid);  //Produtos cadastrados pelo usuário
  const {documents: productsOff} = useFetchDocuments("productsOff", null, uid);  //Produtos cadastrados pelo usuário


  const {deleteDocumentNoOff} = useDeleteDocument("products"); //Deletar produto normal
  const {deleteDocumentOff} = useDeleteDocument("productsOff"); //Deletar produto em promoção


  if(loading) {
    return <p>Carregando...</p>
  }

  return (
    <div className={styles.dashboard}>
      
      <h2>Dashboard</h2>
      <p>Gerencie os seus produtos</p>
      <div className={styles.dashboard_productOff}>
        <h2>Produtos em promoção!</h2>
        <li className={styles.addProduct}>
          <NavLink to="/adicionarProdutosOff">
            + Adicionar
          </NavLink>
        </li>
        <div className={styles.product_headerOff}>
          <span>Título</span>
          <span>Ações</span>
        </div>
        {productsOff
          && productsOff.map((productOff) => (
            <div key={productOff.id} className={styles.product_rowOff}>
              <p>{productOff.title}</p>
              <div className={styles.opcoesAcoes}>
                <Link to={`/productsOff/${productOff.id}`} className="btn btn-outline">
                  Ver
                </Link>
                <Link to={`/productsOff/edit/${productOff.id}`} className="btn btn-outline">
                  Editar
                </Link>
                <button onClick={() => deleteDocumentOff(productOff.id)} className="btn btn-outline btn-danger">
                  Excluir
                </button>
              </div>
            </div>
        ))}
      </div>

      <div className={styles.dashboard_product}>
        <h2>Produtos com preço normal</h2>
        <li className={styles.addProduct}>
          <NavLink to="/adicionarProdutos">
            + Adicionar
          </NavLink>
        </li>
          <div className={styles.product_header}>
            <span>Título</span>
            <span>Ações</span>
          </div>
        {products 
          && products.map((product) => (
            <div key={product.id} className={styles.product_row}>
              <p>{product.title}</p>
              <div className={styles.opcoesAcoes}>
                <Link to={`/products/${product.id}`} className="btn btn-outline">
                  Ver
                </Link>
                <Link to={`/products/edit/${product.id}`} className="btn btn-outline">
                  Editar
                </Link>
                <button onClick={() => deleteDocumentNoOff(product.id)} className="btn btn-outline btn-danger">
                  Excluir
                </button>
              </div>
            </div>
        ))}
      </div>
      
    
    </div>
  )
}

export default Dashboard