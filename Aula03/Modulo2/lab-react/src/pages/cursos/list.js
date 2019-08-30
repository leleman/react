import React from 'react'

export default class CompromissoList extends React.Component {

    exibirLinhas(){
        if(this.props && this.props.cursos && this.props.cursos.length > 0){
            const {cursos} = this.props;

            return cursos.map(curso => (
                <tr key={'curso-list-'+curso._id}>
                    <td>{curso.codigo}</td>
                    <td>{curso.descricao}</td>
                    <td>{curso.cargaHoraria}</td>
                    <td>{curso.preco}</td>
                    <td>{curso.categoria}</td>
                </tr>
            ));
        }
    }

    render(){
        return (
            <div>
                <h3>Lista de Compromissos</h3>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Código</th>
                            <th>Descrição</th>
                            <th>Carga Horária</th>
                            <th>Preço</th>
                            <th>Categoria</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.exibirLinhas()}
                    </tbody>
                </table>
            </div>
        )
    }
}