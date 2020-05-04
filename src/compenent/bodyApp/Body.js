import React, { Component } from 'react'
import Chatbox from './Chatbox'

export default class Body extends Component {
    state={
        pseudo:this.props.match.params.pseudo,
        messages:{}
    }
    sendMessage=(msg)=>{
        const {messages,pseudo}=this.state
        const allMessages = {...messages}
        allMessages[Date.now()] = msg
        this.setState({
            messages:allMessages
        })
    }
    render() {
        const {pseudo,messages}=this.state
        //const chatMessages =

        return (
            <section>
                <h1>Welcome {pseudo}</h1>
                <div>

                </div>
                <Chatbox
                sendMessage =   {this.sendMessage}
                pseudo      =   {pseudo}
                />
            </section>
        )
    }
}
