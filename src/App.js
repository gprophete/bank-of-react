import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './component/Home.js'
import UserProfile from './component/UserProfile.js'
import NavBar from './component/NavBar.js'
import Login from './component/Login.js'
import Debits from './component/Debits.js'
import DebitDisplay from './component/DebitDisplay.js'
import Credits from './component/Credits.js'
import CreditDisplay from './component/CreditDisplay.js'

class App extends React.Component {

  state = {
    accountBalance: 14958.00,
    currentUser: {
      userName: 'bob_loblaw',
      memberSince: '08/23/99',
    }
  }
  getLogin = () => {
    return (<Login
      setUserName={this.setUserName} />)
  }

  setUserName = (userName) => {
    const newState = { ...this.state }
    newState.currentUser.userName = userName
    this.setState(newState)
  }

  DebitsComponents = () => {
    return (<Debits debits={this.state.debits} />)
  }
  DebitDisplayComponents = () => {
    return (<DebitDisplay
      debitDescription={this.state.debits.debitDescription}
      debitAmount={this.state.debits.debitDescription}
      debitDate={this.state.debits.debitDate}/>)
  }

  render() {

    const UserProfileComponent = () => (
      <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince} />
    )
    return (
      <div className="App">
        <Router>

          <NavBar />

          <Switch>

            <Route exact path="/" component={() => <Home accountBalance={this.state.accountBalance} />} />
            <Route exact path="/userProfile" render={UserProfileComponent} />
            <Route exact path="/Login" component={this.getLogin} />
            <Route exact path="/Debits" component={this.DebitsComponents} />
            <Route exact path="/DebitDisplay" component={this.DebitDisplayComponents} />
            <Route exact path="/Credits" component={Credits}/>
            <Route exact path="/CreditDisplay" component={CreditDisplay}/>
          </Switch>


        </Router>
      </div>
    )
  }



}

export default App;
