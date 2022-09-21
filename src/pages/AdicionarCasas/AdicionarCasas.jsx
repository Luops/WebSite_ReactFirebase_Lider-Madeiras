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
    const [city, setCity] = useState("");
    const [uf, setUf] = useState("");
    const [bedRooms, setBedRooms] = useState("");
    const [bathRooms, setBathRooms] = useState("");
    const [car, setCar] = useState("");
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
        || !imageFour || !imageFive || !imageSix || !body || !price || !category || !size || !method
        || !city || !uf || !bedRooms || !bathRooms || !car) {
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
        city,
        car,
        uf,
        bedRooms,
        bathRooms,
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
            <span>Tamanho:</span>
            <input type="text" 
            name="size" 
            id="size" 
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

        <div className={styles.divPriceUnity}>
          <label htmlFor="">
            <span>Cidade:</span>
            <input type="text" 
            name="city" 
            id="city" 
            required 
            placeholder='Cidade que foi feita.' 
            onChange={(e) => setCity(e.target.value)}
            value={city}/>
          </label>
          <label htmlFor="">
            <span>UF:</span>
            <input type="text" 
            name="uf" 
            id="uf" 
            required 
            placeholder='Estado que foi feita.' 
            onChange={(e) => setUf(e.target.value)}
            value={uf}/>
          </label>
        </div>

        <div className={styles.divPriceUnity}>
          <label htmlFor="">
            <span>Quartos:</span>
            <input type="text" 
            name="bedrooms" 
            id="bedrooms" 
            required 
            placeholder='Quantidade de quartos.' 
            onChange={(e) => setBedRooms(e.target.value)}
            value={bedRooms}/>
          </label>
          <label htmlFor="">
            <span>Banheiros:</span>
            <input type="text" 
            name="bathrooms" 
            id="bathrooms" 
            required 
            placeholder='Quantidade de banheiros.' 
            onChange={(e) => setBathRooms(e.target.value)}
            value={bathRooms}/>
          </label>
        </div>

        <label htmlFor="">
          <span>Espaço da garagem:</span>
          <input type="text" 
          name="car" 
          id="car" 
          required 
          placeholder='Tamanho da garagem.' 
          onChange={(e) => setCar(e.target.value)}
          value={car}/>
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

export default AdicionarCasas