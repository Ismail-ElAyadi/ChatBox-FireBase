import React, { Component , Fragment} from 'react'
import Header from './compenent/Header/Header'
import Body from './compenent/bodyApp/Body'
import './assets/css/App.css'
export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Header/>
        <Body/>
      </Fragment>
    )
  }
}
