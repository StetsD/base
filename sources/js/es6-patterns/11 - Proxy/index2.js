//Часто Используется для кэширования

var http = {
    makeRequest: function(id, callback){
        setTimeout(function(){
            callback('Data from server ' + new.Date().getTime());
        });
    }
}

//Proxy объекта http
var proxy = (function(){
    var cache = {};

    return {
        makeRequest: function(id, callback){
            if(cache[id]){
                callback(cache[id]);
            }else{
                http.makeRequest(id, function(data){
                    cache[id] = data;
                    callback(data);
                });
            }
        }
    }
})()