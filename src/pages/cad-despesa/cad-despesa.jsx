import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import './cad-despesa.css';

const CadDespesa = () => {
  return (
    <>
      <Sidebar />
      <Navbar />
      <div className='container-despesa-cad'>

        <div className='box-despesa-cad'>
          <h1>Nova Despesa</h1>

          <div className="input-group">
            <p>Valor</p>
            <input type="text" className="input-lg w100" id="valor" />
          </div>

          <div className="input-group">
            <p>Descrição</p>
            <input type="text" className="w100" id="descricao" />
          </div>

          <div className="input-group">
            <p>Categoria</p>
            <select id="categoria" className="w100">
              <option value="Carro">Carro</option>
              <option value="Casa">Casa</option>
              <option value="Lazer">Lazer</option>
              <option value="Mercado">Mercado</option>
              <option value="Educação">Educação</option>
              <option value="Viagem">Viagem</option>
            </select>
          </div>

          <div className='btn-group text-right'>
            <button className='btn btn-blue-outline'>Cancelar</button>
            <button className='btn btn-blue ml-20'>Salvar</button>

          </div>
        </div>

      </div>
    </>
  )
}

export default CadDespesa;