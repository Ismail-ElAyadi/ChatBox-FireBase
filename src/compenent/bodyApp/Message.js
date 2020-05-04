import React, { Component } from 'react'

export default class Message extends Component {

    render() {
        const {pseudo,message,date,time}=this.props
        return (
            <div>
                {pseudo}
                {message}
                {date}
                {time}
            </div>
        )
    }
}
