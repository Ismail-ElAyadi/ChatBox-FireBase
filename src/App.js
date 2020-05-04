import React, { Component} from 'react'
import Header from './compenent/Header/Header'
import Footer from './compenent/Footer/Footer'
import Body from './compenent/bodyApp/Body'
import Connexion from './compenent/Connexion/Connexion'
import './assets/css/App.css'
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import NotFound from './compenent/NotFound'
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header/>
          <Switch>
                      <Route exact path='/' component={Connexion} />
                      <Route path='/chat/:pseudo' component={Body}/>
                      <Route path='*' component={NotFound}/>
          </Switch>
        <Footer/>
      </BrowserRouter>
    )
  }
}
