
import './Tabela.css'


function Tabela(){

    return(
        <div>
            <form className='form_order' action="">
               <div className='container_input'>
                  <label htmlFor="">Código Interno</label>
                  <input type="text" />
               </div>
               <div className='container_input'>
                  <label htmlFor="">Pedido</label>
                  <input type="text" />
               </div>

               <div className='container_input'>
                  <label htmlFor="">Lojas</label>
                 <select className='select_order' name="" id="">
                    <option value="">Selecione uma loja</option>
                 </select>
               </div>
               <div className='container_input'>
                  <label htmlFor="">Data inicio</label>
                   <input type="date" />
               </div>
               <div className='container_input'>
                  <label htmlFor="">Data fim</label>
                  <input type="date" />
               </div>
               <div className='container_input'>
                  <label htmlFor="">Hora inicio</label>
                  <input type="text" />
               </div>
               <div className='container_input'>
                  <label htmlFor="">Hora fim</label>
                   <input type="text" />
               </div>
               <div className='container_botoes'>
                 
               </div>
            </form>
            <div className='container_select_tabela'>
                <div className='select_tabela1'>
                    <select name="" id="">
                        <option value=""> TABELA   DETALHADA DE PEDIDOS</option>
                    </select>
                </div>
                <div className='select_tabela2'>
                    <select name="" id="">
                        <option value=""> OCULTAR COLUNAS </option>
                    </select>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                       <th>Código</th>
                       <th>N Pedido</th>
                       <th>Loja</th>
                       <th>Cliente</th>
                       <th>Telefone</th>
                       <th>Data Pedido</th>
                       <th>Data Entrega</th>
                       <th>Hora Entrega</th>
                       <th>Pedido</th>
                       <th>Quantidade</th>
                       <th>Observação</th>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </table>
        </div>
    )
}

export default Tabela