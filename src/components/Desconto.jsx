//Exercício07

const Desconto = ({desconto}) =>{
    return(
    <div>
    {desconto ? "Tem desconto" : "Não tem desconto"};
    </div>
    )
}
export default Desconto;