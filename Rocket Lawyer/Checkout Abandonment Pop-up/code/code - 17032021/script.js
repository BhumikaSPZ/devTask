$(document).ready(function(){
	var bodyEle = document.querySelector('body');
	if ($('body').hasClass('spz_consulation_assessment')) { return; }
	
	// Create Cookie
	var cookieName = 'spz-Free-Consultation-Assessment-10032021';
	var cookieValue = '1';
	var myDate = new Date();
	myDate.setDate(myDate.getDate() + 30);
	document.cookie = cookieName + "=" + cookieValue + ";expires=" + myDate;
	$('body').addClass('spz_consulation_assessment');
	
	$('body.spz_consulation_assessment').append('<div class="abandonment_popup_section">\
	    <div class="abandonment_popup_wrapper">\
	        <div class="abandonment_popup">\
	            <button type="button" class="close_btn"><img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/RocketLawyer/Checkout%20Abandonment%20Pop-up/close_btn.png" alt="Close Button"></button>\
	            <div class="abandonment_popup_content">\
	                <div class="popup_header_wrapper">\
	                    <p class="popup_title">Try Premium on Us</p>\
	                    <p class="popup_subtitle">$0 for 7 Days!</p>\
	                </div>\
	                <div class="popup_content_wrapper">\
	                    <p class="features_title">Do More And Stay Protected With Our Premium Features</p>\
	                    <div class="features_wrapper">\
	                        <div class="feature_icon">\
	                            <img src="//res.cloudinary.com/spiralyze/image/upload/v1615963973/RocketLawyer/Checkout%20Abandonment%20Pop-up/icon_defend.svg" alt="Defent Icon">\
	                        </div>\
	                        <div class="feature_text">\
	                            <p>Dispute protection on all your contracts with Document Defense®</p>\
	                        </div>\
	                    </div>\
	                    <div class="features_wrapper">\
	                        <div class="feature_icon">\
	                            <img src="//res.cloudinary.com/spiralyze/image/upload/v1615963973/RocketLawyer/Checkout%20Abandonment%20Pop-up/icon_sign.svg" alt="Sign Icon">\
	                        </div>\
	                        <div class="feature_text">\
	                            <p>Unlimited digital signatures with RocketSign®</p>\
	                        </div>\
	                    </div>\
	                    <div class="features_wrapper">\
	                        <div class="feature_icon">\
	                            <img src="//res.cloudinary.com/spiralyze/image/upload/v1615963973/RocketLawyer/Checkout%20Abandonment%20Pop-up/icon_talk_to_lawyer.svg" alt="Talk to Lawyer Icon">\
	                        </div>\
	                        <div class="feature_text">\
	                            <p>Ask a lawyer questions or have them review your document</p>\
	                        </div>\
	                    </div>\
	                    <div class="features_wrapper">\
	                        <div class="feature_icon">\
	                            <img src="//res.cloudinary.com/spiralyze/image/upload/v1615963973/RocketLawyer/Checkout%20Abandonment%20Pop-up/icon_documents.svg" alt="Document Icon">\
	                        </div>\
	                        <div class="feature_text">\
	                            <p>Access to our entire library of legal documents</p>\
	                        </div>\
	                    </div>\
	                    <a href="#" class="much_more_text">...And Much More!</a>\
	                    <a href="#" class="free_trial_btn">Start Your Free 7-Day Trial</a>\
	                </div>\
	            </div>\
	        </div>\
	    </div>\
	</div>');
	
});