//Exercício06

function VerificadorNotas(props){
    if (props.notas >= 90) {
        return(<h1>Excelente</h1>);
    } else if (props.notas <= 89 && props.notas >= 70 ) {
        return(<h1>Bom</h1>);
    } else {
        return(<h1>Precisa Melhorar</h1>);
    }
}

export default VerificadorNotas;