import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class Connexion extends Component {
    state={
        pseudo:'',
        goToChat:false,
    }
    handleChange = (e)=> {
        this.setState({
            pseudo:e.target.value
        })
    }
    redirect=(e)=> {
        const {pseudo}= this.state
        e.preventDefault()
        if(pseudo.trim()!== ''){
            this.setState({
                goToChat:true
            })
        }
        else {
            this.setState({
                badName: `Veuillez insérer un pseudo.`
            })
        }
    }
    render() {
        const {pseudo,goToChat,badName}=this.state
        if(goToChat){
        return <Redirect push to={`/chat/${pseudo}`} />
        }
        return (
            <div>
                <h1>Connexion</h1>
                <form onSubmit={this.redirect}>
                    <input onChange={this.handleChange}/>
                    <button type='submit'>Connexion</button>
                    {badName ? <p>{badName}</p> : null}
                </form>
            </div>
        )
    }
}
