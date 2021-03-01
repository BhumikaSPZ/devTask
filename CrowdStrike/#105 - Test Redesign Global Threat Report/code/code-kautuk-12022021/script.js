if (!$('body').hasClass('redesign-global-threat')) {
    $('body').addClass('redesign-global-threat');
    // PG Cookies Add
    var cookieName = 'Redesign_Global_Threat_SPZ';
    var cookieValue = '1';
    var myDate = new Date();
    myDate.setDate(myDate.getDate() + 30);
    document.cookie = cookieName +"=" + cookieValue + ";expires=" + myDate;
    // END PG Cookies Add
    
    $('body.redesign-global-threat #HeroTitle').text('The CrowdStrike 2020 Global Threat Report');
    $('body.redesign-global-threat #HeroSubTitle').html('The tactics, techniques, and procedures we use to <span>prevent over 3 trillion cyberattacks per week</span>');
    $('body.redesign-global-threat #HeroSubTitle').after('<button id="form-cta" class="hero-cta">Download Report for Free</button>')
    $('body.redesign-global-threat #HeroTitle').closest('.col-lg-6').addClass('left-part-wrapper');
    $('body.redesign-global-threat #heroForm').closest('.col-lg-6').addClass('right-part-wrapper');
    $('.global-threat-report .book-highlights-sub #ReportPoints').html('<ul>\
	    <li>\
	        <h6>Statistics</h6>\
	        <p>Get the latest eCrime data. Find out just how much Big Game Hunting (BGH), ransomware and malware-free attacks are increasing. </p>\
	    </li>\
	    <li>\
	        <h6>Observed trends</h6>\
	        <p>Insight into world-wide cyberattack activities by country and industry. Receive recommendations to position against potential threats.</p>\
	    </li>\
	    <li>\
	        <h6>The 1-10-60 rule</h6>\
	        <p>Thwart cybercrimes. Learn the 1-10-60 rule, and how to apply it to quickly detect intrusions, investigate them, and eliminate the adversary in record time. </p>\
	    </li>\
	</ul>');
	$(".redesign-global-threat .logo-section #Slider_Title").html("Join the world's <span>top Fortune 100</span> companies who rely on Crowdstrike's <span>award-winning cybersecurity protection</span>");
    
    // form popup
        $('body.redesign-global-threat').append('<div class="form_popup" data-popup="try-for-free-modal">\
            <div class="popup_container">\
                <div class="popup_content">\
                    <a class="form_popup-close" data-popup-close="try-for-free-modal" href="javascript:;">\
                        <img src="//res.cloudinary.com/spiralyze/image/upload/v1586258980/CrowdStrike/Try-For-Free-Modal/close-icon.svg" alt="Close Button" />\
                    </a>\
                    <div class="modal_left_content">\
                        <div class="global-threat-Modal-title">Get the CrowdStrike 2020 Global Threat Report</div>\
                    </div>\
                    <div class="modal_right_content">\
                        <div class="free-trial-banner">\
                            <div class="form-wrapper">\
                                <div class="homepage_form">\
                                    <form id="mktoForm_5968"></form>\
                                    <div class="loader">\
                                        <img src="//res.cloudinary.com/spiralyze/image/upload/v1574768066/CrowdStrike/%20Try-Falcon-Prevent-New/loader.gif" alt="Loader">\
                                        <p>Please wait a few seconds...</p>\
                                    </div>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                </div>\
            </div>\
            <div class="modal_overlay"></div>\
        </div>');
        var FormLoadInterval = setInterval(function () {
            if (typeof MktoForms2 != "undefined"){
                clearInterval(FormLoadInterval);
            
                MktoForms2.loadForm("281-OBQ-266", 5968);
                MktoForms2.whenReady(function (form) {
                    $('.homepage_form form #Company').closest('.mktoFormRow').after($('.homepage_form form #Title').closest('.mktoFormRow'));
                    $('.homepage_form form #Country').closest('.mktoFormRow').addClass('Countryfield');
                    $('.redesign-global-threat .loader').hide();
                    $('.redesign-global-threat .free-trial-banner .form-wrapper form.mktoForm, .redesign-global-threat .form_popup .no_credit').css('visibility','visible');
                    
                    // Pass these values through hidden form fields to Marketo & SFDC 
                    // $('.redesign-global-threat [name=Ad_TestCTA__c]').val('Start_Free_Trial');
                    // $('.redesign-global-threat [name=Ad_Test__c]').val('Trial_Exit_Promoter_Variant_Thank_You_092420');
                    // Hidden fields val over
                    
                    // for left border color change
                    $(".redesign-global-threat .mktoForm .mktoField").focus(function () {
                        $(this).closest('.mktoFieldWrap').addClass("focused");
                    }).blur(function () {
                        if ($(this).val() == '' || $(this).val() == null) {
                            $(this).closest('.mktoFieldWrap').removeClass("focused");
                        } else if ($(this).val() != '' || $(this).val() != null) {
                            $(this).closest('.mktoFieldWrap').addClass("focused");
                        }
                    });

                    form.onValidate(function () {
                        var email = form.vals().Email;
                        if (email) {
                            if (!isEmailValid(email)) {
                                form.submitable(false);
                                var emailElem = form.getFormElem().find("#Email");
                                form.showErrorMessage(
                                    "Must be valid email. <span class='mktoErrorDetail'>example@yourdomain.com</span>",
                                    emailElem);
                            } else if (!isEmailGood(email)) {
                                form.submitable(false);
                                var emailElem = form.getFormElem().find("#Email");
                                form.showErrorMessage("Must be Business email.", emailElem);
                            } else {
                                form.submitable(true);
                            }
                        }
                    });
                    form.onSubmit(function () {
                        (window.dataLayer = window.dataLayer || []).push({
                            'event': 'page.formSubmit',
                            'page.formSubmit': {
                                'name': window.location.href
                            }
                        });
                    });					
                });
                var invalidDomains = ["@Aol.", "@seat.", "@Aussiemailmail.", "@merseymail.", "@muchomail.",
                    "@pop.safe-mail.", "@vfemail.", "@click2mail.", "@e4ward.", "@gishpuppy.", "@guerrillamail.",
                    "@mailinator .", "@spamgourmet.", "@spamex.", "@store.juno.", "@lycos.", "@TheFreeSite.",
                    "@my.topicaplus.", "@findlaw.", "@keepandbeararms.", "@techemail.", "@incredimail.",
                    "@en.speedy-mail-software.", "@mailpride.", "@mollymail.", "@pandaemail.sourceforge.", "@33MAIL.",
                    "@freeola.", "@protonmail.", "@opera.", "@NoPeddlers.", "@nz11.", "@yandex.", "@zoho.", "@gmx.",
                    "@tempr.email.", "@www.one.", "@tempinbox.", "@emailsensei.", "@emz.", "@fakeinbox.", "@filzmail.",
                    "@greensloth.", "@hidemail.", "@trashmail.", "@jmail.ovh.", "@mail.ovh.", "@mailcatch.",
                    "@mail-temporaire.", "@qip.ru.", "@maildrop.cc.", "@Lortemail.dk.", "@mytrashmail.", "@mailnesia.",
                    "@mailnull.", "@no-spam.ws.", "@nervtmich.", "@notsharingmy.info.", "@nowmymail.", "@trashmail.",
                    "@onewaymail.", "@otherinbox.", "@Safe-mail.", "@safersignup.", "@safersignup.", "@sharklasers.",
                    "@shitmail.me.", "@sibmail.", "@sharpmail.co.uk.", "@spam4.me.", "@soodonims.", "@spamex.",
                    "@temp-mail.", "@tempemail.", "@mytrashmail.", "@instantemailaddress.", "@trashmail.", "@yopmail.",
                    "@yopmail.", "@wegwerfemail.", "@yopmail.", "@gmail.", "@hotmail.", "@yahoo.", "@outlook.",
                    "@live.", "@ecologyfund.", "@Computermail.", "@.emailaccount.", "@emailchoice.", "@inbox.",
                    "@swissmail.", "@mail.rediff.", "@i.aol.", "@UltimateEmail.", "@soltecsis.", "@meowmail.",
                    "@apple.", "@aussiemail.au.", "@bigstring.", "@canada.", "@icqmail.", "@zilladog.", "@l8r.",
                    "@futureme.", "@12free.co.", "@animail.", "@care2.", "@lavabit.", "@lpemail.", "@macgui.",
                    "@webmail.co.", "@AsianAve.", "@burntmail.", "@fanmail.", "@thedoghousemail.", "@Address.",
                    "@excite.", "@e-mol.", "@mail2web.", "@everyone.", "@About.", "@nativestar.",
                    "@speedy-mail-software.", "@icloud.", "@me.", "@mac.", "@mail.", "@mochamail.", "@go.",
                    "@prontomail.", "@hushmail."
                ];
                function isEmailValid(email) {
                    var re =
                        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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
            }
        },200);

        $("#form-cta").click(function(){
            $(".form_popup").css("display", "block");
        });
        $('.redesign-global-threat .form_popup [data-popup-close]').on('click', function(e) {
            //localStorage.setItem('isPopupClosedByUser', 'true');
            $('.redesign-global-threat .form_popup[data-popup="try-for-free-modal"]').fadeOut(350);
            var targeted_popup_class = $(this).attr('data-popup-close');
            $('.redesign-global-threat [data-popup="' + targeted_popup_class + '"]').fadeOut(350);
            $('html.popupShown').removeClass('popupShown');
        });
}
