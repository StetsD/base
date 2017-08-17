//View
var ManView = function ManView(elem){
    this.elem = elem;

    this.onClickGetMan = null;
}

ManView.prototype.render = function render(viewModel){
    this.elem.innerHTML = '<h3>' + viewModel.name + '</h3>' +
    '<img class="man-image" src="' + viewModel.imageUrl +
      '" alt="' + viewModel.name + '" />' +
    '<p><b>Size:</b> ' + viewModel.size + '</p>' +
    '<p><b>Favorite food:</b> ' + viewModel.favoriteFood + '</p>' +
    '<a id="previousMan" style="border:1px solid black;color: black;" class="previous button" href="javascript:void(0);"' +
      ' data-man-index="' + viewModel.previousIndex + '">Previous</a> ' +
    '<a id="nextMan" style="border:1px solid black;color: black;" class="next button" href="javascript:void(0);"' +
      ' data-man-index="' + viewModel.nextIndex + '">Next</a>';

      this.previousIndex = viewModel.previousIndex;
      this.nextIndex = viewModel.nextIndex;

      var previousMan = this.elem.querySelector('#previousMan');
      previousMan.addEventListener('click', this.onClickGetMan);

      var nextMan = this.elem.querySelector('#nextMan');
      nextMan.addEventListener('click', this.onClickGetMan);
      nextMan.focus();
}

export default ManView;
