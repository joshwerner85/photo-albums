var arnoldButton = document.querySelector('#arnold');
var batmanButton = document.querySelector('#batman');
var jokerButton = document.querySelector('#joker');
var theriddlerButton = document.querySelector('#theRiddler');
var twofaceButton = document.querySelector('#twoFace');
var mrfreezeButton = document.querySelector('#mrFreeze');

var arnoldImage1 = $('#arnold-image1');
var arnoldImage2 = $('#arnold-image2');
var arnoldImage3 = $('#arnold-image3');
var arnoldImage4 = $('#arnold-image4');
var arnoldImage5 = $('#arnold-image5');
var arnoldImage6 = $('#arnold-image6');

var arnoldBackBtn = $('.backBtn1Arnold');
 
// SIDEBAR NAVIGATION BUTTONS 
var arnoldBtn = $('.arnoldBtn');
var batmanBtn = $('.batmanBtn');
var jokerBtn = $('.jokerBtn');
var theriddlerBtn = $('.theriddlerBtn'); 
var twofaceBtn = $('.twofaceBtn');
var freezeBtn = $('.freezeBtn');


var topPage = $('.topPage');
var arnoldPage = $('.arnoldPage')
var arnoldBottomPage = $('.bottomPage1-Arnold');
var arnoldBottomPage2 = $('.bottomPage2-Arnold');
var arnoldBottomPage3 = $('.bottomPage3-Arnold');
var arnoldBottomPage4 = $('.bottomPage4-Arnold');
var arnoldBottomPage5 = $('.bottomPage5-Arnold');
var arnoldBottomPage6 = $('.bottomPage6-Arnold');
var batmanPage =$('.batmanPage');

// TOP PAGE BUTTONS START

arnoldButton.addEventListener('click', function(){
	topPage.hide();
	arnoldPage.show();

	console.log('you clicked me GET DOWN!');
});

batmanButton.addEventListener('click', function(){
	topPage.hide();
	arnoldPage.hide();
	batmanPage.show();
	console.log('you clicked me I AM BATMAN!');
});

jokerButton.addEventListener('click', function(){
	// topPage.hide();
	// arnoldPage.show();

	console.log('you clicked me WHY SO SERIOUS?');
});

theriddlerButton.addEventListener('click', function(){
	// topPage.hide();
	// arnoldPage.show();

	console.log('you clicked me What am I?');
});

twofaceButton.addEventListener('click', function(){
	// topPage.hide();
	// arnoldPage.show();

	console.log('you clicked me You Need a Lawyer?');
});

mrfreezeButton.addEventListener('click', function(){
	// topPage.hide();
	// arnoldPage.show();

	console.log('you clicked me The Iceman Cometh!');
});

// TOP PAGE BUTTONS END


// MIDDLE PAGE START

arnoldImage1.on('click', function (){
	arnoldPage.hide();
	topPage.hide();
	arnoldBottomPage.show();
	console.log('YOU CLICKED IMAGE 1 FOR ARNOLD');
});	

arnoldImage2.on('click', function (){
	arnoldPage.hide();
	topPage.hide();
	arnoldBottomPage2.show();

	console.log('YOU CLICKED IMAGE 2 FOR ARNOLD');
});	

arnoldImage3.on('click', function (){
	arnoldPage.hide();
	topPage.hide();
	arnoldBottomPage3.show();

	console.log('YOU CLICKED IMAGE 3 FOR ARNOLD');
});	

arnoldImage4.on('click', function (){
	arnoldPage.hide();
	topPage.hide();
	arnoldBottomPage4.show();

	console.log('YOU CLICKED IMAGE 4 FOR ARNOLD');
});	

arnoldImage5.on('click', function (){
	arnoldPage.hide();
	topPage.hide();
	arnoldBottomPage5.show();

	console.log('YOU CLICKED IMAGE 5 FOR ARNOLD');
});	

arnoldImage6.on('click', function (){
	arnoldPage.hide();
	topPage.hide();
	arnoldBottomPage6.show();

	console.log('YOU CLICKED IMAGE 6 FOR ARNOLD');
});	


// MIDDLE PAGE END


// BOTTOM PAGE START

arnoldBackBtn.on ('click',function(){
	arnoldPage.show();
	topPage.hide();
	arnoldBottomPage.hide();
	arnoldBottomPage2.hide();
	arnoldBottomPage3.hide();
	arnoldBottomPage4.hide();
	arnoldBottomPage5.hide();
	arnoldBottomPage6.hide();
});




// BOTTOM PAGE END



// SIDEBAR NAVIGATION START
	arnoldBtn.on('click', function(){
		arnoldPage.show();
		console.log('YOU CLICK ME OFF GET DOWN!');
	});



// SIDEBAR NAVIGATION END




