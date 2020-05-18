import React, { Component } from 'react'

import { Redirect } from 'react-router-dom'
import {Link} from 'react-router-dom'
import DebitDisplay from './DebitDisplay'


export default class Debits extends Component {
    state = {
        debits: {
            debitDescription: String,
            debitAmount: Number,
            
        },
        debitDate: " ",
        redirect: false

    }
    handleChange = (evt) => {
        const newState = { ...this.state }
        newState.debits[evt.target.name] = evt.target.value
        this.setState(newState)
    }
    handleSubmit = (evt) => {
        evt.preventDefault()
        const newState = {...this.state}
        newState.debits[evt.target.name] = evt.target.value
        newState.redirect = true
        this.setState(newState)
    }
    // toggleDebitDisplay = () => {
    //     const showDebits = !this.state.showDebits
    //     this.setState({ showDebits })
    // }
    
    getDate() {
        const debitDate = { currentTime: new Date().toLocaleString() };

        this.setState({
          debitDate: debitDate
        });
      }



    render() {
        if(this.state.redirect){
            return(<Redirect to="/DebitDisplay"/>)
        }
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <h1>Debits</h1>
                    <label> Description</label>
                    <input type="text"
                        name="debitDescription"
                        onChange={this.handleChange}
                        value={this.state.debits.debitDescription} />

                    <label>Amount</label>
                    <input type="number"
                        name="debitAmount"
                        onChange={this.handleChange}
                        value={this.state.debits.debitAmount} />
                    <input type="date"
                        name="debitDate"
                        onChange={this.getDate}
                        value={this.state.debits.debitDate}/>

                    <input type="submit" value="submit" onClick={this.toggleDebitDisplay}/>

                    {/* <div>Date</div> */}

                    {/* <input type="text" name="debitDate" value={this.state.debits.debitDate} /> */}



                </form>
           
                <DebitDisplay debits={this.state.debits}/>
                </div>
        )
    }
}
