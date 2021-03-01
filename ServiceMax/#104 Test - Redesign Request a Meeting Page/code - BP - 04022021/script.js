$(document).ready(function(){
    // Cookies Add
    var cookieName = 'Redesign-Request-Meeting-Page';
    var cookieValue = '1';
    var myDate = new Date();
    myDate.setDate(myDate.getDate() + 30);
    document.cookie = cookieName +'=' + cookieValue + ';expires=' + myDate;
    // END Cookies Add
    if($('body').hasClass('request_meeting_spz')){
        return;
    }
    $('body').addClass('request_meeting_spz');
    
    $('head').prepend('<script src="https://www.googleoptimize.com/optimize.js?id=OPT-TFX3PWL"></script>');
    $('head').append("<link href='https://fonts.googleapis.com/css?family=Muli' rel='stylesheet'>");
    $('head title').text('Schedule a Meeting');
    
    var gettext = $('.Field_Service_Content').text();
    gettext.replace(/\D/g, ",");
    gettext = gettext.split('\n');
    heroleft_tile = gettext[0];
    heroleft_subtitle = gettext[1];
    heroleft_description_para1 = gettext[3];
    heroleft_description_para2 = gettext[5]  +' <br> ' + gettext[6] + ' <br> ' + gettext[7] + ' <br> ' + gettext[8];
    heroleft_description_para3 = gettext[10];
    var hd3_split =  heroleft_description_para3.split(/(\d+)/);
    var call_num = hd3_split[1]+hd3_split[2]+hd3_split[3]+hd3_split[4]+hd3_split[5]+hd3_split[6]+hd3_split[7];
    
    var get_form_title = $('.Form_Caption .richTextSpan div:last-child> span> strong').text();
    
    $('<div class="main_content_wrapper">\
	    <div class="hero_section">\
	        <div class="container">\
	            <div class="hero_content_wrapper">\
	                <div class="hero_left">\
	                    <h4 class="hero_title">' + heroleft_tile +'</h4>\
	                    <p class="hero_subtitle"> ' + heroleft_subtitle + ' </p>\
	                    <div class="hero_description">\
	                        <p class="description_para_1"> ' + heroleft_description_para1 + ' </p>\
	                        <p class="description_para_2"> ' + heroleft_description_para2 + ' </p>\
	                        <p class="description_para_3"> ' + hd3_split[0] + ' <a href="tel:18007564960"> ' + call_num +' </a> ' + hd3_split[8] + ' </p>\
	                    </div>\
	                </div>\
	                <div class="hero_right">\
	                    <div class="form_wrapper meeting_form">\
	                    	<h4 class="form_title"> ' + get_form_title + ' </h4>\
	                    </div>\
	                </div>\
	            </div>\
	        </div>\
	    </div>\
	</div>').insertAfter('.header_logowrap');
	$('<div class="bottom_section">\
		<div class="container">\
		    <div class="img_wrapper">\
			    <div class="pic_wrap">\
			        <picture>\
			            <source media="(max-width:767px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/ServiceMax/104:%20Test%20-%20Redesign%20Request%20a%20Meeting%20Page/meeting_schedule_img_mob.png" data-class="imgSM">\
			            <source media="(max-width:991px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/ServiceMax/104:%20Test%20-%20Redesign%20Request%20a%20Meeting%20Page/meeting_schedule_img_tab.png" class="Gartner" data-class="imgMD">\
			            <source media="(max-width:1024px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/ServiceMax/104:%20Test%20-%20Redesign%20Request%20a%20Meeting%20Page/meeting_schedule_img_mindesk.png" class="Gartner" data-class="imgMD">\
			            <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/ServiceMax/104:%20Test%20-%20Redesign%20Request%20a%20Meeting%20Page/meeting_schedule_img_desk.png" class="Gartner" alt="meeting details" title="meeting details" loading="lazy">\
			        </picture>\
			    </div>\
			    <div class="arrow-contanier">\
			        <img src="//res.cloudinary.com/spiralyze/image/upload/v1611816945/ServiceMax/104:%20Test%20-%20Redesign%20Request%20a%20Meeting%20Page/green_arrow.svg" alt="arrow" title="arrow" class="arrow_desk">\
			        <img src="//res.cloudinary.com/spiralyze/image/upload/v1611826880/ServiceMax/104:%20Test%20-%20Redesign%20Request%20a%20Meeting%20Page/green_arrow_1024.svg" alt="arrow" title="arrow" class="arrow_min_desk">\
			    </div>\
		    </div>\
		    <div class="bottom_logo_section">\
		        <picture>\
		            <source media="(max-width:767px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/ServiceMax/104:%20Test%20-%20Redesign%20Request%20a%20Meeting%20Page/bottom_logos_mob.png" data-class="imgSM">\
		            <source media="(max-width:991px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/ServiceMax/104:%20Test%20-%20Redesign%20Request%20a%20Meeting%20Page/bottom_logos_tab.png" class="Gartner" data-class="imgMD">\
		            <source media="(max-width:1024px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/ServiceMax/104:%20Test%20-%20Redesign%20Request%20a%20Meeting%20Page/bottom_logos_mindesk.png" class="Gartner" data-class="imgMD">\
		            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/ServiceMax/104:%20Test%20-%20Redesign%20Request%20a%20Meeting%20Page/bottom_logos_desk.png" class="logos" alt="company logos" title="company logos" loading="lazy">\
		        </picture>\
		    </div>\
		</div>\
	</div>').insertAfter('.hero_section')
	
    $('.Standard_Form_-_EN').insertAfter($('.form_title'));
    
    $('body').prepend('<div class="header" id="header"><div class="container"></div></div>');
    $('#header .container').append($('.header_greybox'));
    $('#header .container').append($('.header_logowrap'));
    
	
   	MktoForms2.whenReady(function (form) {
   		
    	var targetNodes = document.querySelectorAll('.mktoFieldWrap');
        var config = { attributes: true, childList: true, subtree: true };
        var callback = function (mutationsList, observer) {
        	// update select state placeholder value
            // $('#State option:first-child').text('Select Your State');
            $('#State option:first-child').val('');
            if ($('#State option:first-child').val() == ''){
            	console.log($('#State option:first-child').val());
            	$('#State option:first-child').text('Select Your State')
            }
            
            jQuery('.mktoFormCol').each(function () {
                if (jQuery(this).find('.mktoError').length > 0 && jQuery(this).find('.mktoError').attr('style').indexOf('none') == -1) {
                    jQuery(this).addClass('is-error-visible');
                } else {
                    jQuery(this).removeClass('is-error-visible');
                }
                
            });
        };
        
        var observer = new MutationObserver(callback);
        for (var i = 0; i < targetNodes.length; i++) {
            observer.observe(targetNodes[i], config);
        }
    });
});