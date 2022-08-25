$(document).ready(function () {



$('.whatAreWeDoingSlider').bxSlider({
pager: true,
    pagerType: 'short',
  mode: 'fade',
  auto: true,
  autoControls: true,
  pause: 30000
});

$(".menuAll ul li:last-child , .menuIconMobil ").click(function(){

 $(".contactMenu").toggleClass('active ');
 $(".contactMenuBlur").toggleClass('active  ');

 

});
 $(".contactClose").click(function(){
 	$(".contactMenu").removeClass('active  ');
 	 $(".contactMenuBlur").toggleClass('active  ');
 	 
 	


 });

 $(".jsEffectTwo").click(function(){
 	$(".jsEffectTwo").addClass("efect");
 	$(".jsEffectOne").addClass("efect");
 	$(".aboutUs").addClass("active");

 });

  $(".jsEffectOne").click(function(){
 	$(".jsEffectTwo").removeClass("efect");
 	$(".jsEffectOne").removeClass("efect");
 	$(".aboutUs").removeClass("active");
 });



  $(".sendRequestForm").click(function(){
 	$(".paymentSystemAll").addClass("active").fadeIn(500);
 });

    $(".paymentSystemClose").click(function(){
  	$(".paymentSystemAll").removeClass("active");
  	$(".paymentSystem").removeClass("active");
  	$(".paymentSystemInformation").removeClass("active");
  	$(".paymentSystemImages i").css({"background-position":"0px 0px"});

 });

  $(".paymentSystemTransfer").click(function(){
 	$(".paymentSystemInformation").addClass("active");
 	$(".paymentSystemImages i").css({"background-position":"0px -200px"});

 });








});


