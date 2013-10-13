Ext.define('RM.view.TestScreen', {
	extend: 'Ext.Panel',
    requires: ['RM.component.RMAmountField3','RM.component.RMPhoneField3'],
	xtype: 'testscreen',
    
	config: {		
		layout: 'fit',        
		items: [
			{
				xtype: 'toolbar',
				docked: 'top',
				items: [
                    {
						xtype: 'component',						
						cls: 'rm-topbartitle',
						html: 'Test Screen'
					},{
						xtype: 'spacer'
					},{
                        xtype: 'button',
						text: 'SAVE',
						itemId: 'save',	                        
						ui: 'rm_topbarbuttonright'
					}
				]
			},{
             xtype: 'formpanel',
             itemId: 'testScreenForm',
             defaults: {cls: 'rm-flatfield', clearIcon: false},
             items: [{
                     xtype:'textfield',
                     label: 'Test1',
                     name: 'Test1'
                 
                 },{
                     xtype:'textfield',
                     label: 'Test2',
                     name: 'Test2',
                     placeHolder: 'enter'
                 
                 },{
                     xtype:'textfield',
                     label: 'Test3',
                     name: 'Test3'
                 
                 },{
                     xtype:'rmamountfield3',
                     label: 'Quantity',
                     name: 'Quantity',
                     labelWidth: 120,
                     rmmandatory: true,
                     readOnly: false,
                     prefix: '',
                     listeners: {
                         change: function(fld, newValue, oldValue){
                             console.log('rmamountfield change newValue=' + newValue + ', oldValue=' + oldValue);                             
                         }
                         
                     }
                 },{
                     xtype:'rmamountfield3',
                     label: 'Item Price',
                     name: 'ItemPrice',
                     labelWidth: 120,
                     placeHolder: 'enter',
                     //value: 3276767.778,
                     rmmandatory: true,
                     readOnly: false,
                     prefix: '$',
                     listeners: {
                         change: function(fld, newValue, oldValue){
                             console.log('rmamountfield change newValue=' + newValue + ', oldValue=' + oldValue);                             
                         }
                         
                     }
                 },{
                     xtype:'textfield',
                     label: 'Test5',
                     name: 'Test5'
                 
                 },{
                     xtype:'rmphonefield3',
                     label: 'Bus Phone',
                     labelWidth: 120,
                     //value: '09272387878',
                     name: 'BusPhone',
                     placeHolder: 'enter',
                     rmmandatory: true,
                     readOnly: false,
                     listeners: {
                         change: function(fld, newValue, oldValue){
                             console.log('rmphonefield change newValue=' + newValue + ', oldValue=' + oldValue);                             
                         }
                         
                     }
                 },{
                     xtype:'textfield',
                     label: 'Test6',
                     name: 'Test6'
                 
                 }]
        }        
		]
	}
});