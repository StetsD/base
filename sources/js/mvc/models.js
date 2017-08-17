var ManModel = function ManModel(XMLHttpRequest){
    this.XMLHttpRequest = XMLHttpRequest;
};

ManModel.prototype.getMan = function getMan(index, fn) {
  var oReq = new this.XMLHttpRequest();

  oReq.onload = function onLoad(e) {
    var ajaxResponse = JSON.parse(e.currentTarget.responseText);
    var man = ajaxResponse[index];

    man.index = index;
    man.count = ajaxResponse.length;

    fn(man);
  };

  oReq.open('GET', 'https://codepen.io/beautifulcoder/pen/vmOOLr.js', true);
  oReq.send();

};

export default ManModel;
