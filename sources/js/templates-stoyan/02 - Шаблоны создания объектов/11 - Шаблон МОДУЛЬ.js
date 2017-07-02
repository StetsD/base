// Первый шаг заключается в создании пространства имен.
MYAPP.namespace('MYAPP.utilities.array');

//Следующий шаг – определение модуля. На этом этапе используется не-
// медленно вызываемая функция, образующая частную область видимо-
// сти, если это необходимо.
MYAPP.utilities.array = (function(){
	//зависимости
	var uObj = MYAPP.utilities.objectMethod,
		uLang = MYAPP.utilities.langMethod,

	//Частные Свойста
		arrayString = '[object Array]',
		ops = Object.prototype.toString;

	//Частные Методы
	inArray = function(needle, naystack){
			for(var i = 0, max = haystack.length; i < max; i++){
				if(haystack[i] === needle){
					return true;
				}
			}
		}
	// ...

	//Общедоступные члены
	return {
		inArray: inArray,
		isArray: function(a){
			return ops.call(a) === arrayString;
		}
		//Другие методы и с-ва
	}
}());