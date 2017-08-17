//Controller
var ManController = function ManController(manView, manModel){
    this.manView = manView;
    this.manModel = manModel;
}
//Controller Methods
ManController.prototype.initialize = function initialize(){
    this.manView.onClickGetMan = this.onClickGetMan.bind(this);
};

ManController.prototype.onClickGetMan = function onClickGetMan(e){
    var target = e.currentTarget;
    var index = parseInt(target.dataset.manIndex, 10);

    this.manModel.getMan(index, this.showMan.bind(this));
}

ManController.prototype.showMan = function showMan(manModelData){
    var manViewModel = {
        name: manModelData.name,
        imageUrl: manModelData.imageUrl,
        size: manModelData.size,
        favoriteFood: manModelData.favoriteFood
    };

    manViewModel.previousIndex = manModelData.index - 1;
    manViewModel.nextIndex = manModelData.index + 1;

    if(manModelData === 0){
        manViewModel.previousIndex = manModelData.count - 1;
    }

    if(manModelData.index === manModelData.count - 1){
        manViewModel.nextIndex = 0;
    }

    this.manView.render(manViewModel);
};

export default ManController;
