import React, { Component } from "react";
import { inject, observer } from 'mobx-react';

import BackupDbGrid from './Backup/BackupDbGrid.jsx'

import BackupHelper from '../helpers/BackupHelper'

@inject('backupStore')
@observer
class BackupDb extends Component {

	componentDidMount() {
       this.props.backupStore.fetchDbBackupList()
    }

    backupDb = () => {
        // axios.get('/backups/backup_db')
        BackupHelper.createDbBackup()
        .then((res) => {
            this.props.backupStore.fetchDbBackupList()
        })
        .catch(() => this.fetched = false);
    }


    render() {
    	const {dbBackupList} = this.props.backupStore
        return (
            <div className="page d-inline-block mx-2">
                <h6><i className="fa fa-bar-chart"></i> Backup Database</h6>
         		<div className="mb-1">
                    <button className="btn btn-sm btn-primary" onClick={this.backupDb}>Backup DB</button>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <BackupDbGrid entriesList={dbBackupList} onDataUpdate={this.backupDbGrid_onDataUpdate}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default BackupDb;
