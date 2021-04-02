// var pagePath = window.location.pathname.replace(/\//g, '-');
// var onceInDayCookieKey = 'spz_once_in_day' + pagePath;
// var popupOpenCountCookieKey = 'spz_popup_open_count' + pagePath;
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
        if (getCookie(onceInDayCookieKey) !== 'true' && open_count < 5) {
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
                    <div class="popup-container">\
                        <div class="timer-popup-inner">\
                            <a class="popup-close"><img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/ServiceMax/108%20-%20Personalization%20Test%20-%20Show%20Popup%20on%20Home%20Page/close_btn.png" alt="close" title="close"></a>\
                            <div class="popup-content">\
                                <div class="timer-wrapper">\
                                    <div class="days"></div>\
                                    <div class="separater"></div>\
                                    <div class="hours"></div>\
                                    <div class="separater"></div>\
                                    <div class="minuts"></div>\
                                </div>\
                                <h2 class="maximize-title">Maximize is LIVE!</h2>\
                                <p class="maximize-subtitle">Tune in for exclusive content from Fortune 500 companies like Salesforce, Becton Dickinson, and Valmet.</p>\
                                <a href="https://www.servicemaxregistration.com/servicemaxreghome?utm_campaign=2021-ww-maximize&utm_medium=website&utm_source=servicemax" class="join_now_cta">Join Now</a>\
                            </div>\
                        </div>\
                    </div>\
                </div>');
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
                    window.addEventListener("mouseout",function(e) {
                        mouseY = e.clientY;
                        var open_count = (getCookie(popupOpenCountCookieKey) != '') ? getCookie(popupOpenCountCookieKey) : 0;
                        if (mouseY <= topValue && getCookie(onceInDayCookieKey) !== 'true' && open_count < 5) {
                            jQuery('body.show-popup-modal').find('[data-popup="show-popup-modal"]').css('visibility', 'visible');
                            jQuery('html').toggleClass('popupShown', jQuery('body').hasClass('show-popup-modal'));
                            setCookie(onceInDayCookieKey, 'true', 1);
                            setCookie(popupOpenCountCookieKey, parseInt(open_count) + 1, 365);
                        }
                    }, false);
            }, 1000);
            jQuery('.show-popup-modal .timer-popup [data-popup-close],.show-popup-modal .timer-popup .modal-overlay,.show-popup-modal .popup-close').on('click', function (e) {
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
            if(typeof jQuery != 'undefined'){
                clearInterval(jqueryInterval);
                ExitPopup();
            }
        }, 100);
    }
},1000);

/* <div class="show_popup">
    <div class="popup_content">
    </div>
</div>

<div class="show_popup">\
    <div class="sm-container">\
		<div class="popup_content">
            <div class="popup_timer">

            </div>
        </div>
	    <div class="close-btn -size--small"><img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/ServiceMax/108%20-%20Personalization%20Test%20-%20Show%20Popup%20on%20Home%20Page/close_btn.png" title="close" alt="close"></div>\
	</div>\
</div> */