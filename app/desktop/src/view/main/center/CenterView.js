Ext.define('MyApps.view.main.center.CenterView', {
	extend: 'Ext.Container',
	xtype: 'centerview',
	cls: 'centerview',
	layout: 'card',
	items : [{
		xtype:'panel',
		fullscreen: true,
		 layout : 'vbox',
		defaulters : {
			flex : 1
		},
		// items : [{
		// 	html : 'User Form',
		// 	style : 'background-color:white'
		// }],
		renderTo: document.body,
        title: 'User Form Data',
		defaultType: 'textfield',
		items: [
			{
				fieldLabel: 'First Name',
				name: 'firstName',
				width:550
			},
			{
				fieldLabel: 'Last Name',
				name: 'lastName',
				width:250
			},
			{
				xtype: 'datefield',
				fieldLabel: 'Date of Birth',
				name: 'birthDate',
				width:250,
				msgtarget:'under',
				invalidtext:'"{0}" bad. "{1}" good.'
			},
			{
				xtype: 'button',
			    text: 'Submit',
				cls :'bgsubclr',
				width:250,
				handler: function()
				{
					//alert("Submitted");
					//Ext.Msg.alert('Title', 'Basic message box in ExtJS');
					//Ext.MessageBox.alert('Rendered One', 'Tab Two was rendered.');
				}
			}
			
		]
	}]
	
});
