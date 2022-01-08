import { MainTag, ShoppingCartTag } from './styles';
import { useForm } from 'react-hook-form';


export function ShoppingCart(){

  const {register, handleSubmit, setValue, setFocus} = useForm();
  const onSubmit = (e) => {
    console.log(e);
  }

  function checkCEP(e){
    const cep = e.target.value.replace(/\D/g, '');
    console.log(cep);
    fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {
      console.log(data);
      setValue('endereço', data.logradouro);
      setValue('cidade', data.localidade);
      setValue('estado', data.uf);
      setFocus('número');
    });

    }

    function storageData(){
        localStorage.setItem('email', document.getElementById('email').value);
        localStorage.setItem('cpf', document.getElementById('cpf').value);
        localStorage.setItem('cep', document.getElementById('cep').value);
        localStorage.setItem('endereço', document.getElementById('endereço').value);
        localStorage.setItem('numero', document.getElementById('numero').value);
        localStorage.setItem('cidade', document.getElementById('cidade').value);
        localStorage.setItem('estado', document.getElementById('estado').value);

        document.cookie = `nome=${document.getElementById('nome').value}`;
        document.cookie = `nome=${document.getElementById('nome').value}`;
        document.cookie = `cpf=${document.getElementById('cpf').value}}`;
        document.cookie = `cep=${document.getElementById('cep').value}}`;
        document.cookie = `endereço=${document.getElementById('endereço').value}}`;
        document.cookie = `numero=${document.getElementById('numero').value}}`;
        document.cookie = `cidade=${document.getElementById('cidade').value}}`;
        document.cookie = `estado=${document.getElementById('estado').value}}`;
  } 

  function checkCookie(){
    console.log(document.cookie)
  }
  checkCookie()

  function checkStorage(){
    console.log(localStorage.getItem('cpf'))
  }
  checkStorage()

  return (
    <MainTag>
    <h1>Dados Pessoais</h1>
    <ShoppingCartTag>
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Nome completo <br/>
        <input id="nome" type="text" required="required"/> <br/>
      </label>
      <label>
        Email <br/>
        <input id="email" type="email" required="required"/> <br/>
      </label>
      <label>
        CPF <br/>
        <input id="cpf" type="number" placeholder="12345678901" required="required"/> <br/>
      </label>
      <label>
        CEP <br/>
        <input id="cep" type="number" placeholder="76543210" required="required" {...register("cep")} onBlur={checkCEP} /> <br/>
      </label>
      <label>
        Endereço <br/>
        <input id="endereço" className="Auth" type="text" {...register("endereço" )}/> <br/>
      </label>
      <label>
        Número <br/>
        <input id="numero" type="numero" placeholder="000" required="required" {...register("numero" )}/> <br/>
      </label>        
      <label>
        Estado <br/>
        <input id="estado" className="Auth" type="text" {...register("estado" )}/> <br/>
      </label>
      <label>
        Whatsapp <br/>
        <input id="whatsapp" type="tel" pattern="[0-9]{2}-[0-9]{5}-[0-9]{4}" placeholder="xx-xxxxx-xxxx" {...register("whatsapp" )}/><br/>
      </label>        
    </form>
    <div className="cart">
    <table>
        <thead>
            <tr>
                <th>Produto</th>
                <th>Variação</th>
                <th>Preço</th>
                <th>Totais</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td id="bg" colspan="3">Total</td>
                <td> 0 </td>
            </tr>
        </tbody>
    </table>
    <button type="submit" onClick={storageData}>Finalizar Pedido</button>
    </div>
    </ShoppingCartTag>
    </MainTag>
  );
};
