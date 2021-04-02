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
	
    // Update location CTA text 
	// observer binding
    
//    var targetNodes         = document.getElementById("storeLocator__storeList")
// 	var MutationObserver    = window.MutationObserver || window.WebKitMutationObserver;
// 	var myObserver          = new MutationObserver (mutationHandler);
// 	var obsConfig           = { childList: true, characterData: true, subtree: true, attributes: true };
// 	var running = false;
// 	//--- Add a target node to the observer. Can only add one node at a time.
// 	if(targetNodes) {
//    	console.log('target',targetNodes);
//    	myObserver.observe (targetNodes, obsConfig);
//    }
// 	// myObserver.observe (targetNodes, obsConfig);
// 	function mutationHandler (mutationRecords) {
// 	    mutationRecords.forEach ( function (mutation) {
// 	    	console.log('mutationRecords',mutationRecords);
// 	        if($(".infobox__row.infobox__cta.ssflinks[href='/free-consultation']").text().includes('Consultation')) {
// 	    		console.log('1111111111');
// 				$('.infobox__row.infobox__cta.ssflinks[href="/free-consultation"]:contains("Consultation")').addClass('infobox__cta__consultation');
// 				$('.infobox__cta__consultation').html($(".infobox__cta__consultation").html().replace(/Consultation/g,'Assessment'));
				
// 				running = true;
// 	            setTimeout(function () { running = false; }, 100);
// 			}
// 	    } );
// 	}
    
    // End observer binding  
	
});
