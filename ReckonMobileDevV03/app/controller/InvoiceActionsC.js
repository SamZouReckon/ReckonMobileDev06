Ext.define('RM.controller.InvoiceActionsC', {
    extend: 'Ext.app.Controller',

    requires: ['RM.view.InvoiceActions'],
    config: {
        refs: {
            invActions: 'invoiceactions',
            invStatus: 'invoiceactions #invoiceStatus',
            invApproveBtn: 'invoiceactions #approve',
            invPayBtn: 'invoiceactions #pay',
            invEmailBtn: 'invoiceactions #email',
            warningMessage: 'invoiceactions #lockOffWarning'
        },
        control: {
            'invoiceactions': {
                show: 'onShow'
            },            
            'invoiceactions #back': {
                tap: 'back'
            },
            'invoiceactions #approve': {
                tap: 'onApprove'
            },            
            'invoiceactions #pay': {
                tap: 'onPay'
            },
            'invoiceactions #cancel': {
                tap: 'onCancel'
            },
            'invoiceactions #email': {
                tap: 'onEmail'
            },
            'invoiceactions #history': {
                tap: 'onHistory'
            }
        }

    },

    showView: function (data) {
        this.invoiceData = data;
        var view = this.getInvActions();
        if (!view){
            view = { xtype: 'invoiceactions' };
        }            
        RM.ViewMgr.showPanel(view);
    },

    onShow: function(){
        this.getInvStatus().setHtml(RM.InvoicesMgr.getInvoiceStatusText(this.invoiceData.Status));
        
        var hideApprove = !(RM.InvoicesMgr.isInvoiceStatusApprovable(this.invoiceData.Status) && RM.PermissionsMgr.canApprove('Invoices'));        
        var hideEmail = !(RM.InvoicesMgr.isInvoiceStatusEmailable(this.invoiceData.Status) && RM.PermissionsMgr.canApprove('Invoices'));
        var hidePay = !(RM.InvoicesMgr.isInvoiceStatusPayable(this.invoiceData.Status) && RM.PermissionsMgr.canAddEdit('Payments'));
                
        // Handle lock-off rules
        if(RM.CashbookMgr.getLockOffDate().getTime() >= this.invoiceData.Date.getTime()) {
            var showWarning = !(hideApprove && hidePay);
            hideApprove = true;
            hidePay = true;
            
            if(showWarning) {
                var warningMessage = this.getWarningMessage();
                warningMessage.setHtml('<strong>Note:</strong> Certain actions for this Invoice are not available because the Book is locked off until ' + RM.CashbookMgr.getLockOffDate().toLocaleDateString());
                warningMessage.setHidden(false);
            }            
        }
        
        this.getInvApproveBtn().setHidden(hideApprove);        
        this.getInvEmailBtn().setHidden(hideEmail);
        this.getInvPayBtn().setHidden(hidePay);   
    },
    
    onApprove: function () {        
        RM.AppMgr.saveServerRec('InvoiceApprove', true, {InvoiceId: this.invoiceData.InvoiceId},
			function () {
                RM.AppMgr.itemUpdated('invoice');
                RM.AppMgr.showSuccessMsgBox('Invoice ' + this.invoiceData.InvCode +' was Approved.');     
                this.invoiceData.Status = RM.Consts.InvoiceStatus.APPROVED;
                this.getInvStatus().addCls("rm-approved-hearderbg");
                this.onShow();
			},
			this,
            function(recs, eventMsg){
                RM.AppMgr.showOkMsgBox(eventMsg);
            }
		);  
    },    
    
    onPay: function () {
        RM.InvoicesMgr.showAcceptPayment(this.invoiceData);
    },

    onEmail: function () {
        RM.InvoicesMgr.sendMsg(
            function(){
                RM.ViewMgr.backTo('invoicedetail');
            },
            this,
            this.invoiceData, 
            'email'
        );
    },

    onHistory: function () {
        RM.Selectors.showHistory('Invoice', RM.Consts.HistoryTypes.INVOICE, this.invoiceData.InvoiceId);
    },

    back: function () {
        RM.ViewMgr.back();
    }

});