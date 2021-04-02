$(document).ready(function(){
	var bodyEle = document.querySelector('body');
	if (bodyEle.classList.contains('spz_consulation_assessment') && document.getElementsByClassName('.spz_consulation_assessment').length > 0) { return; }
	
	// Create Cookie
	var cookieName = 'spz-Free-Consultation-Assessment-10032021';
	var cookieValue = '1';
	var myDate = new Date();
	myDate.setDate(myDate.getDate() + 30);
	document.cookie = cookieName + "=" + cookieValue + ";expires=" + myDate;
	bodyEle.classList.add('spz_consulation_assessment');
	
	// free-consultation3 form header change
	if($('.spz_consulation_assessment #details-container .card-header-ng h1').hasClass('text-center')) {
		// var text = $('.spz_consulation_assessment #details-container .card-header-ng h1').text();
		$('.spz_consulation_assessment #details-container .card-header-ng h1').html($('.spz_consulation_assessment #details-container .card-header-ng h1').html().replace(/Consultation/g, "Assessment"));
	}
	
	// Navbar btn text change
	if($(".spz_consulation_assessment .mega-menu-link span").is('#FC_Nav')) {
		$(".spz_consulation_assessment #FC_Nav").html($(".spz_consulation_assessment #FC_Nav").html().replace(/Consultation/g,'Assessment'));
	}
	
	// btn with id="FC" changed
	if($(".spz_consulation_assessment #FC").hasClass('vc_general')){
		$(".spz_consulation_assessment #FC").html($(".spz_consulation_assessment #FC").html().replace(/Consultation/g,'Assessment'));
	}
	
	// Footer btn text change
	if($(".spz_consulation_assessment #FC_Footer").hasClass('vc_general')) {
		$(".spz_consulation_assessment #FC_Footer").html($(".spz_consulation_assessment #FC_Footer").html().replace(/Consultation/g,'Assessment'));
	}
	
	// What to expect subtitle text change
	if($('.spz_consulation_assessment .wpb_wrapper h3.quasi').text().includes('consultation')) {
		$('.spz_consulation_assessment .wpb_wrapper h3.quasi:contains("consultation")').addClass('quasi-consultation');
		$(".spz_consulation_assessment .wpb_wrapper h3.quasi:contains('consultation')").html($(".spz_consulation_assessment .wpb_wrapper h3.quasi:contains('consultation')").html().replace(/consultation/g,'assessment'));
	}
	
	// What to expect description text 
	if($('.spz_consulation_assessment .wpb_wrapper p').text().includes('consultation')) {
		$('.spz_consulation_assessment .wpb_wrapper p:contains("consultation")').addClass('quasi-consultation-description');
		$(".spz_consulation_assessment .wpb_wrapper h3.quasi-consultation ~ p:contains('consultation')").html($(".spz_consulation_assessment .wpb_wrapper h3.quasi-consultation ~ p:contains('consultation')").html().replace(/consultation/g,'assessment'));
	}
	
	if($('.infobox__row .infobox__cta').text().includes('consultation')) {
		$('.infobox__row .infobox__cta:contains("Consultation")').addClass('infobox__cta__consultation');
		$(".infobox__row .infobox__cta:contains('Consultation')").html($(".infobox__row .infobox__cta:contains('Consultation')").html().replace(/Consultation/g,'assessment'));
	}
	
});
// var text = $('#details-container .card-header-ng h1').text();
// $('<body> Consultation </body>').replaceall('Assessment');
// console.log($("body").html());
// $("body").html($("body").html().replace(/Consultation/g,'Assessment'));

// var replaced = $("body").html().replace(/Consultation/g,'Assessment');
// $("body").html(replaced);

// document.body.innerHTML.replace(/Consultation/g,'Assessment');