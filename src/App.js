import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// components
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import WomenHealth from './components/WomenHealth'
import WeightLoss from './components/WeightLoss'
import Contact from './components/Contact'
import PaypalButton from './components/PaypalButton'
// css
import './App.css'
// context
import UserContext from '../src/components/UserContext'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      blueNav: '#d7eff3',
    }
  }

  render() {
    return (
      <UserContext.Provider value={this.state.blueNav}>
        <BrowserRouter>
          <div className="App">
            <Switch>
              <Route path="/payment">
                <PaypalButton />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/weight-loss">
                <WeightLoss />
              </Route>
              <Route path="/women-health">
                <WomenHealth />
              </Route>
              <Route path="/about-us">
                <AboutUs />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </BrowserRouter>
      </UserContext.Provider>
    )
  }
}

export default App
