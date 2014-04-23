Ext.define('RM.view.PaySalesHistory', {
    extend: 'Ext.Panel',
    xtype: 'paysaleshistory',
    requires: 'RM.component.RMList',
    config: {
        layout: 'fit',
        items:[
            {
                xtype: 'toolbar',                
                docked: 'top',
                items: [
                    {
                        xtype: 'component',
                        html: 'Transaction history',
                        cls: 'rm-topbartitle',
                    }
                ]
            },{
                xtype: 'sortsearchbar',				
                docked: 'top',
                sortfields: [
                    {text: 'Date',  value: 'TransactionDate'}                    
                ]
            },{
                xtype: 'rmlist',
                store: 'Transactions',
                loadingText: null,  
                emptyText: 'No transactions found.',
                grouped: true,				
                itemTpl: new Ext.XTemplate(
                		'<div style= "padding-left: 30px;" class = "rm-paymethod ' + 
                			'<tpl if="PaymentMethodId == 1">'+
                                    'rm-cash'+                                            
                                '</tpl>'+ 
                                '<tpl if="PaymentMethodId == 2">'+
                                    'rm-cheque'+                                            
                                '</tpl>'+ 
                               '<tpl if="PaymentMethodId == 3">'+
                                    'rm-creditcard'+                                            
                                '</tpl>'+                               
                		'">' +
                    	'<table width = "100%">' +
                            '<tr>' +                            
                                '<td width="36%">' +
                                	'<div class="rm-fontsize80 rm-colorgrey">{[this.formatCurrency(values)]}</div>' +                    
                                '</td>' +
                            	'<td width="32%">' +
                                	'<div class="rm-fontsize80 rm-colorlightgrey">REC123456</div>' +                    
                                '</td>' +
                                '<td width="32%">' +
                            		'<div class="rm-fontsize80 rm-colorgrey rm-alignr">{[this.formatDate(values)]}</div>' + 
                            	'</td>' +                    
                            '</tr>' +            
                        '</table>' +
                    	'<div class="rm-fontsize80 rm-colorlightgrey rm-textlimit">{Description}</div>' +
                		'</div>' ,
                    {
                        formatCurrency: function(values) {
                            var amountToPay = typeof values == "undefined" ? 0 : parseFloat(values.Amount);
                            return RM.AppMgr.formatCurrency(amountToPay);
                        },
                        formatDate: function(values) {
                            return Ext.Date.format(values.TransactionDate, 'j M y');
                        }
                })				
            }
        ] 
    }
});