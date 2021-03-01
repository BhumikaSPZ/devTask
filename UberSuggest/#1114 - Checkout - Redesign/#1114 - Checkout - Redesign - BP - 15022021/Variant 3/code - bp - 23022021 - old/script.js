var planObj = {
    monthly: {
        tier1: 'Individual - Monthly',
        tier2: 'Business - Monthly',
        tier3: 'Enterprise / Agency - Monthly'
    },
    lifetime: {
        tier1: 'Individual - Lifetime',
        tier2: 'Business - Lifetime',
        tier3: 'Enterprise / Agency - Lifetime'
    },
    dropdownTxt: function () {
        return;
    }
};
var progressBar = '<div class="progressbar-wraper">\
    <ul>\
        <li></li>\
        <li></li>\
        <li class="active"></li>\
    </ul>   \
</div>';
var mainHeaderHtml = '<span class="billing-info">Enter Your Billing Information</span>\
    <h1 class="main-title main-title-monthly">Start 7-Day Free Trial</h1>\
    <h1 class="main-title main-title-lifetime">Get Lifetime Access</h1>\
    <span class="get-started">Unlock All Features & Get Started in Less than 60 Seconds</span>\
    ';
var spzBadgeHtml = '<img src="//res.cloudinary.com/spiralyze/image/upload/v1613121913/Ubsersuggest/1114%20-%20Checkout%20-%20Redesign/7-Day-Badge.svg" class="monthly" title="7-Day Free Trial" alt="7-Day Free Trial" />\
            <img src="//res.cloudinary.com/spiralyze/image/upload/v1613121915/Ubsersuggest/1114%20-%20Checkout%20-%20Redesign/30-Day-Badge.svg" class="lifetime" title="30-Day Money-Back Guarantee" alt="30-Day Money-Back Guarantee" />';
var orderReviewHtml = '<h3 class="title">Your Order Review</h3><div class="order-info"><span class="order-info-txt">One-Time Fee. 30-Day Money-Back Guarantee. </span><span class="order-totle">Total: </span><span>$290</span></div>';
var qaWrapper = "<div class='qa-wrapper'>\
    <div class='qa-content'>\
        <p class='qa-title'>Why do you need my credit card for free trial?</p>\
        <div class='qa-answer'>\
            <p>We ask for your credit card to allow your membership to continue after your free trial, should you choose not to cancel. This also allows us to reduce fraud and prevent multiple free trials for one person. This helps us deliver better service for all the honest customers.</p> \
            <p>Remember that we won't bill you anything during your free trial and that you can cancel at any moment before your trial ends.</p>\
	    </div>\
	    </div>\
	    <div class='qa-content'>\
	        <p class='qa-title'>How does the lifetime subscription work?</p>\
	        <div class='qa-answer'>\
	            <p>Our competitors Moz, Ahrefs, & SEMrush charge $950 to $9,900 a year. So, we decided to try this crazy lifetime offer. Pay once and get full access for life! </p>\
				<p>It's 90% cheaper than our competitor's subscription price. You get access to all of the new features that we keep on adding regularly to Ubersuggest. </p>\
				<p>Or if you don't want to commit, the monthly option is still 70% cheaper. Either way, you win.<p>\
	        </div>\
	    </div>\
	    <div class='qa-content'>\
	        <p class='qa-title'>Can I change plans later?</p>\
	        <div class='qa-answer'>\
	            <p>Changing plans is really simple. You can upgrade or downgrade your plan within the Account settings. If you are upgrading to a higher plan, you will be prorated the difference.<p>\
	        </div>\
	    </div>\
	</div>";
	
var spzHeroLeftContent = '<div class="spz-hero-left-content">\
    <div class="free-trial-wrapper">\
    	<div class="trial-detail trial-detail-monthly">\
	        <h3 class="trial-title">100% No-Risk Free Trial</h3>\
	        <div class="trial-benefits font-light">\
	            <span>Pay nothing for the first 7-days</span>\
	            <span>|</span>\
	            <span>Cancel ANYTIME during your trial</span>\
	        </div>\
	    </div> \
	    <div class="trial-detail trial-detail-lifetime">\
	        <h3 class="trial-title">30-Day Money-Back Guarantee.</h3>\
	        <div class="trial-benefits font-light">\
	            <p>No Questions Asked.</p>\
	        </div>\
	    </div> \
        <div class="review-top-line"><div></div></div>\
        <div class="review-wrapper">\
            <p class="review">\
                Ubersuggest is a smartly written app for SEO work. Neil Patel is a highly respected practitioner who has down-to-earth advice for digital marketers. His own proven successes and preferences are well reflected in Ubersuggest which is well designed, easy to use, and authoritative.\
            </p>\
            <p class="reviewer">Todd Nilson</p>\
            <p class="profession">Clock Tower Advisors</p>\
        </div>\
    </div>\
</div>';	
var companyLogo = '<div class="company-logo-wrapper">\
            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/Ubsersuggest/1114%20-%20Checkout%20-%20Redesign/company_logos_v3.png" alt="company logos" title="company logos">\
        </div>';
	
