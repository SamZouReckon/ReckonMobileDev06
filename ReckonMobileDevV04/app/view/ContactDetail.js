Ext.define('RM.view.ContactDetail', {
	extend: 'RM.component.SecurePanel',
    requires: ['RM.component.SecureFormPanel','RM.component.SecureButton','RM.component.RMPhoneField'],
	xtype: 'contactdetail',
    
	config: {		
        permissionFor: 'Contacts',
		layout: 'fit',        
		items: [
			{
				xtype: 'toolbar',
				docked: 'top',
				items: [
					{
						ui: 'back',
						itemId: 'back',
						ui: 'rm_topbarbuttonleft',
						icon: 'resources/images/icons/rm-back.svg',
                        iconCls: 'rm-backbtniconcls',
						width: '2.6em'						
					},{
						xtype: 'component',						
						cls: 'rm-topbartitle',
						itemId: 'title'
					},{
						xtype: 'spacer'
					},{
                        xtype: 'securebutton',
						text: 'SAVE',
						itemId: 'save',	                        
						ui: 'rm_topbarbuttonright',
                        permissionFor: 'Contacts'
					}
				]
			},{
				xtype: 'secureformpanel',
                permissionFor: 'Contacts',
				itemId: 'contactForm',
				padding: 0,
                defaults:{xtype: 'exttextfield', labelWidth: 180, cls: 'rm-flatfield', placeHolder: 'enter', clearIcon: false},
				items: [
					{
						xtype: 'hiddenfield',
						name: 'ContactId'			
					},{
						name: 'Description',
						label: 'Display name',
                        maxLength: 100,
                        rmmandatory: true
					},{
                        xtype: 'extselectfield',
                        name: 'CustomerOrSupplier',
						itemId: 'customerOrSupplier',
						label: 'Customer or supplier',
                        labelWidth: '10em',                        
                        options: [                            
                            {text: 'Customer', value: 'Customers'},
                            {text: 'Supplier',  value: 'Suppliers'},
                            {text: 'Customer and Supplier',  value: 'CustomerSuppliers'}
                        ],
                        rmmandatory: true,
                        usePicker: true,						
                        autoSelect: false,                                        
						ui:'plain',
                        placeHolder: 'choose'
					},/* Set this field's value in controller class whenever its added back to form
                        {
                        xtype: 'rmtogglefield',
                        onText: 'Active',
                        offText: 'Inactive',
						label: 'Contact state',
                        name: 'IsActive',                        
                        placeHolder: '',
                        toggleState: true
					},*/
                    {
						xtype: 'extselectfield',
                        name: 'BusinessOrIndividual',
                        itemId: 'businessOrIndividual',
						label: 'Business or individual',
                        labelWidth: '11em',
                        options: [
                            {text: 'Business',  value: 'Business'},
                            {text: 'Individual', value: 'Individual'}                            
                        ],
                        rmmandatory: true,
						usePicker: true,						
                        autoSelect: false,                                        
						ui:'plain',
                        placeHolder: 'choose',
                        border: '1 0 1 0',
                        style: 'border-color: #DBDBDB; border-style: solid;'
			        },{
                        xtype: 'component',
                        itemId: 'detailHeader',    
                        hidden: true,
                        html: '<h3 class="rm-m-1 rm-hearderbg">DETAILS</h3>'
					},{
						name: 'FirstName',
						label: 'First name',
                        maxLength: 100,
                        rmmandatory: true,                        
                        hidden: true,
                        border: '0 0 1 0'
					},{
						name: 'Surname',                                       
						label: 'Surname',
                        maxLength: 100,
                        rmmandatory: true,
                        hidden: true
					},{
						name: 'BusinessName',
						label: 'Business name',
                        maxLength: 100,
                        border: '0 0 1 0',
                        rmmandatory: true,
                        hidden: true                        
					},{
						name: 'BranchName',                                       
						label: 'Branch name',
                        maxLength: 100,
                        hidden: true, 
                        border: '1 0 1 0'
					},{
                        xtype: 'container',
                        itemId: 'phoneContainer',                                        
                        layout: 'hbox',
                        hidden: true,
                        items: [{                            
                            html: 'Phone',
                            flex: 1.5,
                            cls: 'x-form-label',
                            style: 'font-size: 80%; font-weight: bold; padding-top: 0.9em; padding-left: 0.7em;'
                        },{
                            xtype: 'rmphonefield',                             
                            cls: 'rm-flatfield',                             
                            name: 'PhoneAreaCode',						    
                            placeHolder: 'area code',                            
                            flex: 2.2,
                            clearIcon: false,
                            border: '0 1 0 1 ',
                            style: 'border-color: #DBDBDB; border-style: solid;'
                        },
                        {
                            xtype: 'rmphonefield', 
                            cls: 'rm-flatfield', 
                            placeHolder: 'enter',
                            name: 'Phone',
                            flex: 3.5,
                            clearIcon: false,
                            border: '0 0 0 0 '                            
                        }]
						
					},{
                        xtype: 'container',
                        itemId: 'faxContainer',                                        
                        layout: 'hbox',
                        hidden: true,
                        items: [{                            
                            html: 'Fax',
                            flex: 1.5,
                            cls: 'x-form-label',  
                            style: 'font-size: 80%; font-weight: bold; padding-top: 0.9em; padding-left: 0.7em;'
                        },{
                            xtype: 'rmphonefield',                             
                            cls: 'rm-flatfield',                             
                            name: 'FaxAreaCode',						    
                            placeHolder: 'area code',
                            flex: 2.2,
                            clearIcon: false,
                            border: '0 1 0 1 ',
                            style: 'border-color: #DBDBDB; border-style: solid;'
                        },
                        {
                            xtype: 'rmphonefield', 
                            cls: 'rm-flatfield', 
                            placeHolder: 'enter',
                            name: 'Fax',
                            flex: 3.5,
                            clearIcon: false,
                            border: '0 0 0 0 '                            
                        }]
						
					},{
                        xtype: 'extemailfield',
						name: 'Email',  
                        hidden: true,
						label: 'Email',
                        labelWidth: '4em'
					},{
                        xtype: 'component',                                        
                        itemId: 'addressHeader',
                        hidden: true,
                        html: '<h3 class="rm-m-1 rm-hearderbg">ADDRESS</h3>'
					},{
                        name: 'Address1',                                        
                        label: 'Street1',
                        maxLength: 100,
                        hidden: true,
                        border: '0 0 1 0'
                    },{
                        name: 'Address2', 
                        hidden: true,
                        label: 'Street2',
                        maxLength: 100
                    },{
						name: 'Suburb',   
                        hidden: true,
						label: 'Suburb',
                        maxLength: 100
					},{
						name: 'State',  
                        hidden: true,
						label: 'State'
					},{
						name: 'PostCode',
                        hidden: true,
						label: 'Postcode',
                        maxLength: 100
					},{
						name: 'Country', 
                        hidden: true,
						label: 'Country',
                        maxLength: 100,
                        border: '1 0 1 0',
                        style: 'border-color: #DBDBDB; border-style: solid;'
					}              
				]
			}
		]
	}
});