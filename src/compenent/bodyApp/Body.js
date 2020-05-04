import React, { Component } from 'react'
import Chatbox from './Chatbox'

export default class Body extends Component {
    state={
        pseudo:null,
        messages:{}
    }
    render() {
        return (
            <section>
                <h1>ChatBox</h1>
                <Chatbox/>
            </section>
        )
    }
}
