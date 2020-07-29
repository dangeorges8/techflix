import React, { useState } from 'react';
import PageDefault from '../../../Components/PageDefault';
import { Link } from 'react-router-dom';
import FormField, {FormField2} from '../../../Components/FormField';
import { Wrapper } from './styles';
import Button from './styles';


function CadastroCategoria(){
const valoresIniciais = {
  nome: '',
  descricao: '',
  cor: '#801DD1',
}

const [categorias, setCategoria] = useState([]);
const [values, setValues] = useState(valoresIniciais);

function setValue(chave,valor) {
  setValues({
    ...values,
    [chave]: valor,
  })
}

function handleChange(infoEvent) {
  const { value } = infoEvent.target;
  setValue(
    infoEvent.target.getAttribute('name'),
    value
  )
}

console.log(values)

  return (
    <PageDefault>
      <Wrapper>Cadastro de Categoria: {values.nome}</Wrapper>
      
      <form onSubmit={ function handleSubmit(infoEvent) {
        infoEvent.preventDefault();
        console.log('form enviado');
        setCategoria([
          ...categorias,
          values
        ]);
        setValues(valoresIniciais)
      }}>
        
        <FormField
          
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
          placeholder="Nome da Categoria"
        />
        <FormField2
          
          type="text"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
          placeholder="Descrição"
        />
        <FormField
          label="Cor: "
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>

      <Link to="/">
        Ir para Home.
      </Link>

    </PageDefault>
  )
}

export default CadastroCategoria;