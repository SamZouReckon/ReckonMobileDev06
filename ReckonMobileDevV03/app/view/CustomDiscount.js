Ext.define('RM.view.CustomDiscount', {
    extend: 'Ext.Panel',
    xtype: 'customdiscount',
	requires: ['RM.component.DataEntryKeypad','RM.component.RMAmountField2'],
    config: {
        
        layout: 'fit',
        items: [{
            xtype: 'toolbar',
            docked: 'top',
            items: [{					
					ui: 'rm_topbarbuttonleft',
					icon: 'resources/images/icons/rm-back.png',					
					itemId: 'back',
					width: '2.6em'
				},{
					xtype: 'component',
					html: 'Custom or absolute',
					cls: 'rm-topbartitle'
				},{
					xtype:'spacer'
				},{
					text: 'SAVE',
					itemId: 'save',                    
					ui: 'rm_topbarbuttonright'
				}
            ]
        },{
            xtype: 'secureformpanel',
			//padding: 0,
			defaults: {labelWidth: 160},
			items: [{
                    xtype: 'component',
                    height: 1
                },{
					xtype: 'rmamountfield2',
					itemId: 'percentDiscount',
					label: '% discount',
                    decimalPlaces: 4,
                    prefix: '',
                    clearIcon: false,   
                    //cursorSimulate: true,
                    //readOnly: true,
                    cls: 'rm-flatfield',
					placeHolder: 'enter'
				},{
					xtype: 'rmamountfield2',
					itemId: 'absoluteDiscount',
					label: 'Absolute amount',
                    decimalPlaces: 2,
                    prefix: '$', 
                    clearIcon: false,   
                    //cursorSimulate: true,
                    //readOnly: true,
                    cls: 'rm-flatfield',
					placeHolder: 'enter',
                    border: '1 0 1 0',
                    style: 'border-color: #DBDBDB; border-style: solid;'
				}
			]
        } /*,{
			xtype:'dataentrykeypad',
			maskPin: true,
			docked: 'bottom'
		}*/
        ]
    }
});