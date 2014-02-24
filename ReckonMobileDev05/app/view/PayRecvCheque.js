Ext.define('RM.view.PayRecvCheque',{
    extend: 'RM.component.SecurePanel',
    xtype: 'payrecvcheque',
    config:{
        cls: 'rm-whitebg',
        items: [{
            xtype: 'toolbar',
            docked: 'top',            
            items: [{
                    itemId: 'back',
                    ui: 'rm_topbarbuttonleft',
                    icon: 'resources/images/icons/rm-back.svg',
                    iconCls: 'rm-backbtniconcls',
                    width: '2.6em',
                    iconMask: 'true'
                }, {
                    xtype: 'component',
                    itemId: 'title',
                    html: '',
                    cls: 'rm-topbartitle'
                },{
					xtype:'spacer'
				},{
    				text: 'DETAILS',
    				itemId: 'details', 
                    width: '5em',
    				ui: 'rm_topbarbuttonright'
    			}
            ]
        },{
            xtype: 'exttextfield',
            label: 'Cheque number',
            placeHolder: 'enter',
            labelWidth: '12em',
            cls: 'rm-flatfield'
        },{
            xtype: 'exttextfield',
            label: 'BSB',
            placeHolder: 'enter',
            cls: 'rm-flatfield'
        },{
            xtype: 'exttextfield',
            label: 'Account number',
            labelWidth: '9em',
            placeHolder: 'enter',
            cls: 'rm-flatfield'
        },{
            xtype: 'exttextfield',
            label: 'Drawer',
            placeHolder: 'enter',
            cls: 'rm-flatfield'
        },{
            xtype: 'extdatepickerfield',
            dateFormat : 'jS M Y',
            label: 'Date',
            cls: 'rm-flatfield'
        },{
            xtype: 'button',
            itemId: 'charge',
            text: '<span class="rm-btn-arrow">CHARGE</span>',
            cls: 'rm-photopreviewbtn',
        }
        ]
    }    
});