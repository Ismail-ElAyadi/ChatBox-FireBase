import React, { Component,Fragment } from 'react'

export default class Chatbox extends Component {
    state = {
        currentMessage:''
    }
handleMessage = (e)=> {
    this.setState({
        currentMessage:e.target.value
    })
}
sendInfo=(e)=> {
    const {currentMessage} = this.state
    e.preventDefault()
    if(currentMessage.trim() !== '')
    {
        this.props.sendMessage(currentMessage)
        this.setState({
        currentMessage:'',
        messageEmpty:false
        })
    }
    else
    {
        this.setState({
            messageEmpty:'No message to send :('
        })
    }

}
    render() {
        const {currentMessage,messageEmpty} = this.state
        return (
            <Fragment>
                <div>
                    AllMeSsages
                </div>
                <form onSubmit={this.sendInfo}>
                <textarea value={currentMessage} onChange={this.handleMessage}/>
                <button type='submit'>Send</button>
                {messageEmpty ? <p>{messageEmpty}</p>:null}
                </form>
            </Fragment>
        )
    }
}
