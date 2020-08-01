import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';



function CadastroCategoria() {

  const [categorias, setCategorias] = useState([]);

  const valoresIniciais = {
    nome: '',
    descrição: '',
    cor: '',
  }

  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor){
    setValues({
      ...values,
      [chave] : valor,
    })
  }

  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value
    );
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form onSubmit={function handleSubmit(infosDoEvento){
        infosDoEvento.preventDefault();
        console.log('Voce tentou enviar o form sksksksksks');
        setCategorias([
          ...categorias,
          values
        ]);
        
        setValues(valoresIniciais);
      }}>

      <FormField
        label="Nome da Categoria:"
        values={values.nome}
        onChange={handleChange}
        type="text"
        name="nome"
      />
        <div>
          <label>
            Descrição:
            <textarea
              type="text"
              value={values.descrição}
              name="descrição"
              onChange={handleChange}
              />
            </label>
        </div>
        <FormField
        label="Cor:"
        values={values.cor}
        onChange={handleChange}
        type="color"
        name="cor"
      />

        <button>
          Cadastrar
        </button>
      </form>
      

      <ul>
          {categorias.map((categoria,indice) => {
            return(
              <li key={`${categoria}${indice}`}>
                {categoria.nome}
              </li>
            )
          })}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;