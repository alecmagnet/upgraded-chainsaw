const blankSpace1 = document.getElementById('blankSpace1');
const blankSpace2 = document.getElementById('blankSpace2');
function hideBlankSpace(element) {
	element.style.display = 'none';
};
function showBlankSpace(element) {
	element.style.display = 'block';
};

const snowMan = document.getElementById('snowMan');
snowMan.addEventListener('click', function () {
	document.getElementById('mainImage').src = "https://images4.imagebam.com/37/61/e5/ME17N09_o.jpeg";
});
snowMan.addEventListener('mouseover', function () {
	document.getElementById('popupSnow').style.display = 'block';
	hideBlankSpace(blankSpace1);
});
snowMan.addEventListener('mouseout', function () {
	document.getElementById('popupSnow').style.display = 'none';
	showBlankSpace(blankSpace1);

});

const flower = document.getElementById('flower');
flower.addEventListener('click', function () {
	document.getElementById('mainImage').src = "https://thumbs4.imagebam.com/15/33/a5/ME17MXL_t.JPG";
});
flower.addEventListener('mouseover', function () {
	document.getElementById('popupFlower').style.display = 'block';
	hideBlankSpace(blankSpace1);
});
flower.addEventListener('mouseout', function () {
	document.getElementById('popupFlower').style.display = 'none';
	showBlankSpace(blankSpace1);
});

const lightBulb = document.getElementById('lightBulb');
lightBulb.addEventListener('click', function () {
	document.getElementById('mainImage').src = "https://thumbs4.imagebam.com/9d/e4/50/ME17MY8_t.jpg";
});
lightBulb.addEventListener('mouseover', function () {
	document.getElementById('popupLightBulb').style.display = 'block';
	hideBlankSpace(blankSpace1);
});
lightBulb.addEventListener('mouseout', function () {
	document.getElementById('popupLightBulb').style.display = 'none';
	showBlankSpace(blankSpace1);
});

const mainImage = document.getElementById('mainImage');
mainImage.addEventListener('click', function () {
	document.getElementById('mainImage').src = "https://images4.imagebam.com/59/3d/01/ME17MYJ_o.jpeg";
});
mainImage.addEventListener('mouseover', function () {
	document.getElementById('popupMain').style.display = 'block';
	hideBlankSpace(blankSpace2);
});
mainImage.addEventListener('mouseout', function () {
	document.getElementById('popupMain').style.display = 'none';
	showBlankSpace(blankSpace2);
});

const beardSeasons = document.getElementById('beardSeasons');
beardSeasons.addEventListener('mouseover', function() {
	beardSeasons.style.color = 'orange';
	beardSeasons.style.borderColor = 'orange';
})
beardSeasons.addEventListener('mouseout', function () {
	beardSeasons.style.color = 'lightgray';
	beardSeasons.style.borderColor = 'black';

})