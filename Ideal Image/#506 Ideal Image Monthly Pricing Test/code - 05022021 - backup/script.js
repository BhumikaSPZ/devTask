var setjQueryInterval = setInterval(function() {
    // If JQuery is loaded
    if(typeof $ != 'undefined'){
        clearInterval(setjQueryInterval);
        // Ref
        var body = $('body');
        // Init Test
        if(!body.hasClass('spz-lp-botox')){
            // Create Cookie
            var cookieName = '#350-Ideal-Image-Botox-LP-Imagery-Testing';
            var cookieValue = '1';
            var myDate = new Date();
            myDate.setDate(myDate.getDate() + 30);
            document.cookie = cookieName + "=" + cookieValue + ";expires=" + myDate;
            // Add Class
            body.addClass('spz-lp-botox');
         
			// update hero image
            $('.heroBox-image .vc_single_image-wrapper').html('<img src="//res.cloudinary.com/spiralyze/image/upload/v1611640065/Ideal%20Image/350-Ideal_Image-Botox_LP-Imagery-Testing/Botox_Before_After_Round1.gif" alt="face spa result">');
			
            // manage sub-headline 
            var gettext = $('.sub-headline p').text();
            gettext.replace(/\D/g, "");
            gettext = gettext.split('.');
            first_value = gettext[0].replace(/\D/g, "");
            second_value = gettext[1].replace(/\D/g, "");

            $('.sub-headline p').html('\
                <span class="money_wrapper">\
                    <span><sup class="dollar_sign">$</sup>' + first_value + '</span>\
                    <span class="fractional_unit">\
                        <span class="fractional_digit">.' + second_value + '</span>\
                        <span class="per_unit">Per Unit<sup>*</sup></span>\
                    </span>\
                </span>\
                <p class="botox_text">Botox<sup>®</sup></p>\
            ');
         
            $(window).trigger('resize');
        }
    }
}, 500);
