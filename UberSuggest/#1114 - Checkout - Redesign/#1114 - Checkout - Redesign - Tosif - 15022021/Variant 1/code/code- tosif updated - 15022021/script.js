var planObj = {
    monthly: {
        tier1: 'Individual - Monthly',
        tier2: 'Business - Monthly',
        tier3: 'Enterprise / Agency - Monthly',
    },
    lifetime: {
        tier1: 'Individual - Lifetime',
        tier2: 'Business - Lifetime',
        tier3: 'Enterprise / Agency - Lifetime',
    },
    dropdownTxt: function () {
        return
    }
}
var mainHeaderHtml = '<span class="billing-info">Enter Your Billing Information</span>\
    <h1 class="main-title">Start 7-Day Free Trial</h1>\
    <span class="get-started">Unlock All Features & Get Started in Less than 60 Seconds</span>\
    ';
var spzBadgeHtml = '<img src="//res.cloudinary.com/spiralyze/image/upload/v1613121913/Ubsersuggest/1114%20-%20Checkout%20-%20Redesign/7-Day-Badge.svg" class="monthly" title="7-Day Free Trial" alt="7-Day Free Trial" />\
            <img src="//res.cloudinary.com/spiralyze/image/upload/v1613121915/Ubsersuggest/1114%20-%20Checkout%20-%20Redesign/30-Day-Badge.svg" class="lifetime" title="30-Day Money-Back Guarantee" alt="30-Day Money-Back Guarantee" />';
