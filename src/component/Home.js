import React from 'react';
import AccountBalance from './AccountBalance'
import {Link} from 'react-router-dom'


export default class Home extends React.Component {
    render() {
        return (
            <div>

                <img src="https://cdn2.iconfinder.com/data/icons/finance-icons/256/Bank-128.png" alt="bank" />
                <h1>Bank of React</h1>
                
                
                <AccountBalance accountBalance={this.props.accountBalance}/>
                <Link to= './Debits'><h3>Debits</h3></Link>
                <Link to='./Credits'><h3>Credits</h3></Link>

            </div>
        )
    }
}