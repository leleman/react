export default function ComParametro(props){
    const resul = props.nota >= 8 ? 'Incrivel' : 'Mais ou menos'
    return(
        <div>
            <h2>{props.titulo}</h2>
            <h3>- {props.nome}</h3>
            <p>
                Nota: <strong>{props.nota} </strong>
                - O jogo é {resul}
            </p>
        </div>
    )
}