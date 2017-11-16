// (function(a){var c={},d=a.prototype.stopCallback;a.prototype.stopCallback=function(e,b,a,f){return this.paused?!0:c[a]||c[f]?!1:d.call(this,e,b,a)};a.prototype.bindGlobal=function(a,b,d){this.bind(a,b,d);if(a instanceof Array)for(b=0;b<a.length;b++)c[a[b]]=!0;else c[a]=!0};a.init()})(Mousetrap);

jQuery(document).ready(function(){
	window.mousetrapGlobal = new  Mousetrap()

	mousetrapGlobal.stopCallback = function(e, element, combo) {
	    return false;
	}
    mousetrapGlobal.bind('f1', function() { window.location.href = "/#/accounts" });
    mousetrapGlobal.bind('f2', function() { window.location.href = "/#/teams" });
    mousetrapGlobal.bind('f3', function() { window.location.href = "/#/matches" });
    mousetrapGlobal.bind('f4', function() { window.location.href = "/#/match_entries" });
    mousetrapGlobal.bind('f8', function() { window.location.href = "/#/journal_entries" });
    mousetrapGlobal.bind('f6', function() { window.location.href = "/#/reports/connect" });
    mousetrapGlobal.bind('f9', function() { window.location.href = "/#/report_bsheet" });
    mousetrapGlobal.bind('f7', function() {
    	var matchId = localStorage.getItem('matchId')
        if(matchId) {
            window.location.href = "/#/mdimatch/" + matchId
        }
    });


    // Mousetrap.bind('alt+s', function() { window.location.href = "/#/states" });
    // Mousetrap.bind('alt+t', function() { window.location.href = "/#/match_types" });
    // Mousetrap.bind('g o', function() { alert("dsfds")});


    if(window.currentPage=="mdiMatchPage") {
	 //    var moustrapMdiPageClass = new  Mousetrap()
		// moustrapMdiPageClass.stopCallback = function(e, element, combo) {
		//     return false;
		// }
		// moustrapMdiPageClass.bind('ctrl+1', function(e) {
	 //    	// $('#mdi-tab li:eq(0) a').tab('show')
	 //    	$mdiTab.find('li:eq(0) a').tab('show')
	 //    });

	 //    moustrapMdiPageClass.bind('ctrl+2', function(e) {
	 //    	// $('#mdi-tab li:eq(1) a').tab('show')
	 //    	$mdiTab.find('li:eq(1) a').tab('show')
	 //    });

	 //    moustrapMdiPageClass.bind('ctrl+3', function(e) {
	 //    	// $('#mdi-tab li:eq(2) a').tab('show')
	 //    	$mdiTab.find('li:eq(2) a').tab('show')
	 //    });

	 //    $mdiTab.find('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
		//   	var href = jQuery(e.target).attr('href');
		//   	console.log(href)
		//   	if(href=="#pills-match") {
		//   		jQuery(".idinput-match").focus();
		//   	}

		//   	if(href=="#pills-session") {
		//   		jQuery(".idinput-session").focus();
		//   	}

		//   	if(href=="#pills-meter") {
		//   		jQuery(".idinput-meter").focus();
		//   	}
		// })
    }


  //   function mounstrapFormInit() {
	 //    var moustrapForm = document.querySelector('.moustrapform');
	 //    var moustrapFormClass = new  Mousetrap(moustrapForm)
		// moustrapFormClass.stopCallback = function(e, element, combo) {
		//     return element.tagName == 'BUTTON' || element.tagName == 'TEXTAREA' || (element.contentEditable && element.contentEditable == 'true');
		// }
	 //    moustrapFormClass.bind('enter', function(e) {
	 //    	console.log("enter")
		//     // Submit button was automaticall clicking on tabnext because both enter and tabnext event firing together so i delayed the tabnext event
		//     setTimeout(function(){
		//     	$.tabNext();
		//     }, 50)
	 //    });    	
  //   }

 //    $('body').on('DOMNodeInserted',function(e){
	//     var target = e.target; //inserted element;
	//     	console.log(target)
	//     if(typeof target.classList!=="undefined" && target.classList.contains('moustrapform')) {
	//     	mounstrapFormInit(target)
	//     }
	    
	// });
})