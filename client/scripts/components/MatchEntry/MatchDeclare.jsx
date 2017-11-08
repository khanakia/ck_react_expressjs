import React, { Component } from "react";
import ReactDOM from 'react-dom';

import JqxWindow from '../jqwidgets-react/react_jqxwindow.js';
import { URL_MATCH_TEAMS, URL_MATCH_TEAMS_SET_LOSER, URL_MATCH_TEAMS_SET_WINNER , URL_MATCH_TEAMS_SET_UNSET_LOSER} from '../../Constant'
class MatchDeclare extends Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        // matchId: null,
        onChange: function() {},
        teamList: []
    }

    componentDidMount() {
        this.refs.jqxWindow.move($(window).width() / 2 - this.refs.jqxWindow.width() / 2, $(window).height() / 2 - this.refs.jqxWindow.height() / 2)
        this.refs.jqxWindow.on('close', (event) => {            
            ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(this).parentNode);
        }); 
    }

    componentDidUpdate() {
    }

    setWinner = (matchTeamId) => {
    	axios({
            method: 'post',
            url: URL_MATCH_TEAMS_SET_WINNER,
            data: {
                match_team_id: matchTeamId
            }
        }).then((res) => {
            // console.log(res)
            this.refs.jqxWindow.close()
            this.props.onChange()
        })
    }

    setLoser = (matchTeamId) => {
    	axios({
            method: 'post',
            url: URL_MATCH_TEAMS_SET_LOSER,
            data: {
                match_team_id: matchTeamId
            }
        }).then((res) => {
            // console.log(res)
            this.refs.jqxWindow.close()
            this.props.onChange()
        })
    }

    unsetLoser = (matchTeamId) => {
    	axios({
            method: 'post',
            url: URL_MATCH_TEAMS_SET_UNSET_LOSER,
            data: {
                match_team_id: matchTeamId
            }
        }).then((res) => {
            // console.log(res)
            this.refs.jqxWindow.close()
            this.props.onChange()
        })
    }

    renderItems = () => {
    	const items = this.props.teamList
        if (items.length == 0) return null;
        return items.map((item, i) => {
            var classname_winner = item.status == "Winner" ? " table-success" : "";
            var classname_loser = item.status == "Loser" ? " table-danger" : "";
            return (
                <tr key={i} className={classname_loser + classname_winner}>
                    <td>{item.team_name}</td>
                    <td>{item.is_declared}</td>
                    <td>{item.status}</td>
                    <td>
                    	{
                    		item.status == null ?	
                    			
                    			<button onClick={() => this.setWinner(item._id)}>Winner</button>
                    			: ""
                    	}
                    	{
                    		item.status == null ?	
                    			<button onClick={() => this.setLoser(item._id)}>Loser</button>
                    			: ""
                    	}
                    	{
                    		item.status !== null && item.status !== "Winner" ?
                    			<button onClick={() => this.unsetLoser(item._id)}>Undeclare</button>
                    			: ""
                    	}
                    </td>
                    
                </tr>
            )
        });
    }

    render() {
        // console.log(this.props.teamList.slice())
        return (
            <div>
            	<JqxWindow ref='jqxWindow' autoOpen={true}
                    width={400} height={250} position={{ x: "50%", y: 175, left:"-250px" }}
                    minWidth={200} minHeight={200} maxWidth={700}
                    maxHeight={400} showCollapseButton={false}
                >
                    <div>
                        <span>
                            Match Declaration
                        </span>
                    </div>
                    <div>
                        <table className="table table-striped table-sm">
                            <thead className="thead-inverse">
                                <tr>
                                    <th>Team</th>
                                    <th>Is Declared</th>
                                    <th>Status</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderItems()}
                            </tbody>
                        </table>
                    </div>
                </JqxWindow>
            </div>
        );
    }
}

export default MatchDeclare;
