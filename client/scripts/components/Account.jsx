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
        this.props.accountStore.fetchList({is_company: false})
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

    onFormSubmit = (item) => {
        console.log(this.props.match.params.id)
        if(typeof this.props.match.params.id!=="undefined" && this.props.match.params.id) {
            // console.log('1')
            // this.props.accountStore.account = {}

            this.props.accountStore.fetch(this.props.match.params.id)
        } else {
            // console.log('2')
            
            // this.props.accountStore.fetch(this.props.match.params.id)

            // this.props.accountStore.account = {}
            
            this.props.accountStore.fetchList({is_company: false})
            // this.editItem(item._id)
        }
        this.props.accountStore.fetchList({is_company: false})
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
        this.props.accountStore.fetchList({is_company: false})
        if(this.props.match.params.id) {
            this.props.accountStore.fetch(this.props.match.params.id)
        }
    }

    grid_onCellClick = (rowdata) => {
        this.props.history.push(APP_URL_ACCOUNTS + "/" + rowdata._id)
    }

    render() {
        const {accountList, account} = this.props.accountStore
        return ( 
            <div className="page1200 mx-2">
                <h6><i className="fa fa-user"></i> Account</h6>
                <div className="row">
                    <div className="col-md-4">
                        <AccountGrid entriesList={accountList} editItem={this.editItem} onDataUpdate={this.accountGrid_onDataUpdate} onCellClick={this.grid_onCellClick}/>
                    </div>
                    <div className="col-md-8">
                        
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
