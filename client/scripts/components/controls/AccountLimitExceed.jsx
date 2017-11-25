import React, { PropTypes } from 'react'

class AccountLimitExceed extends React.Component {

    constructor(props) {
        super(props);
    }

    static defaultProps = {
        item: {
            limit: 0,
            balance: 0,
            matchLoss: 0,
            sessionLoss: 0,
            currentBid: 0,
            canBidAmount: 0,
        }
    }



    render() {
        const item = this.props.item
        return (
            <table className="table table-bordered table-sm">
                <tbody>
                    <tr>
                        <th>Limit:</th>
                        <td>{item.limit}</td>
                    </tr>
                    <tr>
                        <th>Balance:</th>
                        <td>{item.balance}</td>
                    </tr>
                    <tr>
                        <th>Match Loss:</th>
                        <td>{item.matchLoss}</td>
                    </tr>
                    <tr>
                        <th>Session Loss:</th>
                        <td>{item.sessionLoss}</td>
                    </tr>
                    <tr className="table-danger">
                        <th>Can Bid Amount:</th>
                        <td>{item.canBidAmount}</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default AccountLimitExceed
