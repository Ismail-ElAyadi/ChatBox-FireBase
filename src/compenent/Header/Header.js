import React, { Component } from 'react'
import logo from'../../assets/svg/chatIcone.svg'
export default class Header extends Component {
    render() {
        return (
            <header>

                    <nav className="navbar navbar-light bg-light">
                    <a className="navbar-brand" href>
                        <img src={logo} width="30" height="30"
                        className="d-inline-block align-top mr-2" alt=""/>
                        ChatBox-App
                    </a>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <button className="btn bg-dark text-light mr-3"> Change Pseudo </button>
                            </li>
                    </ul>
                    </nav>
            </header>
        )
    }
}
