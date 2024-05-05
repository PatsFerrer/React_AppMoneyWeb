import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';

import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import './cad-despesa.css';

const CadDespesa = () => {

  const navigate = useNavigate();

  const { idUrl } = useParams();

  // monitorar o que é digitado nos campos
  const [valor, setValor] = useState(0);
  const [descricao, setDescricao] = useState('');
  const [categoria, setCategoria] = useState('');

  const salvarDados = () => {
    navigate('/');
  }

  return (
    <>
      <Sidebar />
      <Navbar />
      <div className='container-despesa-cad'>

        <div className='box-despesa-cad'>
          {
            idUrl == 'add' ? <h1>Nova Despesa</h1> : <h1>Editar Despesa</h1>
          }

          <div className="input-group">
            <p>Valor</p>
            <input
              type="text"
              className="input-lg w100"
              id="valor"
              onChange={(e) => setValor(e.target.value)}
            />
          </div>

          <div className="input-group">
            <p>Descrição</p>
            <input
              type="text"
              className="w100"
              id="descricao"
              onChange={(e) => setDescricao(e.target.value)}
            />
          </div>

          <div className="input-group">
            <p>Categoria</p>
            <select
              id="categoria"
              className="w100"
              onChange={(e) => setCategoria(e.target.value)}
            >
              <option value="Carro">Carro</option>
              <option value="Casa">Casa</option>
              <option value="Lazer">Lazer</option>
              <option value="Mercado">Mercado</option>
              <option value="Educação">Educação</option>
              <option value="Viagem">Viagem</option>
            </select>
          </div>

          <div className='btn-group text-right'>
            <button onClick={() => navigate('/')} className='btn btn-blue-outline'>Cancelar</button>
            <button onClick={salvarDados} className='btn btn-blue ml-20'>Salvar</button>

          </div>
        </div>

      </div>
    </>
  )
}

export default CadDespesa;