import React, { Component } from 'react'
import CreditDisplay from './CreditDisplay.js'
import AccountBalance from './AccountBalance.js'

export default class Credits extends Component {

    state={
        creditDescription: String,
        creditAmount: Number,
        creditDate: Date,
    }
    handleChange = (evt) => {
        const newState = { ...this.state }
        newState[evt.target.name] = evt.target.value
        this.setState(newState)
    }
    handleSubmit = (evt) => {
        evt.preventDefault()
        const newState = {...this.state}
        newState[evt.target.name] = evt.target.value
        newState.redirect = true
        this.setState(newState)
    }

    getDate() {
        const creditDate = { currentTime: new Date().toLocaleString() };
    
        this.setState({
          creditDate: creditDate
        });
      }
    render() {
        return (
            <div>
         
                <form onSubmit={this.handleSubmit} >
                    <h1>Credits</h1>
                    <label> Description</label>
                    <input type="text"
                        name="creditDescription"
                        onChange={this.handleChange}
                        value={this.state.creditDescription} />

                    <label>Amount</label>
                    <input type="number"
                        name="creditAmount"
                        onChange={this.handleChange}
                        value={this.state.creditAmount} />

                     <input type="date"
                        name="creditDate"
                        onChange={this.getDate}
                        value={this.state.debits.creditDate}/>

                    <input type="submit" value="submit" onClick={this.toggleDebitDisplay}/>
                </form>
                <CreditDisplay 
                creditDescription={this.state.creditDescription}
                creditAmount={this.state.creditAmount}
                creditDate={this.state.creditDate}/>

                
                
            </div>
        )
    }
}
