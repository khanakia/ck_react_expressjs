import React, { Component } from "react";
import { inject, observer } from 'mobx-react';

import BackupDbGrid from './Backup/BackupDbGrid.jsx'

@inject('backupStore')
@observer
class BackupDb extends Component {

	componentDidMount() {
       this.props.backupStore.fetchDbBackupList()
    }

    backupDb = () => {
        axios.get('/backups/backup_db')
        .then((res) => {
            this.props.backupStore.fetchDbBackupList()
        })
        .catch(() => this.fetched = false);
    }


    render() {
    	const {dbBackupList} = this.props.backupStore
        return (
            <div>
         		<h5>Backup Databases</h5>
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
