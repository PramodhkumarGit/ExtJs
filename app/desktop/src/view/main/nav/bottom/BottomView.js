Ext.define('MyApps.view.main.nav.bottom.BottomView', {
	extend: 'Ext.Toolbar',
	xtype: 'bottomview',
	cls: 'bottomview',
	shadow: false,
	items: [
	{
			xtype: 'button',
			ui: 'bottomviewbutton',
			iconCls: 'x-fa fa-angle-double-left',
			text: 'Logout',
			handler: 'onBottomViewlogout'
		},
		{
			xtype: 'button',
			ui: 'bottomviewbutton',
			iconCls: 'x-fa fa-angle-double-left',
			text: 'Logout12',
			handler: 'onBottomViewlogout'
		}
	]
});
