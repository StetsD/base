function test(){
	this.name = 'test module';
	this.say = function(){
		return this.name;
	}
}

module.exports = test;