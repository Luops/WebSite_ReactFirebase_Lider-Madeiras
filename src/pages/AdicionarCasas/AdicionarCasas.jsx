import React from 'react'

import { useState, useEffect } from 'react'; //utilizar para salvar o produto no banco
import { useNavigate } from 'react-router-dom'; //redirecionar quando criar o produto
import { useAuthValue } from '../../context/authContext';
import { useInsertDocument } from '../../hooks/useInsertDocument';

//CSS
import styles from './AdicionarCasas.module.css'

const AdicionarCasas = () => {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [imageOne, setImageOne] = useState("");
    const [imageTwo, setImageTwo] = useState("");
    const [imageThree, setImageThree] = useState("");
    const [imageFour, setImageFour] = useState("");
    const [imageFive, setImageFive] = useState("");
    const [imageSix, setImageSix] = useState("");
    const [body, setBody] = useState("");
    const [price, setPrice] = useState("");
    const [size, setSize] = useState("");
    const [method, setMethod] = useState("");
    const [formError, setFormError] = useState("");
    
  
    const {user} = useAuthValue();
  
    const {insertDocument, response} = useInsertDocument('casas'); //Enviar os dados para a coleção products
  
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setFormError("");
  
      //Validar URL da imagem
      try {
        new URL(imageOne)
      } catch (error) {
        setFormError("A imagem precisa ser uma URL.");
      }

      try {
        new URL(imageTwo)
      } catch (error) {
        setFormError("A imagem precisa ser uma URL.");
      }

      try {
        new URL(imageThree)
      } catch (error) {
        setFormError("A imagem precisa ser uma URL.");
      }

      try {
        new URL(imageFour)
      } catch (error) {
        setFormError("A imagem precisa ser uma URL.");
      }

      try {
        new URL(imageFive)
      } catch (error) {
        setFormError("A imagem precisa ser uma URL.");
      }

      try {
        new URL(imageSix)
      } catch (error) {
        setFormError("A imagem precisa ser uma URL.");
      }
  
      //Checar todos os valores
      if (!title || !imageOne || !imageTwo || !imageThree
        || !imageFour || !imageFive || !imageSix || !body || !price || !category || !size || !method) {
        setFormError("Por favor preencha todos os campos!")
      }
  
      
  
      if (formError) return;
      
      //registro no banco
      insertDocument({
        title,
        category,
        price,
        size,
        method,
        body,
        imageOne,
        imageTwo,
        imageThree,
        imageFour,
        imageFive,
        imageSix,
        uid: user.uid,
        createdBy: user.displayName
      })
  
      //redirect para a home
      navigate("/");
    };

  return (
    <div className={styles.create_product}>
      <h2>Adicionar Casa</h2>
      <p>Adicione uma casa ao sistema.</p>
      <form onSubmit={handleSubmit} 
      action="">
        <label htmlFor="">
          <span>Título:</span>
          <input type="text" 
          name="title" 
          id="title" 
          required 
          placeholder='Título para descrever a casa.' 
          onChange={(e) => setTitle(e.target.value)}
          value={title}/>
        </label>

        <label htmlFor="">
          <span>Categoria:</span>
          <input type="text" 
          name="category" 
          id="category" 
          required 
          placeholder='Categoria da casa' 
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
            placeholder='Preço da casa.' 
            onChange={(e) => setPrice(e.target.value)}
            value={price}/>
          </label>
          <label htmlFor="">
            <span>Unidade:</span>
            <input type="text" 
            name="unity" 
            id="unity" 
            required 
            placeholder='Tamanho da casa.' 
            onChange={(e) => setSize(e.target.value)}
            value={size}/>
          </label>
        </div>

        <label htmlFor="">
          <span>Método de pagamento:</span>
          <textarea name="method" 
          id="method" 
          required 
          placeholder='Insira o método de pagamento.'
          onChange={(e) => setMethod(e.target.value)}
          value={method}>
          </textarea>
        </label>

        <label htmlFor="">
          <span>Descrição:</span>
          <textarea name="body" 
          id="body" 
          required 
          placeholder='Insira uma descrição breve da casa.'
          onChange={(e) => setBody(e.target.value)}
          value={body}>
          </textarea>
        </label>

        <label htmlFor="">
          <span>URL da primeira imagem:</span>
          <input type="text" 
          name="imageOne" 
          id="imageOne" 
          required 
          placeholder='Insira a URL da imagem do casa.' 
          onChange={(e) => setImageOne(e.target.value)}
          value={imageOne}/>
        </label>

        <label htmlFor="">
          <span>URL da segunda imagem:</span>
          <input type="text" 
          name="imageTwo" 
          id="imageTwo" 
          required 
          placeholder='Insira a URL da imagem da casa.' 
          onChange={(e) => setImageTwo(e.target.value)}
          value={imageTwo}/>
        </label>

        <label htmlFor="">
          <span>URL da terceira imagem:</span>
          <input type="text" 
          name="imageThree" 
          id="imageThree" 
          required 
          placeholder='Insira a URL da imagem da casa.' 
          onChange={(e) => setImageThree(e.target.value)}
          value={imageThree}/>
        </label>

        <label htmlFor="">
          <span>URL da quarta imagem:</span>
          <input type="text" 
          name="imageFour" 
          id="imageeFour" 
          required 
          placeholder='Insira a URL da imagem da casa.' 
          onChange={(e) => setImageFour(e.target.value)}
          value={imageFour}/>
        </label>

        <label htmlFor="">
          <span>URL da quinta imagem:</span>
          <input type="text" 
          name="imageFive" 
          id="imageeFive" 
          required 
          placeholder='Insira a URL da imagem da casa.' 
          onChange={(e) => setImageFive(e.target.value)}
          value={imageFive}/>
        </label>

        <label htmlFor="">
          <span>URL da sexta imagem:</span>
          <input type="text" 
          name="imageSix" 
          id="imageeSix" 
          required 
          placeholder='Insira a URL da imagem da casa.' 
          onChange={(e) => setImageSix(e.target.value)}
          value={imageSix}/>
        </label>
        {!response.loading && <button className='btn'>Cadastrar</button>}
        {response.loading && (
          <button className='btn' disabled>
            Aguarde...
          </button>
        )}
        {response.error && <p className='error'>{response.error}</p>}
        {formError && <p className='error'>{formError}</p>}
      </form>
    </div>
  )
}

export default AdicionarCasas