import React from 'react';


import { useState, useEffect } from 'react'; //utilizar para salvar o produto no banco
import { useNavigate, useParams } from 'react-router-dom'; //redirecionar quando criar o produto
import { useAuthValue } from '../../context/authContext';
import { useFetchDocument } from '../../hooks/useFetchDocument';
import { useUpdateDocument } from '../../hooks/useUpdateDocument';

import styles from './EditProducts.module.css'

const EditProducts = () => {
  const {id} = useParams();
  const {document:product} = useFetchDocument("products",id)

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [price, setPrice] = useState("");
  const [unity, setUnity] = useState("");
  const [method, setMethod] = useState("");
  const [formError, setFormError] = useState("");

  useEffect(() =>{

    if(product){
      setTitle(product.title);
      setCategory(product.category);
      setImage(product.image);
      setBody(product.body);
      setPrice(product.price);
      setUnity(product.unity);
      setMethod(product.method);
    }

  },[product])
  

  const {user} = useAuthValue();

  const {updateDocument, response} = useUpdateDocument('products'); //Enviar os dados para a coleção products

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");

    //Validar URL da imagem
    try {
      new URL(image)
    } catch (error) {
      setFormError("A imagem precisa ser uma URL.");
    }

    //Checar todos os valores
    if (!title || !image || !body || !price || !category || !unity || !method) {
      setFormError("Por favor preencha todos os campos!")
    }

    

    if (formError) return;
    
    //registro no banco
    const data = {
      title,
      category,
      price,
      unity,
      method,
      body,
      image,
      uid: user.uid,
      createdBy: user.displayName
    }
    updateDocument(id, data)

    //redirect para a home
    navigate("/dashboard");
  };

  

  return (
    <div className={styles.edit_product}>
      {product && (
        <>
            <h2>Editando produto: {product.title}</h2>
            <p>Altere os dados do produto.</p>
            <form onSubmit={handleSubmit} 
            action="">
            <p className={styles.preview_title}>Preview da imagem atual:</p>
            <img 
            className={styles.preview_image} 
            src={product.image} 
            alt={product.title} 
            />
            <label htmlFor="">
              <span>Título:</span>
              <input type="text" 
              name="title" 
              id="title" 
              required 
              placeholder='Título do produto..' 
              onChange={(e) => setTitle(e.target.value)}
              value={title}/>
            </label>

            <label htmlFor="">
              <span>Categoria:</span>
              <input type="text" 
              name="category" 
              id="category" 
              required 
              placeholder='Categoria do produto..' 
              onChange={(e) => setCategory(e.target.value)}
              value={category}/>
            </label>

            <div className={styles.divPriceUnity}>
              <label htmlFor="">
                <span>Preço:</span>
                <input type="text" 
                name="price" 
                id="price" 
                required 
                placeholder='Preço do produto..' 
                onChange={(e) => setPrice(e.target.value)}
                value={price}/>
              </label>
              <label htmlFor="">
                <span>Unidade:</span>
                <input type="text" 
                name="unity" 
                id="unity" 
                required 
                placeholder='Unidade a ser vendido..' 
                onChange={(e) => setUnity(e.target.value)}
                value={unity}/>
              </label>
            </div>

            <label htmlFor="">
              <span>Método de pagamento:</span>
              <textarea name="method" 
              id="method" 
              required 
              placeholder='Insira o método de pagamento..'
              onChange={(e) => setMethod(e.target.value)}
              value={method}>
              </textarea>
            </label>

            <label htmlFor="">
              <span>Descrição:</span>
              <textarea name="body" 
              id="body" 
              required 
              placeholder='Insira a descrição do produto..'
              onChange={(e) => setBody(e.target.value)}
              value={body}>
              </textarea>
            </label>

            <label htmlFor="">
              <span>URL da imagem:</span>
              <input type="text" 
              name="image" 
              id="image" 
              required 
              placeholder='Insira a URL da imagem do produto..' 
              onChange={(e) => setImage(e.target.value)}
              value={image}/>
            </label>
            
            {!response.loading && <button className='btn'>Editar</button>}
            {response.loading && (
              <button className='btn' disabled>
                Aguarde...
              </button>
            )}
            {response.error && <p className='error'>{response.error}</p>}
            {formError && <p className='error'>{formError}</p>}
          </form>
        </>
      )}
    </div>
  )
}

export default EditProducts