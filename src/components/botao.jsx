//Exercício 10

function Botao(props) {
    if (props.login === true) {
      return <input type="button" value="Sair" />;
    } else {
      return <input type="button" value="Entrar" />;
    }
  }
  
  export default Botao;