
export const APP_TITLE = 'London BetExchange v1.0';
export const APP_ROOT_HOST = 'http://localhost:3000';

export const DEFAULT_DATE_FORMAT = "ll"
export const LOCALSTORAGE_MATCHID = "matchId"
export const LOCALSTORAGE_SESSIONID = "sessionId"
export const LOCALSTORAGE_METERID = "meterId"
export const MATCH_TEAM_STATUS_WINNER = "Winner"
export const MATCH_TEAM_STATUS_LOSER = "Loser"
export const MATCH_TYPE_CUP = "Cup"
export const MATCH_TYPE_ONEDAY = "One Day"
export const LABEL_YES = "Yes"
export const LABEL_NO = "No"


export const APP_URL_DASHBOARD = '/dashboard';
export const APP_URL_PAGE_USERS = '/users';
export const APP_URL_ACCOUNTS = '/accounts';
export const APP_URL_TEAMS = '/teams';
export const APP_URL_MATCHES = '/matches';
export const APP_URL_MDI_MATCH = '/mdimatch';
export const APP_URL_MATCH_ENTRIES = '/match_entries'
export const APP_URL_JOURNALS = '/journals'
export const APP_URL_JOURNAL_ENTRIES = '/journal_entries'
export const APP_URL_REPORT_BSHEET = '/report_bsheet'
export const APP_URL_REPORT_JOURNAL_SUMMARY = '/report_journal_summary'
export const APP_URL_REPORT_PL_MATCH_WISE = '/reports/pl_matchwise'
export const APP_URL_REPORT_PL_MATCH_ACCOUNTWISE = '/reports/pl_match_accountwise'
export const APP_URL_REPORT_CONNECT = '/reports/connect'
export const APP_LOCATION_HREF_MDI_MATCH = '/#' + APP_URL_MDI_MATCH + '/'
export const APP_URL_LIVE_COMMENTARY = '/live/commentary'
export const APP_URL_PAGE_CHANGE_PASSWORD = '/changepassword'
export const APP_URL_PAGE_LIVE_MATCH_SCHEDULE = '/live/match_schedule'
export const APP_URL_PAGE_SERVER_STATUS = '/server_status'
export const APP_URL_PAGE_REMOVE_ALL_RECORD = '/remove_all_record'
export const APP_URL_PAGE_BACKUPDB = '/backupdb'
export const APP_URL_PAGE_ACTIVITY_LOG = '/activity_log'


