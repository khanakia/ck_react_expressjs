import React, { Component } from "react";
import { render } from 'react-dom'
import { inject, observer } from 'mobx-react';


import MatchHelper from '../helpers/MatchHelper'
import MatchTeam from './MatchTeam'
import MatchForm from './Match/MatchForm'
import MatchGrid from './Match/MatchGrid'
import {APP_URL_MATCHES} from '../Constant'

@inject('matchStore')
@observer
class Match extends Component {
    constructor(props, context) {
        super(props)
    }

    componentDidMount() {
       this.props.matchStore.fetchList()
       if (this.props.match.params.id) {
           this.props.matchStore.fetch(this.props.match.params.id).catch((err) => {
               hashHistory.push(APP_URL_MATCHES)
           })
       }
   }

    componentWillReceiveProps(nextProps) {
        // console.log(nextProps.match.params.id, this.props.match.params.id)
          if(nextProps.match.params.id!==this.props.match.params.id) {
              this.props.matchStore.fetch(nextProps.match.params.id)
          }
    }


    onFormSubmit = () => {
        if(!this.props.match.params.id) {
            this.props.matchStore.account = {}
        } else {
            this.props.matchStore.fetch(this.props.match.params.id)
        }
        this.props.matchStore.fetchList()
    }

    editItem = (id) => {
        // this.fetchMatch(id)
        this.props.history.push(APP_URL_MATCHES + "/" + id)
    }

    cancelFormClick = () => {
        this.props.matchStore.match = {}
        this.props.history.push(APP_URL_MATCHES)
    }


    matchGrid_onDataUpdate = () => {
        this.props.matchStore.fetchList()
        if(this.props.match.params.id) {
            this.props.matchStore.fetch(this.props.match.params.id)
        }
    }

    render() {
        const {matchList, match} = this.props.matchStore

        // console.log(matchList)
        return (
            <div className="page1200 mx-2">
                <h6><i className="fa fa-futbol-o"></i> Match</h6>
                <div className="row">
                    <div className="col-md-6">
                        <MatchGrid entriesList={matchList} editItem={this.editItem} onDataUpdate={this.matchGrid_onDataUpdate} />
                    </div>
                    <div className="col-md-6" >
                    {!match.is_declared && !match.is_abandoned
                        ?
                        <div>
                            <MatchForm ref="memberForm" 
                                item={match}
                                onSubmit={this.onFormSubmit} cancelFormClick={() => this.cancelFormClick()} />
                            <hr />
                        </div>
                        : ''
                    }

                        <div className="row">
                            <div className="col-md-12">
                                { match._id ?
                                <MatchTeam match={match} matchId={match._id} /> : '' }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Match;
