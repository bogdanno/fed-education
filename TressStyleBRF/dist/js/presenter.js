function Presenter() {
	var view;
	var model;
	this.get();
}
// Presenter.prototype.view = function(json) {
// 	view = new View(json);
// };

Presenter.prototype.get = function() {
	model = new Model();
	model.get("../model/data.json")
	.then(function(json) {
		view = new View(json);
		// this.view(json);
	}, function(error) {
		return console.log(error);
	});
};

var present = new Presenter();

