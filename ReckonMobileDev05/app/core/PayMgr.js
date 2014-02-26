Ext.define('RM.core.PayMgr', {
    alternateClassName: 'RM.PayMgr',
    singleton: true,
    requires: ['RM.core.ViewMgr','RM.core.PermissionsMgr'],  

    init: function (application) {
        
    },
    
    showScreen: function (screenName, screenData, callBack, callBackScope) {   
        RM.AppMgr.showScreen.apply(this, arguments); 
    },
    
    createTransaction: function(transaction, callBack, callBackScope)
    {
        RM.AppMgr.saveServerRec('PayTransaction', true, transaction,
		    function () {                    
		        callBack.call(callBackScope);
		    },
		    this,
            function(recs, eventMsg){
                RM.AppMgr.showOkMsgBox(eventMsg);
            }
	    );
    },
    
    getTransaction: function(transactionId, callBack, callBackScope){
        RM.AppMgr.getServerRec('PayTransaction', true, transactionId,
		    function () {                    
		        callBack.call(callBackScope);
		    },
		    this,
            function(recs, eventMsg){
                RM.AppMgr.showOkMsgBox(eventMsg);
            }
	    );
    },
    
    sendReceipt: function(receipt, callBack, callBackScope){
        
    },
    
    createRefund: function(refund, callBack, callBackScope){
        
    },
    
    createTransactionHistory: function(transactionHistory, callBack, callBackScope){
        
    },
    
    readTransactionHistory: function(transactionHistoryId, callBack, callBackScope){
        
    }
});