import ManController from './mvc/controllers';
import ManView from './mvc/views';
import ManModel from './mvc/models';



let manModel = new ManModel(XMLHttpRequest);
let targetElem = document.getElementById('test');
let manView = new ManView(targetElem);

var controller = new ManController(manView, manModel);
controller.initialize();

controller.onClickGetMan({currentTarget: { dataset: { manIndex: 0}}});