var orderReviewHtml = '<h3 class="title">Your Order Review</h3><div class="order-info">';
// <span class="order-info-txt">One-Time Fee. 30-Day Money-Back Guarantee. </span><span class="order-totle">Total: </span><span>$290</span></div>
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
                headingEle?.parentElement?.parentElement?.children[headingEle?.parentElement?.parentElement?.childElementCount - 1].classList.add('spz-control-heading');
                headingEle?.parentElement?.parentElement?.children[headingEle?.parentElement?.parentElement?.childElementCount - 2].classList.add('spz-control-list')


                // Right Block
                headingEle?.parentElement?.parentElement?.nextElementSibling?.classList.add('spz-right-block');
                // Form Wrapper
                headingEle?.parentElement?.parentElement?.nextElementSibling?.firstElementChild.classList.add('spz-form-wrapper');
                // Spz badge
                headingEle?.parentElement?.parentElement?.nextElementSibling?.firstElementChild.children[0].classList.add('spz-control-badge');
                // Form Title
                headingEle?.parentElement?.parentElement?.nextElementSibling?.firstElementChild.childElementCount == 4 &&
                    headingEle?.parentElement?.parentElement?.nextElementSibling.firstElementChild.children[2].classList.add('spz-form-title');
                // Form
                headingEle?.parentElement?.parentElement?.nextElementSibling?.firstElementChild.querySelector('form').classList.add('spz-form');
                // Form Elements
                headingEle?.parentElement?.parentElement?.nextElementSibling?.firstElementChild.querySelector('form').children[0].classList.add('paypa-btn');
                headingEle?.parentElement?.parentElement?.nextElementSibling?.firstElementChild.querySelector('form').children[1].classList.add('or-text');
                headingEle?.parentElement?.parentElement?.nextElementSibling?.firstElementChild.querySelector('form').children[2].classList.add('enter-detail-txt');
                headingEle?.parentElement?.parentElement?.nextElementSibling?.firstElementChild.querySelector('form').children[3].classList.add('name-fld');
                headingEle?.parentElement?.parentElement?.nextElementSibling?.firstElementChild.querySelector('form').children[4].classList.add('card-no-fld');
                headingEle?.parentElement?.parentElement?.nextElementSibling?.firstElementChild.querySelector('form').children[5].classList.add('card-exp-fld');
                headingEle?.parentElement?.parentElement?.nextElementSibling?.firstElementChild.querySelector('form').children[6].classList.add('country-fld');
                headingEle?.parentElement?.parentElement?.nextElementSibling?.firstElementChild.querySelector('form').children[8].classList.add('zip-fld');
                headingEle?.parentElement?.parentElement?.nextElementSibling?.firstElementChild.querySelector('form').children[9].classList.add('policy-txt');
                headingEle?.parentElement?.parentElement?.nextElementSibling?.firstElementChild.querySelector('form').children[10].classList.add('submit-btn');

                // Hide/Show Pricing related text around DropDown
                document.querySelector('.selector-value b')?.parentElement?.classList.add('d-none');
                document.querySelector('.selector')?.nextElementSibling?.classList.add('spz-info-txt-ele');
                document.querySelector('.selector')?.nextElementSibling?.firstElementChild.classList.add('spz-info-txt');
                document.querySelector('.selector-value')?.firstElementChild?.firstElementChild?.firstElementChild?.classList.add('spz-selector-txt');

                console.log('running !')

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
            console.log('mutation', mutation);
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
            // console.log('sadsadsad')
            if (!mainHeader && document.querySelector('.spz-wrapper')) {
                var mainHeaderEle = document.createElement('div');
                mainHeaderEle.classList.add('spz-main-header');
                mainHeaderEle.innerHTML = mainHeaderHtml;
                document.querySelector('.spz-wrapper')?.insertBefore(mainHeaderEle, document.querySelector('.spz-wrapper').children[0]);
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
            // Add Form Badge
            var spzBadge = document.querySelector('.spz-badge');
            var spzFormWrapper = document.querySelector('.spz-form-wrapper');
            if (!spzBadge && spzFormWrapper) {
                var badgeType = spzControlBadge.innerText.includes('7') ? 'monthly' : 'lifetime';
                var newSpzbadge = document.createElement('div');
                newSpzbadge.className = 'spz-badge ' + badgeType;
                newSpzbadge.innerHTML = spzBadgeHtml;
                spzFormWrapper.insertBefore(newSpzbadge, spzFormWrapper.children[1]);
                running = true;
                setTimeout(function () { running = false; }, 100);
            }
            // Change Submit Btn Text
            var submitBtn = document.querySelector('.submit-btn');
            if (submitBtn && submitBtn.innerHTML.indexOf('&') < 0) {
                submitBtn.innerHTML = submitBtn.innerHTML.replace('AND', '&');
                running = true;
                setTimeout(function () { running = false; }, 100);
            }
            // Add Order Review/ Form Bottom
            var orderReviewBlock = document.querySelector('.spz-order-review');
            if (!orderReviewBlock && rightBlock) {
                var orderReviewEle = document.createElement('div');
                orderReviewEle.className = "spz-order-review";
                orderReviewEle.innerHTML = orderReviewHtml;
                rightBlock.insertBefore(orderReviewEle, rightBlock.children[1]);
                running = true;
                setTimeout(function () { running = false; }, 100);
            }
            // Add Class To Change Pack Link
            if ((mutation.type == "childList" && mutation.addedNodes.length == 1 && mutation.target.classList.contains('spz-left-block') && mutation.addedNodes[0].innerText.indexOf('Switch to lifetime to save') > -1) ||
                (!document.querySelector('.spz-switch-plan-link') && leftBlock?.childElementCount == 6)) {
                var tagret = mutation.addedNodes[0] || leftBlock.children[1];
                tagret.classList.add('spz-switch-plan-link');
                tagret.children[1].className = "change-plan-link";
                tagret.children[1].innerHTML = 'Switch to Lifetime Plan ';
                tagret.insertAdjacentHTML('beforeend', '&nbsp;<span class="font-light">to Save 90%</span>');
                running = true;
                setTimeout(function () { running = false; }, 100);
            }
            // Chnage Dropdown Text
            var dropdownEle = document.querySelector('.spz-selector-txt');
            if (dropdownEle && (dropdownEle.innerText.includes('Billed') || dropdownEle.innerText.includes('MEMBERSHIP'))) {
                var isLifeTime = leftBlock.childElementCount == 5;
                var getTier = getParams('tier');
                dropdownEle.innerText = isLifeTime ? planObj.lifetime[getTier] : planObj.monthly[getTier];
                running = true;
                setTimeout(function () { running = false; }, 100);
            }
            // Change Plan Helper Text
            var infoTxt = document.querySelector('.spz-info-txt');
            if (infoTxt && (infoTxt.innerHTML.includes('30-day') || infoTxt.innerHTML.includes('7 days'))) {
                var isLifeTime = leftBlock.childElementCount == 5;
                var price = infoTxt.querySelector('b')?.innerText;
                // Add Total Text
                if (!infoTxt.querySelector('.today-total')) {
                    infoTxt.innerHTML = isLifeTime ? 'One-Time Fee. 30-Day Money-Back Guarantee.' :
                        '<span class="font-medium today-total">TODAY’S Total:</span><span class="font-light">After 7 days: ' + price + ' (billed monthly)</span>';
                }
                // Add Total On Right Side
                if (document.querySelector('.spz-info-txt-ele .total-value')) {
                    document.querySelector('.spz-info-txt-ele .total-value').remove();
                }
                if (!document.querySelector('.spz-info-txt-ele .total-value')) {
                    var newRightPricingHtml = '<div class="total-value font-medium">' + (isLifeTime ? 'Total:' + price : '$0 for 7 days') + '</div>';
                    infoTxt.insertAdjacentHTML('afterend', newRightPricingHtml);
                }
                running = true;
                setTimeout(function () { running = false; }, 100);
            }
            // If Lifetime Or Not
            if (mutation.type == "childList" && (mutation.addedNodes.length == 1 || mutation.removedNodes.length == 1) && mutation.target.classList.contains('spz-left-block')) {
                if (leftBlock?.childElementCount == 6) {
                    document.body.classList.add('isMonthly');
                    document.body.classList.remove('isLifetime');
                }
                if (leftBlock?.childElementCount == 5) {
                    document.body.classList.add('isLifetime');
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