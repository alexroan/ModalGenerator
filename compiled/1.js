var cookieId = 'signupcarrot_local_1';var displayFrequency = 'always';var appUrl = 'http://thecarrot.local';var impressionUrl = 'http://thecarrot.local/api/impression';var fileContent = '<link rel="stylesheet" href="http://thecarrot.local/popups/css/signupcarrot.css">\
<link rel="stylesheet" href="http://thecarrot.local/popups/css/bootstrap.css">\
<style>\
.signupcarrot .vertically-center{\
    display: flex;\
    flex-direction: column;\
    justify-content: center;\
    align-items: stretch;\
}\
.signupcarrot .overflow-break-word{\
    overflow-wrap: break-word;\
}\
.signupcarrot h1.scalable{\
    font-size: 1.5rem;\
}\
.signupcarrot h2.scalable{\
    font-size: 1.25rem;\
}\
.signupcarrot #signupcarrot-product-image {\
    background-position: center center;\
    background-repeat: no-repeat;\
    background-size: cover;\
}\
@media screen and (max-width: 767px){\
    .signupcarrot .scalable{\
        font-size: 1rem;\
    }\
    .signupcarrot #signupcarrot-product-image {\
        background-position: center bottom;\
        height:10rem;\
    }\
}\
</style>\
<div class="container">\
    <div class="row text-center">\
        <div id="signupcarrot-product-image" class="col-12 col-md-5 offset-md-0"  style="background-image: url(\'http://thecarrot.local/popups/images/keyring-wood.jpg\');">\
        </div>\
        <div class="col-12 col-md-7 vertically-center py-4">\
            <div>\
                <div class="col-sm-12">\
                    <h1 class="scalable text-center overflow-break-word">Get a free personalised keyring</h1>\
                    <h2 class="scalable text-center overflow-break-word">when you sign up to our newsletter</h2>\
                </div>\
                <div class="col-sm-12">\
                    <form id="signupcarrot-form" class="m-0" target="_blank" action="http://thecarrot.local/subscribe" method="get">\
                        <input type="hidden" name="signupcarrot-id" id="signupcarrot-id" value="1">\
                        <input type="hidden" name="signupcarrot-product-select" id="signupcarrot-product-select" value="31161632620646">\
                        <div class="form-group">\
                            <input required maxlength="12" class="form-control form-control-sm" type="text" name="signupcarrot-engraving" id="signupcarrot-engraving" placeholder="Name on Keyring">\
                        </div>\
                        <div class="form-group">\
                            <input required class="form-control form-control-sm" type="email" name="signupcarrot-email" id="signupcarrot-email" placeholder="Email">\
                        </div>\
                        <div class="form-group"><select required name="MERGE||CURRENCY" id="MERGE||CURRENCY" form="signupcarrot-form" class="form-control form-control-sm"><option selected="selected" disabled="disabled" value="">Currency</option><option value="GBP">GBP</option><option value="EUR">EUR</option><option value="USD">USD</option><option value="AUD">AUD</option></select></div><div class="form-group"><input required="true" class="form-control form-control-sm" type="text" name="MERGE||ORIGIN" id="MERGE||ORIGIN" placeholder="Origin"></div>\
                        <div class="form-group">\
                            <input style="background-color: #007bff" class="w-100 btn btn-primary" type="submit" form="signupcarrot-form" value="Subscribe">\
                        </div>\
                    </form>\
                </div>\
            </div>\
        </div>\
    </div>\
</div>\
';// var impressionUrl = '';
// var fileContent = '';
// var appUrl = '';
// var displayFrequency = '';
// var cookieId = '';

document.addEventListener('DOMContentLoaded', function(event) {
    if(typeof jQuery=='undefined') {
        var headTag = document.getElementsByTagName("head")[0];   
        var jqTag = document.createElement('script');
        jqTag.type = 'text/javascript';
        jqTag.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
        jqTag.onload = loadDDExitPopLibrary;
        headTag.appendChild(jqTag);
    } else {
        loadDDExitPopLibrary();
    }    
});

function loadDDExitPopLibrary() {
    if(typeof ddexitpop=='undefined') {
        var headTag = document.getElementsByTagName("head")[0];
        var ddTag = document.createElement('script');
        ddTag.type = 'text/javascript';
        ddTag.src = appUrl + '/popups/js/ddexitpop.js';
        ddTag.onload = loadPopperJs;
        headTag.appendChild(ddTag);
    }
    else{
        loadPopperJs();
    }
}

function loadPopperJs() {
    var headTag = document.getElementsByTagName("head")[0];
    var ddTag = document.createElement('script');
    ddTag.type = 'text/javascript';
    ddTag.src = 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js';
    ddTag.onload = loadBootstrapJs;
    headTag.appendChild(ddTag);
}

function loadBootstrapJs() {
    var headTag = document.getElementsByTagName("head")[0];
    var ddTag = document.createElement('script');
    ddTag.type = 'text/javascript';
    ddTag.src = 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js';
    ddTag.onload = loadHTML;
    headTag.appendChild(ddTag);
}

function loadHTML() {
    var div = document.createElement("div");
    div.setAttribute('id', 'signupcarrot');
    div.setAttribute('class', 'signupcarrot')
    div.innerHTML = fileContent;
    document.body.appendChild(div);
    initializePopup();
}

function initializePopup() {
    jQuery(function(){
        var carrotId = jQuery('#signupcarrot-id').val();
        ddexitpop.init({
            contentsource: ['id', 'signupcarrot'],
            fxclass: 'random',
            displayfreq: displayFrequency,
            hideaftershow: true,
            persistcookie: cookieId,
            onddexitpop: function($popup){
                data = {'carrot-id': carrotId};
                headers = {
                    'Api-Token': 'alex',
                }
                window.jQuery.ajax({
                    type: 'POST',
                    headers: headers,
                    url: impressionUrl,
                    data: data,
                    success: function(msg) {
                        console.log('YAY', msg);
                    },
                    error: function(msg) {
                        console.error('BOO', msg);
                    }
                });
            }
        })
    });
}