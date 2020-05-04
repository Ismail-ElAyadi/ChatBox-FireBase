import React, { Component } from 'react'
import logo from'../../assets/svg/chatIcone.svg'
export default class Header extends Component {
    render() {
        return (
            <header>

                    <nav className="navbar navbar-light bg-light">
                    <a className="navbar-brand col-md-6" href>
                        <img src={logo} width="30" height="30"
                        className="d-inline-block align-top mr-2" alt=""/>
                        ChatBox-App
                    </a>
                    <ul className="navbar-nav mr-auto col-4 d-flex flex-row justify-content-around">
                        <li className="nav-item col-6">
                            <button className="btn bg-dark text-light mr-3"> Rename </button>
                        </li>
                        <li className="nav-item col-6">
                            <button className="btn bg-dark text-light mr-3"> About </button>
                        </li>
                    </ul>
                    </nav>
            </header>
        )
    }
}
