$(document).ready(function(){

function call() {
	$(this).toggleClass('open');
	$(".overlay").toggleClass("open");
	$(".overlay a").toggleClass("open");
$(".overlay p").toggleClass("open");
}
	$('#nav-icon').click(call);

	$('.overlay a').on('click', function(){
	    $(".overlay").hide();
	   $("#nav-icon").toggleClass("open");
$('.overlay').toggleClass('open').show();
$(".overlay a").toggleClass("open");
	});

$('h1 span').waypoint(function(){
	$('h1 span').css({
		animation: "twister .5s forwards",
		transform: "rotate(-180deg) translate(150px, 0)",
		opacity: "0",
	});

	$('h1 span:nth-of-type(1)').css({
		animationDelay: ".25s"
	});
	$('h1 span:nth-of-type(2)').css({
		animationDelay: ".3s"
	});
	$('h1 span:nth-of-type(3)').css({
		animationDelay: ".35s"
	});
	$('h1 span:nth-of-type(4)').css({
		animationDelay: ".4s"
	});
	$('h1 span:nth-of-type(5)').css({
		animationDelay: ".45s"
	});

	$('h1 span:nth-of-type(6)').css({
		animationDelay: ".5s"
	});
	$('h1 span:nth-of-type(7)').css({
		animationDelay: ".55s"
	});
	$('h1 span:nth-of-type(8)').css({
		animationDelay: ".6s"
	});

	$('.headerspan span:nth-of-type(1)').css({
		animationDelay: "0.65s"
	});
	$('.headerspan span:nth-of-type(2)').css({
		animationDelay: "0.7s"
	});
	$('.headerspan span:nth-of-type(3)').css({
		animationDelay: "0.75s"
	});
	$('.headerspan span:nth-of-type(4)').css({
		animationDelay: "0.8s"
	});
	$('.headerspan span:nth-of-type(5)').css({
		animationDelay: "0.85s"
	});
},{ offset: 'bottom-in-view' });

$('.copyright p').waypoint(function(){

	$('.copyright p').addClass('animated heartBeat');
},{offset:'bottom-in-view'});
});
