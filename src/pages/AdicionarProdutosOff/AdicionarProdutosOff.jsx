import React from 'react';


import { useState } from 'react'; //utilizar para salvar o produto no banco
import { useNavigate } from 'react-router-dom'; //redirecionar quando criar o produto
import { useAuthValue } from '../../context/authContext'; //context que verifica a autenticação do usuário na página
import { useInsertDocument } from '../../hooks/useInsertDocument'; //hook que salva os dados no banco
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from '../../firebase/config';

import styles from './AdicionarProdutosOff.module.css'

const AdicionarProdutosOff = () => {
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

  const [progressImagem, setProgressImagem] = useState(0)
  

  const {user} = useAuthValue();

  const {insertDocument, response} = useInsertDocument('productsOff'); //Enviar os dados para a coleção productsOff

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
    insertDocument({
      title,
      category,
      percent,
      oldPrice,
      newPrice,
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

  const handleUploadImagem = (e) => {
    e.preventDefault();

    const file = e.target[0]?.files[0]
    if(!file) return;

    const storageRef = ref(storage, `Produtos com desconto/${file.name}`);
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
    <div className={styles.create_product}>
      <h2>Adicionar produto em promoção</h2>
      <p>Adicione um produto em promoção ao sistema.</p>

      <form onSubmit={handleUploadImagem} className={styles.formImagem}>
        <label htmlFor="imagem">Selecionar imagem:</label>
          <div className={styles.containerInputImagem}>
            <input type="file" name="imagem" id="imagem"/>
            <button type="submit" className="btn">Anexar imagem</button>
            {image && <p className={styles.msgSucesso}>Anexado com sucesso!</p>}
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
            <option value="Kit casa">Kit casa</option>
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
            <span className={styles.title_Price}>Preço antigo:</span>
            <input type="text" 
            name="oldPrice" 
            id="oldPrice" 
            required 
            placeholder='Preço do produto sem R$.' 
            onChange={(e) => setOldPrice(e.target.value)}
            value={oldPrice}/>
          </label>
          <label htmlFor="">
            <span className={styles.title_Price}>Preço promoção:</span>
            <input type="text" 
            name="newPrice" 
            id="newPrice" 
            required 
            placeholder='Preço do produto sem R$.' 
            onChange={(e) => setNewPrice(e.target.value)}
            value={newPrice}/>
          </label>
        </div>

        <label htmlFor="">
            <span>Unidade do produto:</span>
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
          placeholder='Insira a porcentagem de desconto do produto. Coloque o símbolo de %.'
          onChange={(e) => setPercent(e.target.value)}
          value={percent}>
          </textarea>
        </label>

        <label htmlFor="" className={styles.inputImagem}>
          <span>Imagem:</span>
          <input type="text" 
          name="image" 
          id="image" 
          required 
          placeholder='Insira a URL da imagem do produto..'
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

export default AdicionarProdutosOff