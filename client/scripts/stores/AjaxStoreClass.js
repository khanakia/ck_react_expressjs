import { observable, action } from 'mobx';

class AjaxStoreClass {
	@observable ajaxRunningCount = 0;
	
	@action increment() {
	    ++this.ajaxRunningCount;
	}

	@action decrement() {
		if(this.ajaxRunningCount<=0) {
			this.ajaxRunningCount = 0
		} else {
	    	--this.ajaxRunningCount;
		}
	}
}



export default new AjaxStoreClass();
