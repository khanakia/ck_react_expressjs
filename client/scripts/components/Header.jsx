import React from 'react'
import { Link } from 'react-router-dom'


class Header extends React.Component {
  state = {
    current: 'mail',
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  componentDidMount() {
    $("#jqxMenu").jqxMenu({ height: 30, showTopLevelArrows: true, keyboardNavigation: true });


  }
  render() {
    return (
        <div>
            <div id='jqxMenu'>
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li>Master
                        <ul>
                            <li><Link to={'/members'}>Parties (F1)</Link></li>
                            <li><Link to={'/teams'}>Teams (F2)</Link></li>
                            <li><Link to={'/states'}>State (ALT+S)</Link></li>
                        </ul>
                    </li>
                    <li>Match
                        <ul>
                            <li><Link to={'/matches'}>Match Master (F3)</Link></li>
                            <li><Link to={'/match_entries'}>Match Entry (F4)</Link></li>
                            <li><Link to={'/match_entry'}>Match Declaration (F5)</Link></li>
                        </ul>
                    </li>
                   <li>Setlling
                        <ul>
                            <li><Link to={'/ledger_journal'}>Journal</Link></li>
                        </ul>
                    </li>
                    <li>Reports
                        <ul>
                          <li><Link to={'/ledger_journal'}>Connect Report (F6)</Link></li>
                          <li><Link to={'/ledger_journal'}>Journal</Link></li>
                        </ul>
                    </li>
                    <li>Tools
                        <ul>
                            <li><Link to={'/ledger_journal'}>Backup</Link></li>
                        </ul>
                    </li>
                </ul>
            </div>

        </div>
    );
  }
}

export default Header;
