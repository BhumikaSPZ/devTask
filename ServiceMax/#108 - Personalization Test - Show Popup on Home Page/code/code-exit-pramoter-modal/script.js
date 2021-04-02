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
            if (jQuery('.exit-promoter-modal .mktoTemplateBox a').length > 0) {
                clearInterval(FormReload);
                jQuery('.exit-promoter-modal .mktoTemplateBox a').click(function(){
                    setCookie(onceInDayCookieKey, '', 1);
                    setCookie('spz_form_reload', 'true', 1);
                });
            }
        }, 200);
        if (getCookie('spz_form_reload') == 'true') {
            addModalFunc();
            jQuery('body.exit-promoter-modal').find('[data-popup="exit-promoter-modal"]').css('visibility', 'visible');
            jQuery('html').toggleClass('popupShown', jQuery('body').hasClass('exit-promoter-modal'));
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
            var cookieName = 'Try_Free_Form_Modal_Popup';
            var cookieValue = '1';
            var myDate = new Date();
            myDate.setDate(myDate.getDate() + 30);
            document.cookie = cookieName + "=" + cookieValue + ";expires=" + myDate;
            // Page Cookies End
            if (!jQuery('body').hasClass('exit-promoter-modal')) {
                jQuery('body').addClass('exit-promoter-modal');
                jQuery('body.exit-promoter-modal').append('<div class="form-popup" data-popup="exit-promoter-modal"><div class="popup-container"><div class="form-popup-inner"><a class="popup-close"><img src="//res.cloudinary.com/spiralyze/image/upload/v1597399493/ServiceMax/Exit_Promoter/close.svg" alt="close"></a>\
                        <div class="popup-content"><img class="logo" src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/ServiceMax/Exit_Promoter/ServiceMax-Asset-360.png" alt="ServiceMax Asset 360"><h3 class="modal-title">Ready to See More?</h3><p class="sub-text">Check out the product demo overview, and see how ServiceMax improves the productivity of complex, equipment-centric service execution.</p>\
                        <div class="form-wrapper"><div class="loader"><img src="//res.cloudinary.com/spiralyze/image/upload/v1597414869/ServiceMax/Exit_Promoter/loader.gif" alt="Loader"><p>Please wait a few seconds...</p></div></div></div></div></div><div class="modal-overlay"></div></div>');
                    jQuery.getScript("//lp.servicemax.com/js/forms2/js/forms2.min.js", function () {
                    if (getCookie('Exit_Intent_Modal_form_Filled') !== 'true') {
                        jQuery('.form-wrapper').prepend('<form id="mktoForm_4629"></form>');
                        MktoForms2.loadForm("//lp.servicemax.com", "020-PCR-876", 4629);
                    } else if (getCookie('Exit_Intent_Modal_form_Filled') == 'true') {
                        delete_cookie('_mkto_trk');
                        jQuery('.form-wrapper').prepend('<form id="mktoForm_4199"></form>');
                        jQuery('.form-wrapper').closest('.exit-promoter-modal').addClass('only_email');
                        MktoForms2.loadForm("//lp.servicemax.com", "020-PCR-876", 4199);
                    }
                    (function () {
                        var invalidDomains = ["@aol.", "@seat.", "@aussiemailmail.", "@merseymail.", "@muchomail.", "@pop.safe-mail.", "@vfemail.", "@click2mail.", "@e4ward.", "@gishpuppy.", "@guerrillamail.", "@mailinator .", "@spamgourmet.", "@spamex.", "@store.juno.", "@lycos.", "@TheFreeSite.", "@my.topicaplus.", "@findlaw.", "@keepandbeararms.", "@techemail.", "@incredimail.", "@en.speedy-mail-software.", "@mailpride.", "@mollymail.", "@pandaemail.sourceforge.", "@33MAIL.", "@freeola.", "@protonmail.", "@opera.", "@NoPeddlers.", "@nz11.", "@yandex.", "@zoho.", "@gmx.", "@tempr.email.", "@www.one.", "@tempinbox.", "@emailsensei.", "@emz.", "@fakeinbox.", "@filzmail.", "@greensloth.", "@hidemail.", "@trashmail.", "@jmail.ovh.", "@mail.ovh.", "@mailcatch.", "@mail-temporaire.", "@qip.ru.", "@maildrop.cc.", "@Lortemail.dk.", "@mytrashmail.", "@mailnesia.", "@mailnull.", "@no-spam.ws.", "@nervtmich.", "@notsharingmy.info.", "@nowmymail.", "@trashmail.", "@onewaymail.", "@otherinbox.", "@Safe-mail.", "@safersignup.", "@safersignup.", "@sharklasers.", "@shitmail.me.", "@sibmail.", "@sharpmail.co.uk.", "@spam4.me.", "@soodonims.", "@spamex.", "@temp-mail.", "@tempemail.", "@mytrashmail.", "@instantemailaddress.", "@trashmail.", "@yopmail.", "@yopmail.", "@wegwerfemail.", "@yopmail.", "@gmail.", "@hotmail.", "@yahoo.", "@outlook.", "@live.", "@ecologyfund.", "@Computermail.", "@.emailaccount.", "@emailchoice.", "@inbox.", "@swissmail.", "@mail.rediff.", "@i.aol.", "@UltimateEmail.", "@soltecsis.", "@meowmail.", "@apple.", "@aussiemail.au.", "@bigstring.", "@canada.", "@icqmail.", "@zilladog.", "@l8r.", "@futureme.", "@12free.co.", "@animail.", "@care2.", "@lavabit.", "@lpemail.", "@macgui.", "@webmail.co.", "@AsianAve.", "@burntmail.", "@fanmail.", "@thedoghousemail.", "@Address.", "@excite.", "@e-mol.", "@mail2web.", "@everyone.", "@About.", "@nativestar.", "@speedy-mail-software.", "@icloud.", "@me.", "@mac.", "@mail.", "@mochamail.", "@go.", "@prontomail.", "@hushmail."];
                        MktoForms2.whenReady(function (form) {
                            function mktoFormReady() {
                                jQuery('.mktoForm select.mktoField').each(function () {
                                    if (!(jQuery(this).val() != undefined && jQuery(this).val() != '' && jQuery(this).val() != 'Select Your State *')) {
                                        jQuery(this).addClass('placeHolder');
                                    }
                                    jQuery(this).change(function () {
                                        if (jQuery(this).val() != undefined && jQuery(this).val() != '' && jQuery(this).val() != 'Select Your State *') {
                                            jQuery(this).removeClass('placeHolder');
                                        } else {
                                            jQuery(this).addClass('placeHolder');
                                        }
                                    });
                                });
                            }
                            jQuery('.mktoForm .mktoField').each(function () { jQuery(this).attr("Placeholder", jQuery(this).attr("Placeholder") + " *"); });
                            jQuery('select#Number_of_Techs_Ranges__c_lead option:first-child, select#Function_Dept__c option:first-child, select#Country option:first-child').append(' *');
                            jQuery('.exit-promoter-modal.only_email .form-wrapper .mktoForm #Email').attr('Placeholder','Work Email *');
                            jQuery('.form-wrapper .mktoForm .mktoFormRow u a').closest('.mktoFormRow').addClass('TandC-row');
                            jQuery('.form-wrapper .mktoForm .mktoButtonWrap .mktoButton').html('<span class="first-text"><span class="arrow"></span>WATCH THE DEMO</span><span class="second-text"><span class="arrow"></span>WATCH THE DEMO</span>');
                            jQuery('.exit-promoter-modal .loader').hide();
                            jQuery('.exit-promoter-modal .free_trial_banner .form-wrapper form.mktoForm').show();
                            jQuery('#Country').change(function () {
                            if (jQuery('#State').length >= 1) {
                                jQuery('#State').closest('.mktoFormRow').addClass('StateFormRow');
                                jQuery('#State').prepend('<option id="StatePlaceholder" selected>Select Your State *</option>');
                            } else {
                                jQuery('#State').closest('.mktoFormRow').removeClass('StateFormRow');
                                jQuery('#StatePlaceholder').remove();
                            }
                            if (jQuery('#Implied_Opt_In__c').length >= 1) {
                                jQuery('#Implied_Opt_In__c').closest('.mktoFormRow').addClass('CheckBoxFormRow');
                            } else {
                                jQuery('#Implied_Opt_In__c').closest('.mktoFormRow').removeClass('CheckBoxFormRow');
                            }
                            mktoFormReady();
                        });
                            var targetNodes = document.querySelectorAll('.mktoFieldWrap');
                            var config = { attributes: true, childList: true, subtree: true };
                            var callback = function (mutationsList, observer) {
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
                        form.onValidate(function () {
                            var email = form.vals().Email;
                            if (email) {
                                if (!isEmailValid(email)) {
                                    form.submitable(false);
                                    var emailElem = form.getFormElem().find("#Email");
                                    form.showErrorMessage("Must be valid email. <span class='mktoErrorDetail'>user@example.com</span>", emailElem);
                                    emailElem.removeClass('mktoValid').addClass('mktoInvalid');
                                    return false;
                                } else if (!isEmailGood(email)) {
                                    form.submitable(false);
                                    var emailElem = form.getFormElem().find("#Email");
                                    emailElem.removeClass('mktoValid').addClass('mktoInvalid');
                                    form.showErrorMessage("Must enter business email (no gmail, yahoo, etc.)", emailElem);
                                    return false;
                                } else {
                                    form.submitable(true);
                                }
                            }
                            if (jQuery('#State').length == 1) {
                                var state = jQuery('#State').val();
                                if (state == undefined || state == '' || state == 'Select Your State *') {
                                    form.submitable(false);
                                    var emailElem = form.getFormElem().find("#State");
                                    form.showErrorMessage("This field is required.", emailElem);
                                    return false;
                                } else {
                                    form.submitable(true);
                                }
                            } else {
                                form.submitable(true);
                            }
                        });
                            mktoFormReady();
                            form.onSubmit(function () {
                                (window.dataLayer = window.dataLayer || []).push({
                                    'event': 'page.formSubmit',
                                    'page.formSubmit': {
                                        'name': window.location.href
                                    }
                                });
                            });
                            form.onSuccess(function (values, url) {
                                window['optimizely'] = window['optimizely'] || [];
                                window['optimizely'].push({
                                    type: "event",
                                    eventName: "Exit Promoter on Product Page",
                                });
                                dataLayer = dataLayer || [ ];
                                dataLayer.push ({
                                    "event" : "Exit-Promoter",
                                    "Category": "Ext-Form",
                                    "Action": "Submitted",
                                    "Label": window.location.href
                                });
                                if (window.location.href.indexOf("www.servicemax.com/products/zinc") > -1) {
                                    if (form.getId() == 4629) {
                                        setCookie('Exit_Intent_Modal_form_Filled', true, 1000000);
                                    }
                                    window.location.href = "//lp.servicemax.com/ServiceMax-Product-Overview-Demo-TY.html";
                                    return false;
                                } else {
                                    if (form.getId() == 4629) {
                                        setCookie('Exit_Intent_Modal_form_Filled', true, 1000000);
                                    }
                                    window.location.href = "//lp.servicemax.com/ServiceMax-Product-Overview-Demo-TY.html";
                                    return false;
                                }
                            });
                        });
                    function isEmailValid(email) {
                        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                        return re.test(String(email).toLowerCase());
                    }
                    function isEmailGood(email) {
                        for (var i = 0; i < invalidDomains.length; i++) {
                            var domain = invalidDomains[i];
                            if (email.indexOf(domain) != -1) {
                                return false;
                            }
                        }
                        return true;
                    }
                })();
            });
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
                            jQuery('body.exit-promoter-modal').find('[data-popup="exit-promoter-modal"]').css('visibility', 'visible');
                            jQuery('html').toggleClass('popupShown', jQuery('body').hasClass('exit-promoter-modal'));
                            setCookie(onceInDayCookieKey, 'true', 1);
                            setCookie(popupOpenCountCookieKey, parseInt(open_count) + 1, 365);
                        }
                    }, false);
            }, 1000);
            jQuery('.exit-promoter-modal .form-popup [data-popup-close],.exit-promoter-modal .form-popup .modal-overlay,.exit-promoter-modal .popup-close').on('click', function (e) {
                e.preventDefault();
                jQuery('.exit-promoter-modal .form-popup[data-popup="exit-promoter-modal"]').css('visibility', 'hidden');
                var targeted_popup_class = jQuery(this).attr('data-popup-close');
                jQuery('.exit-promoter-modal [data-popup="' + targeted_popup_class + '"]').css('visibility', 'hidden');
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