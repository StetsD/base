var myModule = function(){
	var evento = MYAPP.util.evento,
		dom = MYAPP.servise.dom,
		ajaxSend = MYAPP.service.ajaxSend;

	//Остальная часть ф-ии использует evento, dom, ajaxSend;
	evento('something')
}