export const API_URL_USER = '/users';
export const API_URL_CHANGE_PWD = '/users/changepassword';
export const API_URL_ACCOUNTS = '/accounts';
export const API_URL_TEAMS = '/teams';
export const API_URL_JOURNAL_ENTRIES = '/journal_entries'
export const API_URL_JOURNAL_ACCOUNT_BALANCE = ((id) => { return `${API_URL_JOURNAL_ENTRIES}/account/${id}/balance` })
export const API_URL_MATCHES = '/matches';
export const API_URL_MATCH_ABANDON = API_URL_MATCHES + '/abandon';
export const API_URL_MATCH_UNABANDON = API_URL_MATCHES + '/unabandon';
export const API_URL_MATCH_UNDECLARE = API_URL_MATCHES + '/undeclare';
export const API_URL_MATCH_TEAMS = '/match_teams';
export const API_URL_MATCH_TEAM_SET_LOSER = API_URL_MATCH_TEAMS + '/set_loser';
export const API_URL_MATCH_TEAM_SET_WINNER = API_URL_MATCH_TEAMS + '/set_winner';
export const API_URL_MATCH_TEAM_SET_UNSET_LOSER = API_URL_MATCH_TEAMS + '/unset_loser';
export const API_URL_MATCH_ENTRIES = '/match_entries'
export const API_URL_MATCH_ENTRIES_PLINFO = API_URL_MATCH_ENTRIES + "/match_plinfo"
export const API_URL_METERS = '/meters'
export const API_URL_METER_ENTRIES = '/meter_entries'
export const API_URL_METER_ENTRIES_PLINFO = API_URL_METER_ENTRIES + "/meter_plinfo"
export const API_URL_METER_ENTRIES_WINLOSSLIST = API_URL_METER_ENTRIES + "/winlosslist"
export const API_URL_SESSIONS = '/sessions';
export const API_URL_SESSION_ENTRIES = '/session_entries';
export const API_URL_SESSION_ENTRIES_PLINFO = API_URL_SESSION_ENTRIES + "/session_plinfo"
export const API_URL_SESSION_ENTRIES_WINLOSSLIST = API_URL_SESSION_ENTRIES + "/winlosslist"
export const API_URL_BACKUPS = '/backups';
export const API_URL_BACKUPS_LISTDBFILES = API_URL_BACKUPS + '/list_db_backup_files';
export const API_URL_BACKUPS_BACKUP_DB = API_URL_BACKUPS + '/backup_db';
export const API_URL_BACKUPS_RESTORE_DB = API_URL_BACKUPS + '/restore_db';
export const API_URL_LIVE_MATCHSCHEDULES = '/liveapis/match_schdules'
export const API_URL_REPORTS = '/reports'
export const API_URL_REPORTS_JOURNAL_SUMMARY = API_URL_REPORTS + '/journal_summary'
export const API_URL_REPORTS_CONNECT_LIST_MATCHES = API_URL_REPORTS + '/connect_list_matches'
export const API_URL_REPORTS_CONNECT_REPORT = API_URL_REPORTS + '/connect_report'
export const API_URL_REPORTS_BALANCE_SHEET = API_URL_REPORTS + '/balance_sheet'
export const API_URL_REPORTS_PL_MATCH_ACCOUNTWISE = API_URL_REPORTS + '/pl_match_accountwise'
export const API_URL_REPORTS_PL_MATCHWISE = API_URL_REPORTS + '/pl_matchwise'
export const API_URL_REPORTS_ACTIVITY_LOG = API_URL_REPORTS + '/activity_log'
export const API_URL_OTHERS = '/others'
export const API_URL_OTHERS_SERVER_DBSTATUS = API_URL_OTHERS + "/server_db_status"
export const API_URL_OTHERS_START_DB_SERVER = API_URL_OTHERS + "/server_startdb"
export const API_URL_OTHERS_REMOVE_ALL_RECORDS = API_URL_OTHERS + "/remove_all_records"
export const API_URL_OTHERS_REMOVE_LEDGER_RECORDS = API_URL_OTHERS + "/remove_ledger_records"
export const API_URL_OTHERS_CLEAR_WHOLE_DB = API_URL_OTHERS + "/clear_wholedb"
export const API_URL_OTHERS_START_ANYDESK = API_URL_OTHERS + "/start_anydesk"
export const API_URL_OTHERS_START_AMMY = API_URL_OTHERS + "/start_ammy"
export const API_URL_EXPORTS = '/exportreports'
export const API_URL_EXPORTS_BALANCE_SHEET = API_URL_EXPORTS + '/balance_sheet'
export const API_URL_EXPORTS_CONNECT_REPORT = API_URL_EXPORTS + '/connect_report'
export const API_URL_EXPORTS_PL_MATCH_ACCOUNTWISE = API_URL_EXPORTS + '/pl_match_accountwise'
export const API_URL_EXPORTS_PL_MATCHWISE = API_URL_EXPORTS + '/pl_matchwise'


// export const URL_MATCHES = '/matches';
// export const URL_MATCH_TEAMS = '/match_teams';
// export const URL_MATCH_TEAMS_SET_LOSER = '/match_teams/set_loser';
// export const URL_MATCH_TEAMS_SET_WINNER = '/match_teams/set_winner';
// export const URL_MATCH_TEAMS_SET_UNSET_LOSER = '/match_teams/unset_loser';
// export const URL_MATCH_TEAMS_SET_UNDECLARE_MATCH = '/match_teams/undeclare_match';
// export const URL_MATCH_ENTRIES = '/match_entries';
// export const URL_MATCH_ENTRIES_MATCH = '/match_entries/match';
// export const URL_MATCH_ENTRIES_TEAM_WINLOSSS_LIST = '/match_entries/team_winloss_list';
// export const URL_SESSIONS = '/sessions';
// export const URL_SESSION_ENTRIES = '/session_entries';
// export const URL_SESSION_ENTRIES_WINLOSSS_LIST = '/session_entries/winlosslist';



export const LIST_COMM_TYPE = [
    { id: "net", text: "Net" },
    { id: "entrywise", text: "Entry Wise" }
]

export const LIST_STATUS_BOOLEAN = [
    { id: "true", text: "Yes" },
    { id: "false", text: "No" }
]

export const LIST_MATCH_TYPE = [
    { id: "One Day", text: "One Day" },
    { id: "Twenty-20", text: "Twenty-20" },
    { id: "Test", text: "Test" },
    { id: "Cup", text: "Cup" }
]

export const LIST_SESSION_YN = [
    { id: "Y", text: "Y" },
    { id: "N", text: "N" }
]

export const LIST_YN = [
    { id: "Y", text: "Y" },
    { id: "N", text: "N" }
]


export const LIST_MATCH_LK = [
    { id: "L", text: "L" },
    { id: "K", text: "K" }
]