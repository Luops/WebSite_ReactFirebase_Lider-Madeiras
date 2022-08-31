import React from 'react';


import { useState, useEffect } from 'react'; //utilizar para salvar o produto no banco
import { useNavigate, useParams } from 'react-router-dom'; //redirecionar quando criar o produto
import { useAuthValue } from '../../context/authContext'; //context que verifica a autenticação do usuário na página
import { useFetchDocument } from '../../hooks/useFetchDocument';
import { useUpdateDocument } from '../../hooks/useUpdateDocument';

import styles from './EditProdutosOff.module.css'

const EditProdutosOff = () => {
  const {id} = useParams();
  const {document:productOff} = useFetchDocument("productsOff",id)

  const [title, setTitle] = useState("");
  const [percent, setPercent] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [oldPrice, setOldPrice] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [unity, setUnity] = useState("");
  const [method, setMethod] = useState("");
  const [formError, setFormError] = useState("");

  useEffect(() => {

  if(productOff){
    setTitle(productOff.title);
    setPercent(productOff.percent)
    setCategory(productOff.category);
    setImage(productOff.image);
    setBody(productOff.body);
    setOldPrice(productOff.oldPrice);
    setNewPrice(productOff.newPrice);
    setUnity(productOff.unity);
    setMethod(productOff.method);
  }

},[productOff])
  

  const {user} = useAuthValue();

  const {updateDocument, response} = useUpdateDocument('productsOff'); //Enviar os dados para a coleção productsOff

  const navigate = useNavigate();

  const handleSubmit = (e) => { //Ao apertar o botao de cadastro, será enviado ao banco (realizado um evento)
    e.preventDefault();
    setFormError("");

    //Validar URL da imagem
    try {
      new URL(image)
    } catch (error) {
      setFormError("A imagem precisa ser uma URL.");
    }

    //Checar todos os valores
    if (!title || !image || !percent || !body || !newPrice || !category || !oldPrice  || !unity || !method) {
      setFormError("Por favor preencha todos os campos!")
    }

    

    if (formError) return;
    
    //registro no banco
    const data = {
      title,
      category,
      newPrice,
      oldPrice,
      percent,
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
    <div className={styles.create_product}>
      {productOff && (
        <>
          <h2>Editando produto: {productOff.title}</h2>
          <p>Altere os dados do produto em promoção.</p>
          <form onSubmit={handleSubmit} 
          action="">
            <p className={styles.preview_title}>Preview da imagem atual:</p>
            <img 
            className={styles.preview_image} 
            src={productOff.image} 
            alt={productOff.title} 
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
                <span className={styles.title_Price}>Preço antigo:</span>
                <input type="text" 
                name="oldPrice" 
                id="oldPrice" 
                required 
                placeholder='Preço do produto..' 
                onChange={(e) => setOldPrice(e.target.value)}
                value={oldPrice}/>
              </label>
              <label htmlFor="">
                <span className={styles.title_Price}>Preço promoção:</span>
                <input type="text" 
                name="newPrice" 
                id="newPrice" 
                required 
                placeholder='Preço do produto..' 
                onChange={(e) => setNewPrice(e.target.value)}
                value={newPrice}/>
              </label>
            </div>

            <label htmlFor="">
                <span>Unidade do produto:</span>
                <input type="text" 
                name="unity" 
                id="unity" 
                required 
                placeholder='Unidade a ser vendido..' 
                onChange={(e) => setUnity(e.target.value)}
                value={unity}/>
            </label>

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
              <span>Porcentagem do desconto:</span>
              <textarea name="percent" 
              id="percent" 
              required 
              placeholder='Insira a descrição do produto..'
              onChange={(e) => setPercent(e.target.value)}
              value={percent}>
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

export default EditProdutosOff