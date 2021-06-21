const snowMan = document.getElementById('snowMan');
snowMan.addEventListener('click', function () {
	document.getElementById('mainImage').src = "https://images4.imagebam.com/37/61/e5/ME17N09_o.jpeg";
});
snowMan.addEventListener('mouseover', function () {
	document.getElementById('popupSnow').style.display = 'block';
});
snowMan.addEventListener('mouseout', function () {
	document.getElementById('popupSnow').style.display = 'none';
});

const flower = document.getElementById('flower');
flower.addEventListener('click', function () {
	document.getElementById('mainImage').src = "https://thumbs4.imagebam.com/15/33/a5/ME17MXL_t.JPG";
});
flower.addEventListener('mouseover', function () {
	document.getElementById('popupFlower').style.display = 'block';
});
flower.addEventListener('mouseout', function () {
	document.getElementById('popupFlower').style.display = 'none';
});

const lightBulb = document.getElementById('lightBulb');
lightBulb.addEventListener('click', function () {
	document.getElementById('mainImage').src = "https://thumbs4.imagebam.com/9d/e4/50/ME17MY8_t.jpg";
});
lightBulb.addEventListener('mouseover', function () {
	document.getElementById('popupLightBulb').style.display = 'block';
});
lightBulb.addEventListener('mouseout', function () {
	document.getElementById('popupLightBulb').style.display = 'none';
});

const mainImage = document.getElementById('mainImage');
mainImage.addEventListener('click', function () {
	document.getElementById('mainImage').src = "https://images4.imagebam.com/59/3d/01/ME17MYJ_o.jpeg";
});
mainImage.addEventListener('mouseover', function () {
	document.getElementById('popupMain').style.display = 'block';
});
mainImage.addEventListener('mouseout', function () {
	document.getElementById('popupMain').style.display = 'none';
});