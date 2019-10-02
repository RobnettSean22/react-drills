import React, {Component} from 'react'

export default class Login extends Component{
    constructor(){
        super()
        this.state={
            username:'',
            password:''
        }
        this.but = this.but.bind(this)
    }
    user(input){
        this.setState({
            username:input
        })
    }
    pass(input){
        this.setState({
            password:input
        })
    }

    but(){
        alert(`Username: ${this.state.username} Password: ${this.state.password}`)
    }
    render(){
        return(
            <di>
                <input onChange={(e)=> this.user(e.target.value)}/>
                <input onChange={(e)=>this.pass(e.target.value)}/>
                <button onClick={this.but}>Login</button>
            
            </di>
        )
    }
}