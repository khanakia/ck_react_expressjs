import React, { Component } from "react";
import { inject, observer } from 'mobx-react';

import AccountGrid from './Account/AccountGrid.jsx'
import MemberForm from './Account/MemberForm.jsx'
import {APP_URL_ACCOUNTS} from '../Constant'

@inject('globalStore')
@inject('accountStore')
@observer
class Account extends Component {
    constructor(props) {
        super(props);        
    }

    componentDidMount() {
        this.props.accountStore.fetchList()
        if(this.props.match.params.id) {
            this.props.accountStore.fetch(this.props.match.params.id)
        }
    }

    componentWillReceiveProps(nextProps) {
        // console.log(nextProps.match.params.id, this.props.match.params.id)
        if(nextProps.match.params.id!==this.props.match.params.id) {
            this.props.accountStore.fetch(nextProps.match.params.id)
        }
    }

    onFormSubmit = () => {
        if(!this.props.match.params.id) {
            this.props.accountStore.account = {}
        } else {
            this.props.accountStore.fetch(this.props.match.params.id)
        }
        this.props.accountStore.fetchList()
    }

    editItem = (id) => {        
        this.props.history.push(APP_URL_ACCOUNTS + "/" + id)
    }

    cancelFormClick = () => {
        // this.resetForm()
        this.props.accountStore.account = {}
        this.props.history.push(APP_URL_ACCOUNTS)
    }

    accountGrid_onDataUpdate = () => {
        this.props.accountStore.fetchList()
        if(this.props.match.params.id) {
            this.props.accountStore.fetch(this.props.match.params.id)
        }
    }
    render() {
        const {accountList, account} = this.props.accountStore
        return ( 
            <div>
                <h5><i className="fa fa-user"></i> Account</h5>
                <div className="row">
                    <div className="col-md-4">
                        <AccountGrid entriesList={accountList} editItem={this.editItem} onDataUpdate={this.accountGrid_onDataUpdate}/>
                    </div>
                    <div className="col-md-6">
                        
                        <MemberForm ref="memberForm" 
                            item={account} accountsList={accountList} 
                            onSubmit={this.onFormSubmit} cancelFormClick={() => this.cancelFormClick()} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Account;
