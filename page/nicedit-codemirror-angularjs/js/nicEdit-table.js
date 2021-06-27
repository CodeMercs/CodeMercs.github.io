
/* TABLE */ 
var nicTableOptions = {
	buttons : {
		'table' : {name : __('Insert Table'), type : 'nicTableButton'},

	},
	iconFiles: {
		'table': 'img/nicicon_table.gif'
	}
};

var nicTableButton = nicEditorAdvancedButton.extend({

	addPane: function () {
		this.addForm({
			    '': { type: 'title', txt: 'Insert Table' },
			    'rows': { type: 'text', txt: 'Rows', value: '5', style: { width: '150px'} },
			    'cols': { type: 'text', txt: 'Columns', value: '2', style: { width: '150px'} },
			    'width': { type: 'text', txt: 'Width', value: '100%', style: { width: '150px'} }
		});
	},
	
	submit: function (e) {
		var rows = this.inputs['rows'].value;
		var cols = this.inputs['cols'].value;
		var width = this.inputs['width'].value;
		var cellw = (1/cols)*100;
		var TableCode = '<table class="table table-bordered table-striped"  width="'+ width +'"><thead><tr>';
	
		for (i=1;i<=cols;i++) {
			TableCode += '<th width="'+ cellw +'%">Header</th>';
		}
		
		TableCode += '</tr></thead><tbody>';
		
		var alternate = 'even';
		
		for (j=1;j<=rows;j++)	{
		
			TableCode += '<tr>';
		
			for (i=1;i<=cols;i++)	{
				TableCode += '<td width="'+ cellw +'%" class="'+ alternate +'">Content</td>';
			}
		
			TableCode += '</tr>';
			
			if (alternate == 'even') {
				var alternate = 'odd';
			} else {
				var alternate = 'even';
			}
		
		}
		
		TableCode += '</tbody></table><br />'; 
		this.removePane();
		this.ne.nicCommand('insertHTML', TableCode);
	}
});

nicEditors.registerPlugin(nicPlugin,nicTableOptions);