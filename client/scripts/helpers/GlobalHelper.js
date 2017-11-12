
export default class GlobalHelper {
	 static mounstrapFormInit(el) {
	    // var moustrapForm = document.querySelector('.moustrapform');
	    var moustrapFormClass = new  Mousetrap(el)
	    // console.log(moustrapFormClass)
		moustrapFormClass.stopCallback = function(e, element, combo) {
		    return element.tagName == 'BUTTON' || element.tagName == 'TEXTAREA' || (element.contentEditable && element.contentEditable == 'true');
		}
	    moustrapFormClass.bind('enter', function(e) {
	    	console.log("enter")
		    // Submit button was automaticall clicking on tabnext because both enter and tabnext event firing together so i delayed the tabnext event
		    setTimeout(function(){
		    	$.tabNext();
		    }, 50)
	    });    	
	    // moustrapFormClass.reset()

	    return moustrapFormClass
	}
}
