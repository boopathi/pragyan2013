 $(window).load(function() {
         $('#featured').orbit({
		     animation: 'horizontal-push',                  // fade, horizontal-slide, vertical-slide, horizontal-push
		     animationSpeed: 800,                // how fast animtions are
		     timer: true, 			 // true or false to have the timer
		     advanceSpeed: 4000, 		 // if timer is enabled, time between transitions 
		     pauseOnHover: false, 		 // if you hover pauses the slider
		     startClockOnMouseOut: false, 	 // if clock should start on MouseOut
		     startClockOnMouseOutAfter: 1000, 	 // how long after MouseOut should the timer start again
		     directionalNav: true, 		 // manual advancing directional navs
		     captions: true, 			 // do you want captions?
		     captionAnimation: 'fade', 		 // fade, slideOpen, none
		     captionAnimationSpeed: 800, 	 // if so how quickly should they animate in
		     bullets: false,			 // true or false to activate the bullet navigation
		     bulletThumbs: false,		 // thumbnails for the bullets
		     bulletThumbLocation: '',		 // location from this file where thumbs will be
		     afterSlideChange: function(){} 	 // empty function 
		});
});
 $(document).ready(function(){
 	$(".contacttile").hover(function(){
 		if($(this).attr("class")!="contacttile type1")
 		$(this).stop().animate({"scrollTop":"125px"},400);
 	});
 	$(".contacttile").mouseleave(function(){
 		if($(this).attr("class")!="contacttile type1")
 		$(this).stop().animate({"scrollTop":"0px"},400);
 	});
 	$("#wantpartners").hover(function(){
 		$("#maintile").stop().animate({"paddingTop":"0px"},400);
 		$("#contactsformain").slideDown(400);
 	});
 	$("#maintile").mouseleave(function(){

 		$("#contactsformain").slideUp(400);
 	});
 	$('html , body').animate({"scrollLeft":"700px"},200,function(){
		$("#contactstile").animate({"opacity":0.7},200);
		$("#highlights").animate({"opacity":0.7},200);

 		$('#contactstile').hover(function(){
 			$('html,body').stop().animate({
 				"scrollLeft":"0px"
 			},1000);
			$("#leftnav").stop().animate({"marginLeft":"200px","opacity":1},700);
			$("#rightnav").stop().animate({"marginLeft":"1400px","opacity":0.5},500);
			$("#highlights").stop().animate({"opacity":0.2},500);
			$("#contactstile").stop().animate({"opacity":1},500);
			$("#maintile").stop().animate({"opacity":0.2,"paddingTop":"100px"},500);
 		});
 		$('#maintile').hover(function(){
 			$('html,body').stop().animate({
 				"scrollLeft":"600px"
 			},1000);
 			$("#leftnav").stop().animate({"marginLeft":"860px","opacity":0.5},700);
			$("#rightnav").stop().animate({"marginLeft":"750px","opacity":0.5},500);
			$("#highlights").stop().animate({"opacity":0.2},500)
			$("#contactstile").stop().animate({"opacity":0.2},500);
			$("#maintile").stop().animate({"opacity":1,"paddingTop":"100px"},500);
 		});
 		$('#highlights').hover(function(){
 			$('html,body').stop().animate({
 				"scrollLeft":"1200px"
 			},1000);
			$("#leftnav").stop().animate({"marginLeft":"700px","opacity":0.5},700);
			$("#rightnav").stop().animate({"marginLeft":"1300px","opacity":1},500);
			$("#contactstile").stop().animate({"opacity":0.2},500);
			$("#highlights").stop().animate({"opacity":1},500);
			$("#maintile").stop().animate({"opacity":0.2,"paddingTop":"100px"},500);
 		});
 	});
 	delay = [10000,7000,5000,6000,6500,7600,8000,9000,11000,9500,5500,6500,7500,12000];
 	for(i=0;i<13;i++){
 		d=Math.floor((Math.random()*13));	
 		temp = delay[i];
 		delay[i]=delay[d];
 		delay[d]=temp;
 	}
 	setInterval(function(){
 		if($("#marketcontact1").scrollTop()==0){
 			$("#marketcontact1").animate({"scrollTop":"150px"},400);
 		}
 		else{
 			$("#marketcontact1").animate({"scrollTop":"0px"},400);
 		}
 	},2000);
 	setInterval(function(){
 		if($("#marketcontact2").scrollTop()==0){
 			$("#marketcontact2").animate({"scrollTop":"150px"},400);
 		}
 		else{
 			$("#marketcontact2").animate({"scrollTop":"0px"},400);
 		}
 	},1500);
 	setInterval(function(){
 		if($("#contact2").scrollTop()==0){
 			$("#contact2").animate({"scrollTop":"125px"},400);
 		}
 		else{
 			$("#contact2").animate({"scrollTop":"0px"},400);
 		}
 	},delay[0]);
 	setInterval(function(){
 		if($("#contact4").scrollTop()==0){
 			$("#contact4").animate({"scrollTop":"125px"},400);
 		}
 		else{
 			$("#contact4").animate({"scrollTop":"0px"},400);
 		}
 	},delay[1]);
 	setInterval(function(){
 		if($("#contact5").scrollTop()==0){
 			$("#contact5").animate({"scrollTop":"125px"},400);
 		}
 		else{
 			$("#contact5").animate({"scrollTop":"0px"},400);
 		}
 	},delay[2]);
 	setInterval(function(){
 		if($("#contact6").scrollTop()==0){
 			$("#contact6").animate({"scrollTop":"125px"},400);
 		}
 		else{
 			$("#contact6").animate({"scrollTop":"0px"},400);
 		}
 	},delay[3]);
 	setInterval(function(){
 		if($("#contact8").scrollTop()==0){
 			$("#contact8").animate({"scrollTop":"125px"},400);
 		}
 		else{
 			$("#contact8").animate({"scrollTop":"0px"},400);
 		}
 	},delay[4]);
 	setInterval(function(){
 		if($("#contact9").scrollTop()==0){
 			$("#contact9").animate({"scrollTop":"125px"},400);
 		}
 		else{
 			$("#contact9").animate({"scrollTop":"0px"},400);
 		}
 	},delay[5]);
 	setInterval(function(){
 		if($("#contact10").scrollTop()==0){
 			$("#contact10").animate({"scrollTop":"125px"},400);
 		}
 		else{
 			$("#contact10").animate({"scrollTop":"0px"},400);
 		}
 	},delay[6]);
 	setInterval(function(){
 		if($("#contact11").scrollTop()==0){
 			$("#contact11").animate({"scrollTop":"125px"},400);
 		}
 		else{
 			$("#contact11").animate({"scrollTop":"0px"},400);
 		}
 	},delay[7]);
 	setInterval(function(){
 		if($("#contact12").scrollTop()==0){
 			$("#contact12").animate({"scrollTop":"125px"},400);
 		}
 		else{
 			$("#contact12").animate({"scrollTop":"0px"},400);
 		}
 	},delay[8]);
 	setInterval(function(){
 		if($("#contact14").scrollTop()==0){
 			$("#contact14").animate({"scrollTop":"125px"},400);
 		}
 		else{
 			$("#contact14").animate({"scrollTop":"0px"},400);
 		}
 	},delay[9]);
 	setInterval(function(){
 		if($("#contact15").scrollTop()==0){
 			$("#contact15").animate({"scrollTop":"125px"},400);
 		}
 		else{
 			$("#contact15").animate({"scrollTop":"0px"},400);
 		}

 	},delay[10]);
 	setInterval(function(){
 		if($("#contact17").scrollTop()==0){
 			$("#contact17").animate({"scrollTop":"125px"},400);
 		}
 		else{
 			$("#contact17").animate({"scrollTop":"0px"},400);
 		}
 	},delay[11]);
 	setInterval(function(){
 		if($("#contact18").scrollTop()==0){
 			$("#contact18").animate({"scrollTop":"125px"},400);
 		}
 		else{
 			$("#contact18").animate({"scrollTop":"0px"},400);
 		}
 	},delay[12]);
 	setInterval(function(){
 		if($("#contact19").scrollTop()==0){
 			$("#contact19").animate({"scrollTop":"125px"},400);
 		}
 		else{
 			$("#contact19").animate({"scrollTop":"0px"},400);
 		}
 	},delay[13]);
 });
