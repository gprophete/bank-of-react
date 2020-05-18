import React, { Component } from 'react'
import AccountBalance from './AccountBalance.js'

export default class CreditDisplay extends Component {
    render() {
        return (
            <div>
                <h1>Credits Display</h1>
                <div>Description:{this.props.creditDescription}</div>
                <div>Amount:{this.props.creditAmount}</div>
                <div>Date:{this.props.creditDate}</div>

                <h2><AccountBalance/></h2>
                
            </div>
        )
    }
}
