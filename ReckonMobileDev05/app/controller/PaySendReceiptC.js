Ext.define('RM.controller.PaySendReceiptC',{
    extend: 'Ext.app.Controller',
    requires: 'RM.view.PaySendReceipt',
     config: {
        refs: {
            paySendReceipt: 'paysendreceipt',
            paySendReceiptTitle: 'paysendreceipt #title',
            smsFld: 'paysendreceipt textfield[name=SMS]',
            emailFld: 'paysendreceipt textfield[name=Email]',
            sentCont: 'paysendreceipt #sentcont'
        },
        control: {            
            'paysendreceipt #sendreceiptbtn': {
                tap: 'sendReceipt'
            },
            'paysendreceipt #sendreceiptbtn2': {
                tap: 'sendReceiptUsingSmsUri'
            },
            'paysendreceipt #dontsendreceiptbtn': {
                tap: 'done'
            },
            'paysendreceipt #done': {
                tap: 'done'
            }
        }
     },
    
    showView: function (data) {
        this.data = data;
        var view = this.getPaySendReceipt();
        if (!view){
            view = { xtype: 'paysendreceipt' };
        }       
        RM.ViewMgr.showPanel(view);
        this.getPaySendReceipt().setActiveItem(0);
        this.getPaySendReceiptTitle().setHtml('$' + data.Total + ' charged');
    },   
    
    done: function() {       
       RM.ViewMgr.showPay();
    },
    
    sendReceipt: function () {
        var vals = {};
        vals.SMS = this.getSmsFld().getValue();
        vals.Email = this.getEmailFld().getValue();
        if(this.validateForm(vals)){
            this.sendSMS(vals.SMS);
            this.setReceiptContent(vals)
            this.getPaySendReceipt().setActiveItem(1);
        }
        
    },
    
    sendSMS: function(phoneNumber) {
        var number = phoneNumber;
        alert('sending SMS using Cordova plugin' + phoneNumber);
        var message = 'Test msg';
        var intent = "INTENT"; //leave empty for sending sms using default intent
        var success = function () { alert('Message sent successfully'); };
        var error = function (e) { alert('Message Failed:' + e); };
        sms.send(number, message, intent, success, error);        
    },
    
    sendReceiptUsingSmsUri: function(phoneNumber) {        
        var vals = {};
        vals.SMS = this.getSmsFld().getValue();
        vals.Email = this.getEmailFld().getValue();
        if(this.validateForm(vals)){
            alert('sending SMS using SMS Uri' + phoneNumber);                    
            window.location.href = "sms:" + phoneNumber + "?body=Test msg" ; 
            this.setReceiptContent(vals)
            this.getPaySendReceipt().setActiveItem(1);
        }        
    },
    
    setReceiptContent: function(vals){
        var msg = '';
        if(vals.SMS && vals.Email) {
            msg = 'SMS and Email sent';
        }
        else if(vals.SMS) {
            msg = 'SMS sent';
        }
        else if(vals.Email) {
            msg = 'Email sent';
        }
        this.getSentCont().setHtml(msg);
    },
    
     validateForm: function(vals){        
        var isValid = true;
        
        if( !vals.SMS && !vals.Email ){
            RM.AppMgr.showErrorMsgBox('Please enter Phone number or Email or both for receipt');            
            isValid = false;
        } 
         
        if (vals.Email !== '' && !RM.AppMgr.validateEmail(vals.Email)) {             
            this.getEmailFld().showValidation(false);
            isValid = false;
            RM.AppMgr.showInvalidEmailMsg();
            return isValid;
        } 
        
        /*if(!isValid){            
            RM.AppMgr.showInvalidFormMsg();
        }*/
        
        return isValid;
    }
});