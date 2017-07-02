var obj = ({
	name: 'Boris',
	surname: 'Britva',
	getFullName: function(){
		console.log(this.name + " " + this.surname);
	},
	init: function(){
		this.getFullName();
		console.log('The obj is init');
	}

}).init();