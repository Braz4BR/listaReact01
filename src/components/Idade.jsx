//Exercício04
function Idade(props){
    if(props.idade >= "18"){
        return (<h1>Você é maior de idade!</h1>)
    }else{
        return (<h1>Você é de meno</h1>)
    }
}

export default Idade;