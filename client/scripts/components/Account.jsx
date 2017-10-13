import React, { Component } from "react";

import JqxGrid from './jqwidgets-react/react_jqxgrid.js';
import JqxComboBox from './jqwidgets-react/react_jqxcombobox.js';

import MemberForm from './Account/MemberForm.jsx'
import AccountGrid from './Account/AccountGrid.jsx'
import AccountHelper from '../helpers/AccountHelper'

import {APP_URL_ACCOUNTS} from '../Constant'
class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scount: 1,
            accountsList: [],
            item: {}
        }
    }


    componentDidMount() {
        this.fetchAccountsList()

        if(this.props.match.params.id) {
            this.fetchAccount(this.props.match.params.id)
        }
    }

    // componentWillReceiveProps(nextProps) {
    //     console.log(nextProps.match.params.id, this.props.match.params.id)
    //       if(nextProps.match.params.id!==this.props.match.params.id) {
    //           this.fetchAccount(nextProps.match.params.id)
    //       }
    // }

    fetchAccountsList = () => {
        AccountHelper.index().then( (res) => {
            this.setState({
                scount: this.state.scount+1,
                accountsList: res.data
            })
        }).catch(function(error) {
            console.log(error)
        });
    }

    fetchAccount = (account_id) => {
         AccountHelper.show(account_id).then( (res) => {
            // console.log(res.data)
            this.setState({
                scount: this.state.scount+1,
                item: res.data
            })
        })
    }

    resetForm() {
        this.setState({
            scount: this.state.scount+1,
            item: {}
        })
    }

    onFormSubmit = () => {
        this.resetForm()
        this.fetchAccountsList()
    }

    editItem = (id) => {
        this.fetchAccount(id)
        // this.props.history.push(APP_URL_ACCOUNTS + "/" + id)
    }

    cancelFormClick = () => {
        this.setState({
            scount: this.state.scount+1,
            item: {}
        })
        // this.props.history.push(APP_URL_ACCOUNTS)
    }
    render() {
        return ( 
            <div>
                <h3>Account</h3>
                <div className="row">
                    <div className="col-md-4">
                        <AccountGrid key={this.state.scount} accountsList={this.state.accountsList} onDataUpdate={this.fetchAccountsList} editItem={this.editItem} />
                    </div>
                    <div className="col-md-6">
                        
                        <MemberForm key={this.state.scount} ref="memberForm" 
                            item={this.state.item} accountsList={this.state.accountsList} 
                            onSubmit={this.onFormSubmit} cancelFormClick={() => this.cancelFormClick()} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Account;
