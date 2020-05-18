import React, { Component } from 'react'
import Debits from './Debits.js'


export default class DebitDisplay extends Component {
    render() {

        return (
            <div>
                <h1>Debits</h1>
                
                <div>Description:{this.props.debits.debitDescription}</div>
                <div>Amount:{this.props.debits.debitAmount}</div>
                <div>Date:{this.props.debits.debitDate}</div>
            </div>
        )
    }
}
