import React from 'react';


import { useState, useEffect } from 'react'; //utilizar para salvar o produto no banco
import { useNavigate, useParams } from 'react-router-dom'; //redirecionar quando criar o produto
import { useAuthValue } from '../../context/authContext';
import { useFetchDocument } from '../../hooks/useFetchDocument';
import { useUpdateDocument } from '../../hooks/useUpdateDocument';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from '../../firebase/config';

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

  const [progressImagem, setProgressImagem] = useState(0)

  useEffect(() =>{

    if(product){
      setTitle(product.title);
      setCategory(product.category);
      setBody(product.body);
      setImage(product.image);
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

  const handleUploadImagem = (e) => {
    e.preventDefault();

    const file = e.target[0]?.files[0]
    if(!file) return;

    const storageRef = ref(storage, `Produtos/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      snapshot => {
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
        setProgressImagem(progress)
      },
      error => {
        alert(error)
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(urlImagem => {
          setImage(urlImagem);
        })
      }
    )
  }

  

  return (
    <div className={styles.edit_product}>
      {product && (
        <>
          <h2>Editando produto: {product.title}</h2>
          <p>Altere os dados do produto.</p>
          <p className={styles.preview_title}>Preview da imagem atual:</p>
              <div className={styles.containerPreview}>
                <img 
                className={styles.preview_image} 
                src={product.image} 
                alt={product.title} 
                />
              </div>

          <form onSubmit={handleUploadImagem} className={styles.formImagem}>
            <label htmlFor="imagem">Selecionar imagem:</label>
              <div className={styles.containerInputImagem}>
                <input type="file" name="imagem" id="imagem" />
                <button type="submit" className="btn">Anexar imagem</button>
              </div>
          </form>
          
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
                <select 
                name="category" 
                id="category"
                required
                onChange={(e) => setCategory(e.target.value)}
                value={category}
                >
                  <option value="">Selecionar</option>
                  <option value="Madeira bruta de eucalipto">Madeira bruta de eucalipto</option>
                  <option value="Madeira bruta de cedrinho">Madeira bruta de cedrinho</option>
                  <option value="Madeira bruta de pinus">Madeira bruta de pinus</option>
                  <option value="Madeira beneficiada de pinus">Madeira beneficiada de pinus</option>
                  <option value="Madeira beneficiada de eucalipto">Madeira beneficiada de eucalipto</option>
                  <option value="Madeira beneficiada nobre">Madeira beneficiada nobre</option>
                  <option value="Aberturas de eucalipto">Aberturas de eucalipto</option>
                  <option value="Parede">Parede</option>
                  <option value="Forro">Forro</option>
                  <option value="Assoalho">Assoalho</option>
                  <option value="Deck">Deck</option>
                  <option value="Meia cana">Meia Cana</option>
                  <option value="Rodape">Rodapé</option>
                  <option value="Vista de 5cm">Vista de 5cm</option>
                  <option value="Vista de 7cm">Vista de 7cm</option>
                  <option value="Pregos">Pregos</option>
                </select>
                {/* 
                <input type="text" 
                name="category" 
                id="category" 
                required 
                placeholder='Categoria do produto..' 
                onChange={(e) => setCategory(e.target.value)}
                value={category}/>
                */}
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
                  <select 
                  name="unity" 
                  id="unity"
                  required
                  onChange={(e) => setUnity(e.target.value)}
                  value={unity}
                  >
                    <option value="">Selecionar</option>
                    <option value="m²">Metro quadrado</option>
                    <option value="m">Metro</option>
                    <option value="Unidade">Unidade</option>
                  </select>
                  {/* 
                  <input type="text" 
                  name="unity" 
                  id="unity" 
                  required 
                  placeholder='Unidade a ser vendido..' 
                  onChange={(e) => setUnity(e.target.value)}
                  value={unity}/>
                  */}
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
                placeholder='Escolha acima a imagem desejada.'
                onChange={(e) => setImage(e.target.value)}
                value={image}/>
              </label>
              <div className={styles.btnEditar}>
                {!response.loading && <button className='btn'>Editar</button>}
                {response.loading && (
                  <button className='btn' disabled>
                    Aguarde...
                  </button>
                )}
              </div>
              {response.error && <p className='error'>{response.error}</p>}
              {formError && <p className='error'>{formError}</p>}
          </form>
        </>
      )}
    </div>
  )
}

export default EditProducts