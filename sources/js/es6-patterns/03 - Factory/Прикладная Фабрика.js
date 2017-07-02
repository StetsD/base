function Control(){}

Control.button = function(){
    this.name = 'Button';
    this.temp = "<input type='button' value='testButton'>";             
}

Control.textBox = function(){
    this.name = 'TextBox';
    this.temp = '<input type="text">';
}

Control.radioButton = function(){
    this.name = 'radioButton';
    this.temp = '<input type="radio">'
}

Control.prototype.render = function(){
    var body = document.createDocumentFragment();
    document.body.insertAdjacentHTML('beforeEnd', this.temp)
    console.log(`${this.name} is created`);
    console.log(this);
}


Control.create = function(type){
    var result;

    if(typeof Control[type] !== 'function'){
        throw{
            name: 'Error',
            message: 'Нет такого типа'
        }
    }

    if(typeof Control[type].prototype.render !== 'function'){
        Control[type].prototype = new Control();
    }

    result = new Control[type]();

    return result;
}


var btn = Control.create('button');
var txt = Control.create('textBox');
var rbtn = Control.create('radioButton');

btn.render();
txt.render();
rbtn.render();