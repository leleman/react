import React from 'react'
import Form from './form'
import Lista from './list'
import axios from 'axios'

const URL = 'http://localhost:3200/ws/cursos'




export default class CompromissoCadastro extends React.Component {

    initialState = {data: '', descricao: '', responsavel: '', telefone: '', cursos:[]}

    constructor(props){
        super(props)
        this.state = this.initialState;
    }

    componentWillMount(){
        axios.get(URL).then(function(response){
            this.setState({...this.state, cursos:response.data})
        }.bind(this)
        
        ) 
    }

    dataInput(e) {
        this.setState({ ...this.state, data: e.target.value })
    }
    descricaoInput(e) {
        this.setState({ ...this.state, descricao: e.target.value })
    }
    responsavelInput(e) {
        this.setState({ ...this.state, responsavel: e.target.value })
    }
    telefoneInput(e) {
        this.setState({ ...this.state, telefone: e.target.value })
    }

    render(){

        return (
            <div className="row border-bottom ">
                <div className="col-md-6">
                    <Form
                        data={this.state.data}
                        descricao={this.state.descricao}
                        responsavel={this.state.responsavel}
                        telefone={this.state.telefone}
                        
                        responsavelInput={this.responsavelInput.bind(this)}
                        dataInput={this.dataInput.bind(this)}
                        descricaoInput={this.descricaoInput.bind(this)}
                        telefoneInput={this.telefoneInput.bind(this)}
                        >                        
                    </Form>
                </div>
                <div className="col-md-6">
                    <Lista cursos={this.state.cursos}></Lista>
                </div>
            </div> 
        )
    }
}