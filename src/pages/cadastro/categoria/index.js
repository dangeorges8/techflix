import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../Components/PageDefault';
import FormField from '../../../Components/FormField';
import Button, { Wrapper } from './styles';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#801DD1',
  };

  const [categorias, setCategoria] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(infoEvent) {
    const { value } = infoEvent.target;
    setValue(
      infoEvent.target.getAttribute('name'),
      value,
    );
	}

	useEffect(() => {
    if(window.location.href.includes('localhost')) {
			const URL = window.location.hostname.includes("localhost")
			? 'http://localhost:8080/categorias'
			: 'https://trailersflix.herokuapp.com/categorias';
      fetch(URL)
       .then(async (respostaDoServer) =>{
        if(respostaDoServer.ok) {
          const resposta = await respostaDoServer.json();
          setCategoria(resposta);
          return;
        }
        throw new Error('Não foi possível pegar os dados');
       })
    }
  }, []);

	console.log(values);

  return (
    <PageDefault>
      <Wrapper>
        Cadastro de Categoria:
        {values.nome}
      </Wrapper>

      <form onSubmit={function handleSubmit(infoEvent) {
        infoEvent.preventDefault();
        console.log('form enviado');
        setCategoria([
          ...categorias,
          values,
        ]);
        setValues(valoresIniciais);
      }}
      >

        <FormField
					label='Nome da Categoria'
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />
        <FormField
					label='Descrição'
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />
        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

			{categorias.length === 0 && (
			<div>
				Loading...
			</div>
			)}

      <ul>
        {categorias.map((categoria, indice) => (
          <li key={`${categoria}${indice}`}>
            {categoria.nome}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para Home.
      </Link>

    </PageDefault>
  );
}

export default CadastroCategoria;
