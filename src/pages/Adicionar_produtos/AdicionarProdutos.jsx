import React from 'react';


import { useState, useEffect } from 'react'; //utilizar para salvar o produto no banco
import { useNavigate } from 'react-router-dom'; //redirecionar quando criar o produto
import { useAuthValue } from '../../context/authContext';
import { useInsertDocument } from '../../hooks/useInsertDocument';

import styles from './AdicionarProdutos.module.css'

const AdicionarProdutos = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [price, setPrice] = useState("");
  const [unity, setUnity] = useState("");
  const [method, setMethod] = useState("");
  const [formError, setFormError] = useState("");
  

  const {user} = useAuthValue();

  const {insertDocument, response} = useInsertDocument('products'); //Enviar os dados para a coleção products

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
    insertDocument({
      title,
      category,
      price,
      unity,
      method,
      body,
      image,
      uid: user.uid,
      createdBy: user.displayName
    })

    //redirect para a home
    navigate("/");
  };

  

  return (
    <div className={styles.create_product}>
      <h2>Adicionar produto</h2>
      <p>Adicione um produto ao sistema.</p>
      <form onSubmit={handleSubmit} 
      action="">
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
        <div className={styles.btnCadastrar}>
          {!response.loading && <button className='btn'>Cadastrar</button>}
          {response.loading && (
            <button className='btn' disabled>
              Aguarde...
            </button>
          )}
        </div>
        {response.error && <p className='error'>{response.error}</p>}
        {formError && <p className='error'>{formError}</p>}
      </form>
    </div>
  )
}

export default AdicionarProdutos