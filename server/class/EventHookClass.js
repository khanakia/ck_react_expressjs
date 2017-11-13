var MatchSummaryClass = require('./MatchSummaryClass')
var MatchEntryClass = require('./MatchEntryClass')
var SessionEntryClass = require('./SessionEntryClass')


EVENTEMITTER.on('beep', function() {  
  console.log('beep');
});

EVENTEMITTER.on('accountUpdate', function(accountId) {  
  	console.log('accountUpdate hook called');
	// MatchSummaryClass.session_updateFinalWinLossAmt_onAccountUpdate(accountId)
	MatchEntryClass.updateEntriesByAccount(accountId)
	SessionEntryClass.session_updateEntries_onAccountUpdate(accountId)
});

