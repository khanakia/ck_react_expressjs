import React, { Component } from "react";
import { inject, observer } from 'mobx-react';

import UserGrid from './User/UserGrid.jsx'
import UserForm from './User/UserForm.jsx'
import {APP_URL_USERS} from '../Constant'

import Auth from '../helpers/auth.js'


@inject('globalStore')
@inject('userStore')
@observer
class User extends Component {
    constructor(props) {
        super(props);        
    }

    componentDidMount() {
        this.props.userStore.fetchList()
        if(this.props.match.params.id) {
            this.props.userStore.fetch(this.props.match.params.id)
        }
    }

    componentWillReceiveProps(nextProps) {
        // console.log(nextProps.match.params.id, this.props.match.params.id)
        if(nextProps.match.params.id!==this.props.match.params.id) {
            this.props.userStore.fetch(nextProps.match.params.id)
        }
    }

    onFormSubmit = () => {
        // console.log(this.props.match.params.id)
        if(typeof this.props.match.params.id!=="undefined" && this.props.match.params.id) {
            // console.log('1')
            // this.props.userStore.user = {}
            this.props.userStore.fetch(this.props.match.params.id)
        } else {
            // console.log('2')
            this.props.userStore.user = {}
            // this.props.userStore.fetch(this.props.match.params.id)
        }
        this.props.userStore.fetchList()
    }

    editItem = (id) => {
        // console.log(id)
        this.props.history.push(APP_URL_USERS + "/" + id)
    }

    cancelFormClick = () => {
        // this.resetForm()
        this.props.userStore.user = {}
        this.props.history.push(APP_URL_USERS)
    }

    userGrid_onDataUpdate = () => {
        this.props.userStore.fetchList()
        if(this.props.match.params.id) {
            this.props.userStore.fetch(this.props.match.params.id)
        }
    }
    render() {
        if(!Auth.is_admin()) {
            return null;
        }
        const {userList, user} = this.props.userStore
        return ( 
            <div className="page1200 mx-2">
                <h6><i className="fa fa-user"></i> User</h6>
                <div className="row">
                    <div className="col-md-4">
                        <UserGrid entriesList={userList} editItem={this.editItem} onDataUpdate={this.userGrid_onDataUpdate}/>
                    </div>
                    <div className="col-md-8">
                        
                        <UserForm ref="userForm" 
                            item={user} accountsList={userList} 
                            onSubmit={this.onFormSubmit} cancelFormClick={() => this.cancelFormClick()} />
                    </div>
                </div>
            </div>
        );
    }
}

export default User;
