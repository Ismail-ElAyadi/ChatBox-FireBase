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

    render() {
        const {currentMessage} = this.state
        return (
            <Fragment>
                <div>
                    AllMeSsages
                </div>
                <form onSubmit={this.sendMessage}>
                <textarea value={currentMessage} onChange={this.handleMessage}/>
                <button type='submit'>Send</button>
                </form>
            </Fragment>
        )
    }
}