// Get Value of query parameter
function getParams(name) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(window.location.href);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
// Function To Get Selecotr By Text
function elementByText(tagName, searchText) {
    var strictTxtFlag = false;
    var allTags = document.getElementsByTagName(tagName);
    var ele;
    for (i = 0; i < allTags.length; i++) {
        if (strictTxtFlag && allTags[i].innerText == searchText) {
            ele = allTags[i];
            break;
        }
        if (!strictTxtFlag && allTags[i].innerHTML == searchText) {
            ele = allTags[i];
            break;
        }
    }
    return ele;
}
// Load Test
function loadTest() {
    // Ref
    var bodyEle = document.querySelector('body');
    var leftBlock = document.querySelector('.spz-left-block');
    var rightBlock = document.querySelector('.spz-right-block');
    if (bodyEle.classList.contains('spz-checkout') && leftBlock && rightBlock) { return; }
    // Create Cookie
    var cookieName = '#1114-Checkout-Redesign-12022021';
    var cookieValue = '1';
    var myDate = new Date();
    myDate.setDate(myDate.getDate() + 30);
    document.cookie = cookieName + "=" + cookieValue + ";expires=" + myDate;
    bodyEle.classList.add('spz-checkout');
    function initSelector() {
        var setHeadingEleInterval = setInterval(function () {
            // If Heading Found
            var targetHeadingTxt = 'Unlock All Features And Grow Your SEO Traffic'
            var headingEle = elementByText('div', targetHeadingTxt);
            if (headingEle) {
                clearInterval(setHeadingEleInterval);
                // Add Heading Class
                headingEle.classList.add('spz-heading');
                // Header Wrapper
                headingEle?.parentElement?.classList.add('spz-heading-wrapper');
                // User Image
                headingEle?.previousElementSibling?.classList.add('spz-img');
                // Main Wrapper
                headingEle?.parentElement?.parentElement?.parentElement?.classList.add('spz-main-wrapper');
                // Main Wrapper Parent
                headingEle?.parentElement?.parentElement?.parentElement?.parentElement?.classList.add('spz-wrapper');
                // Left Block
                headingEle?.parentElement?.parentElement?.classList.add('spz-left-block');
                // Control List and header
                headingEle?.parentElement?.parentElement?.children[headingEle?.parentElement?.parentElement?.childElementCount - 2].classList.add('spz-control-heading');
                headingEle?.parentElement?.parentElement?.children[headingEle?.parentElement?.parentElement?.childElementCount - 1].classList.add('spz-control-list')
                // Right Block
                headingEle?.parentElement?.parentElement?.nextElementSibling?.classList.add('spz-right-block');
                // Form Wrapper
                headingEle?.parentElement?.parentElement?.nextElementSibling?.firstElementChild.classList.add('spz-form-wrapper');
                // Spz badge
                headingEle?.parentElement?.parentElement?.nextElementSibling?.firstElementChild.children[0].classList.add('spz-control-badge');
                // Form Title
                // headingEle?.parentElement?.parentElement?.nextElementSibling?.firstElementChild.childElementCount == 4 &&
                    headingEle?.parentElement?.parentElement?.nextElementSibling.firstElementChild.children[1].classList.add('spz-form-title');
                // Form
                headingEle?.parentElement?.parentElement?.nextElementSibling?.firstElementChild.querySelector('form').classList.add('spz-form');
                // Form Elements
                headingEle?.parentElement?.parentElement?.nextElementSibling?.firstElementChild.querySelector('form').children[0].classList.add('paypal-btn');
                headingEle?.parentElement?.parentElement?.nextElementSibling?.firstElementChild.querySelector('form').children[1].classList.add('or-text');
                headingEle?.parentElement?.parentElement?.nextElementSibling?.firstElementChild.querySelector('form').children[2].classList.add('enter-detail-txt');
                headingEle?.parentElement?.parentElement?.nextElementSibling?.firstElementChild.querySelector('form').children[3].classList.add('name-fld');
                headingEle?.parentElement?.parentElement?.nextElementSibling?.firstElementChild.querySelector('form').children[4].classList.add('card-no-fld');
                headingEle?.parentElement?.parentElement?.nextElementSibling?.firstElementChild.querySelector('form').children[5].classList.add('card-exp-fld');
                headingEle?.parentElement?.parentElement?.nextElementSibling?.firstElementChild.querySelector('form').children[6].classList.add('country-fld');
                headingEle?.parentElement?.parentElement?.nextElementSibling?.firstElementChild.querySelector('form').children[8].classList.add('zip-fld');
                headingEle?.parentElement?.parentElement?.nextElementSibling?.firstElementChild.querySelector('form').children[9].classList.add('policy-txt');
                headingEle?.parentElement?.parentElement?.nextElementSibling?.firstElementChild.querySelector('form').children[10].classList.add('submit-btn');
				
				var targetselectval =  document.querySelector('.selector-value>div:first-child');
	            targetselectval.children[0].children[0].classList.add('selecter-text');
            }
        }, 500);
    }
    initSelector();
    // Init Test Structure
    function initStructure() {
        // Check If Main Block Is Loaded Or Not
        var mainBlockInterval = setInterval(function () {
            // If main block is not there
            var leftBlock = document.querySelector('.spz-left-block');
            var rightBlock = document.querySelector('.spz-right-block');
            (!leftBlock || !rightBlock) && initSelector();
            leftBlock && rightBlock && clearInterval(mainBlockInterval);
        });
    }
    initStructure();
    // observer binding
    var target = document.getElementById('root');
    var config = {
        childList: true, characterData: true, subtree: true, attributes: true,
    };
    var running = false;
    var callback = function (mutationsList, observer) {
        for (var mutation of mutationsList) {
            var leftBlock = document.querySelector('.spz-left-block');
            var rightBlock = document.querySelector('.spz-right-block');
            // Check if not checkout page
            bodyEle.classList.toggle('spz-checkout', window.location.href.includes('checkout'))
            bodyEle.classList.toggle('loaded', leftBlock && rightBlock)
            // Is Desktop?
            var isDesktop = window.matchMedia("(min-width: 1024px)").matches;
            if (!isDesktop || running || !window.location.href.includes('checkout')) return;
            // Add Clss List
            if (mutation.type == "childList" && mutation.addedNodes.length == 1 && !leftBlock && !rightBlock) {
                initSelector();
            }
			
            // Add main title
            var mainHeader = document.querySelector('.spz-main-header');
            if (!mainHeader && document.querySelector('.spz-wrapper')) {
                var mainHeaderEle = document.createElement('div');
                // mainHeaderEle.classList.add('spz-main-header');
                mainHeaderEle.className = "spz-main-header";
                mainHeaderEle.innerHTML = mainHeaderHtml;
                document.querySelector('.spz-wrapper')?.insertBefore(mainHeaderEle, document.querySelector('.spz-wrapper').children[0]);
                
                // Add progressBar 
	            var progressBarSection = document.createElement('div');
	            progressBarSection.className = 'progress-bar-section';
	            progressBarSection.innerHTML = progressBar;
	            document.querySelector('.spz-wrapper').insertBefore(progressBarSection,mainHeaderEle);
                
                // Change form title 
	            var spzWrapper = document.querySelector('.spz-wrapper');
	            var spzFormTitle = document.querySelector('.spz-form-title');
	            spzFormTitle.innerHTML = 'Lifetime Access<div></div>';
                
                var paypalBtnImg = document.querySelector('.paypal-btn img');
	            paypalBtnImg.setAttribute('src', '//res.cloudinary.com/spiralyze/image/upload/f_auto/Ubsersuggest/1114%20-%20Checkout%20-%20Redesign/paypal_btn_img.png');
	            
	            // Add Company logo section
	            var companyLogosSection = document.createElement('div');
	            companyLogosSection.className = "spz-company-logo-section";
	            companyLogosSection.innerHTML = companyLogo;
	            spzWrapper.appendChild(companyLogosSection);
	            
	            // Add QA section
	            var qaSection = document.createElement('div');
	            // qaSection.classList.add('spz-qa-section');
	            qaSection.className = "spz-qa-section";
	            qaSection.innerHTML = qaWrapper;
	            spzWrapper.appendChild(qaSection);
	            
	            var spzHeadingWrapper = document.querySelector('.spz-heading-wrapper');
	            var orderReviewHeader = document.createElement('div');
	            orderReviewHeader.classList = 'order-review-header';
	            orderReviewHeader.innerHTML = '<h3 class="title">Your Order Review</h3>'
	            leftBlock.insertBefore(orderReviewHeader,spzHeadingWrapper);
	            
	            // Add planselection dropdown
	            var spzMainWrapper = document.querySelector('.spz-wrapper .spz-main-wrapper');
	            var spzHeroLeft = document.createElement('div');
	            // spzHeroLeft.classList.add('spz-hero-left');
	            spzHeroLeft.className = "spz-hero-left";
	            spzHeroLeft.innerHTML = spzHeroLeftContent;
	            leftBlock.appendChild(spzHeroLeft);
	            
            
                running = true;
                setTimeout(function () { running = false; }, 100);
            }
            
            
            // Add Control Badge
            var spzControlBadge = document.querySelector('.spz-control-badge');
            if (!spzControlBadge) {
                document.querySelector('.spz-form-wrapper')?.firstElementChild.classList.add("spz-control-badge");
                running = true;
                setTimeout(function () { running = false; }, 100);
            }
                     
            
            // Add Order Review/ Form Bottom
            var switchPlanText = document.querySelector('.switch-plan-text');
            if (!switchPlanText && leftBlock) {
            
                leftBlock.children[3].classList.add('switch-plan-text');
                
                running = true;
                setTimeout(function () { running = false; }, 100);
            }
            
            // Add Class To Change Pack Link
            if ((mutation.type == "childList" && mutation.addedNodes.length == 1 && mutation.target.classList.contains('spz-left-block') && mutation.addedNodes[0].innerText.indexOf('Switch to lifetime to save') > -1) ||
            (!document.querySelector('.spz-switch-plan-link') && leftBlock?.childElementCount == 7)) {
                var target = mutation.addedNodes[0] || leftBlock.children[1];
                target.classList.add('spz-switch-plan-link');
                target.children[0].className = "get-plan-text";
                target.children[1].className = "change-plan-link";
                target.children[1].innerHTML = '<span>Switch to Lifetime Plan</span><span class="font-light">to Save 90%</span>';
                
                running = true;
                setTimeout(function () { running = false; }, 100);
            }
            // Change submitBtn text
            var dropdownEle = document.querySelector('.selecter-text');
        	var submitBtn = document.querySelector('.submit-btn');
            if (submitBtn && submitBtn.innerHTML.indexOf('&') < 0) {
                submitBtn.innerHTML = submitBtn.innerHTML.replace('AND', '&');
                running = true;
                setTimeout(function () { running = false; }, 100);
            }
            // Change Plan Helper Text
            var infoTxt = document.querySelector('.switch-plan-text div:first-child');
            if (infoTxt && (infoTxt.innerHTML.includes('30-day') || infoTxt.innerHTML.includes('7 days'))) {
                var isLifeTime = leftBlock.childElementCount == 7;
                var price = infoTxt.querySelector('b')?.innerText;
                // Add Total Text
                if (!infoTxt.querySelector('.today-total')) {
                    infoTxt.innerHTML = isLifeTime ? 'One-Time Fee.<p class="total-value font-medium">Total:<span class="total-value-price font-medium">'  +  price +  '</span></p>' :
                        '<span class="font-light today-total">TODAY’S Total:</span><span class="total-value font-medium">$0 for 7 days</span><br><p class="font-light">After 7 days: ' + price + ' (billed monthly)</p>';
                        
                        
	                // Add Total On Right Side
	                if (document.querySelector('.spz-info-txt-ele .total-value')) {
	                    document.querySelector('.spz-info-txt-ele .total-value').remove();
	                }
                }
                running = true;
                setTimeout(function () { running = false; }, 100);
            }
            // If Lifetime Or Not
            var target = document.querySelector('#root');
            if (mutation.type == "childList" && (mutation.addedNodes.length == 1 || mutation.removedNodes.length == 1) && mutation.target.classList.contains('spz-left-block')) {
                if (leftBlock?.childElementCount == 8) {
                    document.body.classList.add('isMonthly');
                    // Change form title 
		            var spzFormTitle = document.querySelector('.spz-form-title');
		            spzFormTitle.innerHTML = '7-Day Free Trial<div></div>';
		            
		            // submitBtn.children[0].innerHTML = 'Start 7-Day Free Trial';
		            
                    document.body.classList.remove('isLifetime');
                }
                if (leftBlock?.childElementCount == 7) {
                    document.body.classList.add('isLifetime');
                    // Change form title 
		            var spzFormTitle = document.querySelector('.spz-form-title');
		            spzFormTitle.innerHTML = 'Lifetime Access<div></div>';
		            
		            // submitBtn.children[0].innerHTML = 'GET LIFETIME ACCESS FOR $290';
		            
                    document.body.classList.remove('isMonthly');
                }
                running = true;
                setTimeout(function () { running = false; }, 100);
            }
        }
    };
    var observer = new MutationObserver(callback);
    observer.observe(target, config);
    // End observer binding    
}
// Init Test
function initTest() {
    var isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    if (window.location.href.includes('en/checkout') && isDesktop) {
        loadTest();
    }
}
// Init Test
window.addEventListener('popstate', initTest);
initTest();
