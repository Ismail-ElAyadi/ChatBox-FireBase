import React, { Component } from 'react'
import Chatbox from './Chatbox'
import Message from './Message'

export default class Body extends Component {
    state={
        pseudo:this.props.match.params.pseudo,
        messages:{}
    }
    sendMessage=(msg)=>{
        const {messages,pseudo}=this.state
        const allMessages = {...messages}
        const date = new Date()
        //msg.date= new Date().toLocaleDateString()
        allMessages[Date.now()] = {
            pseudo,
            message:msg,
            date:   `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`,
            time:   `${date.getHours()}:${date.getMinutes()}`
        }
        this.setState({
            messages:allMessages
        })
    }
    render() {
        const {pseudo,messages}=this.state
        const chatMessages = Object.keys(messages).map(e => {
            const msg = messages[e]
            return(
                <Message
                pseudo={msg.pseudo}
                message={msg.message}
                date={msg.date}
                time={msg.time}
                />
            )
        })

        return (
            <section>
                <h1>Welcome {pseudo}</h1>
                <div>
                {chatMessages}
                </div>
                <Chatbox
                sendMessage =   {this.sendMessage}
                pseudo      =   {pseudo}
                />
            </section>
        )
    }
}
