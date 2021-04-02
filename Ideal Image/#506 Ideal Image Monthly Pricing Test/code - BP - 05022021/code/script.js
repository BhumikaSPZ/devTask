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
	
	// Change free-consultation3 form header
	if($('.spz_consulation_assessment #details-container .card-header-ng h1').hasClass('text-center')) {
		$('.spz_consulation_assessment #details-container .card-header-ng h1').html($('.spz_consulation_assessment #details-container .card-header-ng h1').html().replace(/Consultation/g, "Assessment"));
	}
	
	// Change Navbar btn text 
	if($(".spz_consulation_assessment .mega-menu-link span").is('#FC_Nav')) {
		$(".spz_consulation_assessment #FC_Nav").html($(".spz_consulation_assessment #FC_Nav").html().replace(/Consultation/g,'Assessment'));
	}
	
	// Change btn with id="FC" 
	if($(".spz_consulation_assessment #FC").hasClass('vc_general')){
		$(".spz_consulation_assessment #FC").html($(".spz_consulation_assessment #FC").html().replace(/Consultation/g,'Assessment'));
	}
	
	// Change Footer btn text 
	if($(".spz_consulation_assessment #FC_Footer").hasClass('vc_general')) {
		$(".spz_consulation_assessment #FC_Footer").html($(".spz_consulation_assessment #FC_Footer").html().replace(/Consultation/g,'Assessment'));
	}
	
	// Change What to expect subtitle text 
	if($('.spz_consulation_assessment .wpb_wrapper h3.quasi').text().includes('consultation')) {
		$('.spz_consulation_assessment .wpb_wrapper h3.quasi:contains("consultation")').addClass('quasi-consultation');
		$(".spz_consulation_assessment .wpb_wrapper h3.quasi:contains('consultation')").html($(".spz_consulation_assessment .wpb_wrapper h3.quasi:contains('consultation')").html().replace(/consultation/g,'assessment'));
	}
	
	// Change What to expect description text 
	if($('.spz_consulation_assessment .wpb_wrapper h3.quasi-consultation ~ p').text().includes('consultation')) {
		$('.spz_consulation_assessment .wpb_wrapper h3.quasi-consultation p:contains("consultation")').addClass('quasi-consultation-description');
		$(".spz_consulation_assessment .wpb_wrapper h3.quasi-consultation ~ p:contains('consultation')").html($(".spz_consulation_assessment .wpb_wrapper h3.quasi-consultation ~ p:contains('consultation')").html().replace(/consultation/g,'assessment'));
		// $('.quasi-consultation-description').html().replace(/consultation/g,'assessment');
	}
	
	// Update consultation with assessment in benefits-icons 
	if($('.spz_consulation_assessment .benefits-icons .wpb_content_element p').text().includes("consultation")) {
		$('.spz_consulation_assessment .benefits-icons .wpb_content_element p:contains("consultation")').html().replace(/consultation/g,'assessment');
		$('.spz_consulation_assessment .benefits-icons .wpb_content_element p:contains("consultation")').html($('.spz_consulation_assessment .benefits-icons .wpb_content_element p:contains("consultation")').html().replace(/consultation/g,'assessment'));
	}
	
	// Change location CTA text 
	// observer binding
	
    var target = document.querySelector('#storeLocator__storeListRow');
    var config = {
        childList: true, characterData: true, subtree: true, attributes: true,
    };
    // var running = false;
    var callback = function (mutationsList, observer) {
    	console.log('observer');
    	if($(".infobox__row.infobox__cta.ssflinks[href='/free-consultation']").text().includes('Consultation')) {
			console.log('innnnnn');
			$('.infobox__row.infobox__cta.ssflinks[href="/free-consultation"]:contains("Consultation")').addClass('infobox__cta__consultation');
			$('.infobox__cta__consultation').html($(".infobox__cta__consultation").html().replace(/Consultation/g,'Assessment'));
			// $(".infobox__row.infobox__cta.ssflinks[href='/free-consultation']:contains('Consultation')").text($(".infobox__row.infobox__cta.ssflinks[href='/free-consultation']:contains('Consultation')").text().replace(/Consultation/g,'Assessment'));
			
			running = true;
            setTimeout(function () { running = false; }, 100);
		}
    };
    var observer = new MutationObserver(callback);
    if(target) {
    	observer.observe(target, config);
    }
    
    // End observer binding  
	
});
// var text = $('#details-container .card-header-ng h1').text();
// $('<body> Consultation </body>').replaceall('Assessment');
// console.log($("body").html());
// $("body").html($("body").html().replace(/Consultation/g,'Assessment'));

// var replaced = $("body").html().replace(/Consultation/g,'Assessment');
// $("body").html(replaced);

// document.body.innerHTML.replace(/Consultation/g,'Assessment');

// observer binding
  //  var target = document.querySelector('#storeLocator__storeListRow');
  //  var config = {
  //      childList: true, characterData: true, subtree: true, attributes: true,
  //  };
  //  var running = false;
  //  var callback = function (mutationsList, observer) {
  //  	console.log('observer');
  //  	if($(".infobox__row .infobox__cta[href='/free-consultation'][target='_self']").text('Free Consultation')) {
		// 	console.log('innnnnn');
		// 	// $('.infobox__row .infobox__cta:contains("Consultation")').addClass('infobox__cta__consultation');
		// 	$(".infobox__row .infobox__cta[href='/free-consultation']:contains('Consultation')").text($(".infobox__row .infobox__cta[href='/free-consultation']:contains('Consultation')").text().replace(/Consultation/g,'Assessment'));
			
		// 	running = true;
  //          setTimeout(function () { running = false; }, 100);
		// }
  //  };
  //  var observer = new MutationObserver(callback);
  //  observer.observe(target, config);
    // End observer binding    