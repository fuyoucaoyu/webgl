
var init = function () {
	var c0 = document.getElementById('canvas0');
	var c1 = document.getElementById('canvas1');
	var c2 = document.getElementById('canvas2');

	var ctx0 = c0.getContext('2d');
	var ctx1 = c1.getContext('2d');
	var ctx2 = c2.getContext('2d');

	var image = new Image();
	image.onload = function (evt) {
		ctx0.drawImage(image, 0, 0);
		ctx1.drawImage(image, 0, 0);
		ctx2.drawImage(image, 0, 0);
	}
	image.src = './test.png';
}