var myObj;

(function(){
	//Частные члены
	var name = 'my, oh my';

	//Общедоступные члены
	myObj = {
		//Привелигированный метод
		getName: function(){
			return name;
		}
	}
}());

console.log(myObj.getName());



//Пример 2

var myObj2 = (function(){
	var name = 'my, oh my 2';

	return {
		getName: function(){
			return name;
		}
	}

}());

console.log(myObj2.getName());