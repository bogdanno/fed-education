function Presenter() {
	var view;
	var model;
	this.get();
	this.view(model);
}
Presenter.prototype.get = function() {
	model = new Model();
//	console.log(model);
};

Presenter.prototype.view = function(model) {
	view = new View(model);
//	console.log(view);
};

var present = new Presenter();

// Model(function(){
// 	console.log(this);
// });
