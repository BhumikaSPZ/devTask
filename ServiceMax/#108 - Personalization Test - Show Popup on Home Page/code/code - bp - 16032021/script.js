var onceInDayCookieKey = 'spz_once_in_day';
var popupOpenCountCookieKey = 'spz_popup_open_count';
function ExitPopup() {
    jQuery(document).ready(function(){
        // Get Cookie Value Function
        var getCookie = function (cname) {
            var name = cname + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') c = c.substring(1);
                if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
            }
            return "";
        }
        function delete_cookie(name) {
            document.cookie = name +'=; domain=servicemax.com;path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        }
        function setCookie(cname, cvalue, exdays) {
            var d = new Date();
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            var expires = "expires=" + d.toUTCString();
            document.cookie = cname + "=" + cvalue + ";secure;" + expires + ";domain=servicemax.com;path=/";
        }
        function setCookieForMinute(cname, cvalue, exdays) {
            var d = new Date();
            d.setTime(d.getTime() + (exdays * 60 * 1000));
            var expires = "expires=" + d.toUTCString();
            document.cookie = cname + "=" + cvalue + ";secure;" + expires + ";domain=servicemax.com;path=/";
        }
        // For Already signup user code
        var FormReload = setInterval(function () {
            if (jQuery('.show-popup-modal .mktoTemplateBox a').length > 0) {
                clearInterval(FormReload);
                jQuery('.show-popup-modal .mktoTemplateBox a').click(function(){
                    setCookie(onceInDayCookieKey, '', 1);
                    setCookie('spz_form_reload', 'true', 1);
                });
            }
        }, 200);
        if (getCookie('spz_form_reload') == 'true') {
            addModalFunc();
            jQuery('body.show-popup-modal').find('[data-popup="show-popup-modal"]').css('visibility', 'visible');
            jQuery('html').toggleClass('popupShown', jQuery('body').hasClass('show-popup-modal'));
            setCookie(onceInDayCookieKey, 'true', 1);
            setCookie('spz_form_reload', '', 1);
            return false;
        }
        // For Already signup user code ended
        // Check if  popup is not closed by user and popup form is not submitted previously
        var open_count = (getCookie(popupOpenCountCookieKey) != '') ? getCookie(popupOpenCountCookieKey) : 0;
        if (getCookie(onceInDayCookieKey) !== 'true' && open_count < 3) {
            addModalFunc();
        }
        // Add Modal function
        function addModalFunc() {
            // Page Cookies Add
            var cookieName = 'join_now_Popup';
            var cookieValue = '1';
            var myDate = new Date();
            myDate.setDate(myDate.getDate() + 30);
            document.cookie = cookieName + "=" + cookieValue + ";expires=" + myDate;
            // Page Cookies End
            if (!jQuery('body').hasClass('show-popup-modal')) {
            	
                jQuery('body').addClass('show-popup-modal');
                jQuery('body.show-popup-modal').append('<div class="timer-popup" data-popup="show-popup-modal">\
	                <div>\
	                    <div class="popup-container">\
	                        <div class="timer-popup-inner">\
	                            <a class="popup-close"><img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/ServiceMax/108%20-%20Personalization%20Test%20-%20Show%20Popup%20on%20Home%20Page/close_btn.png" alt="close" title="close"></a>\
	                            <div class="popup-content">\
	                                <div class="timer-wrapper">\
	                                    <div class="days-wrapper"><div class="days" id="days">0</div><p>days</p></div>\
	                                    <div class="separater"></div>\
	                                    <div class="hours-wrapper"><div class="hours" id="hours">0</div><p>hours</p></div>\
	                                    <div class="separater"></div>\
	                                    <div class="minutes-wrapper"><div class="minutes" id="minutes">0</div><p>min</p></div>\
	                                </div>\
	                                <h2 class="maximize-title">Maximize is LIVE!</h2>\
	                                <p class="maximize-subtitle">Tune in for exclusive content from Fortune 500 companies like Salesforce, Becton Dickinson, and Valmet.</p>\
	                                <a href="https://www.servicemaxregistration.com/servicemaxreghome?utm_campaign=2021-ww-maximize&utm_medium=website&utm_source=servicemax" class="join_now_cta">Join Now</a>\
	                            </div>\
	                        </div>\
	                    </div>\
                    </div>\
                </div>');
                
                // Update the count down every 1 second
				var timerInterval = setInterval(function() {
				    // var endDate = new Date("2021-03-16T08:45:00-05:00");
				    var endDate = new Date("2021-03-16T08:45:00-07:00");
				    var currentDate = new Date();
				    
				    var timeDifference = endDate.getTime() - currentDate.getTime();
				    
				    var daysRemain = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
				    var hoursRemain = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
;
				    var minutesRemain = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
				    console.log(daysRemain,hoursRemain,minutesRemain);
				    
				    // if(hoursRemain == 24) {
				    //     daysRemain--;
				    // }
				    // if(minutesRemain == 60) {
				    //     hoursRemain--;
				    // }
				    
				    daysRemain = Math.abs(daysRemain);
				    hoursRemain = Math.abs(hoursRemain);
				    minutesRemain = Math.abs(minutesRemain);
				    // Output the result in an element with id="demo"
				    document.getElementById('days').innerHTML = daysRemain;
				    document.getElementById('hours').innerHTML = hoursRemain;
				    document.getElementById('minutes').innerHTML = minutesRemain;
	                if(daysRemain == 0 && hoursRemain == 0  && minutesRemain == 0) {
	                	jQuery('html').removeClass('popupShown');
	                	jQuery('body').removeClass('show-popup-modal');
	                	jQuery('.timer-popup').hide();
	                	clearInterval(timerInterval);
	                }
				}, 1000);

                function isIE() {
                    var ua = window.navigator.userAgent;
                    var msie = ua.indexOf('MSIE ');
                    if (msie > 0) {
                        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
                    }
                    var trident = ua.indexOf('Trident/');
                    if (trident > 0) {
                        var rv = ua.indexOf('rv:');
                        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
                    }
                    var edge = ua.indexOf('Edge/');
                    if (edge > 0) {
                        return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
                    }
                    return false;
                }
                var version = isIE();
                setTimeout(function(){
                    var mouseY = 0;
                    var topValue = 10;
                    var open_count = (getCookie(popupOpenCountCookieKey) != '') ? getCookie(popupOpenCountCookieKey) : 0;
                    if (getCookie(onceInDayCookieKey) !== 'true' && open_count < 3) {
                        jQuery('body.show-popup-modal').find('[data-popup="show-popup-modal"]').css('visibility', 'visible');
                        jQuery('html').toggleClass('popupShown', jQuery('body').hasClass('show-popup-modal'));
                        setCookie(onceInDayCookieKey, 'true', 1);
                        setCookie(popupOpenCountCookieKey, parseInt(open_count) + 1, 365);
                    }
            }, 1000);
            jQuery('.timer-popup').click(function(event){
            	if(!jQuery(event.target).closest('.timer-popup-inner').length && !jQuery(event.target).is('.timer-popup')) {
            		jQuery('.timer-popup').css('visibility', 'hidden');
	                jQuery('html.popupShown').removeClass('popupShown');
            	}
            })
            jQuery('.show-popup-modal .timer-popup [data-popup-close],.show-popup-modal .popup-close').on('click', function (e) {
	                e.preventDefault();
	                jQuery('.show-popup-modal .timer-popup[data-popup="show-popup-modal"]').css('visibility', 'hidden');
	                var targeted_popup_class = jQuery(this).attr('data-popup-close');
	                jQuery('.show-popup-modal [data-popup="' + targeted_popup_class + '"]').css('visibility', 'hidden');
	                jQuery('html.popupShown').removeClass('popupShown');
	            });
            }
        }
    });
}

var jQisLoaded = setInterval(function () {
    if (typeof jQuery != 'undefined') {
        clearInterval(jQisLoaded);
        ExitPopup();
    } else if (typeof jQuery =='undefined') {
        var headTag = document.getElementsByTagName("head")[0];
        var jqTag = document.createElement('script');
        jqTag.type = 'text/javascript';
        jqTag.src = '//code.jquery.com/jquery-3.4.1.min.js';
        jqTag.onload = ExitPopup;
        headTag.appendChild(jqTag);
        clearInterval(jQisLoaded);
        var jqueryInterval = setInterval(function () {
            if(typeof jQuery != 'undefined' && window.moment){
                clearInterval(jqueryInterval);
                ExitPopup();
            }
        }, 100);
    }
},1000);
