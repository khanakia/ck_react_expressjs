var MatchSummaryClass = require('./MatchSummaryClass')
var MatchEntryClass = require('./MatchEntryClass')
var SessionEntryClass = require('./SessionEntryClass')

// var EventEmitter = require('events').EventEmitter;

// var emitter = new EventEmitter();

emitter.on('beep', function() {  
  console.log('beep');
});

emitter.on('accountUpdate', function(accountId) {  
  	console.log('accountUpdate hook called');
	// MatchSummaryClass.session_updateFinalWinLossAmt_onAccountUpdate(accountId)
	MatchEntryClass.updateEntriesByAccount(accountId)
	SessionEntryClass.session_updateEntries_onAccountUpdate(accountId)
});


// module.exports =  emitter