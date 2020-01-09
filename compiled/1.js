var fileContent = '\
<link rel="stylesheet" href="http://modalgenerator.local/ddexitpop/signupcarrot.css">\
<link rel="stylesheet" href="http://modalgenerator.local/ddexitpop/bootstrap.css">\
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
@media screen and (max-width: 767px){\
    .signupcarrot .scalable{\
        font-size: 1rem;\
    }\
}\
@media screen and (max-width: 991px){\
    .signupcarrot h1.scalable{\
        font-size: 1.5rem;\
    }\
    .signupcarrot h2.scalable{\
        font-size: 1.25rem;\
    }\
}\
</style>\
<div class="container p-2">\
    <div class="row text-center">\
        <div class="col-6 offset-3 col-sm-4 offset-sm-4 col-md-4 offset-md-0 vertically-center">\
            <img id="signupcarrot-product-image" class="w-100" src="http://modalgenerator.local/keyring-teal.png">                    \
            <img class="w-100" src="https://signupcarrot.com/popups/images/pricecut.png">  \
        </div>\
        <div class="col-12 col-md-8 vertically-center">\
            <div>\
                <div class="col-sm-12">\
                    <h1 class="scalable text-center overflow-break-word">GET A FREE PERSONALISED KEYRING</h1>\
                    <h2 class="scalable text-center overflow-break-word">When you sign up to our mailing list</h2>\
                </div>\
                <div class="col-sm-12">\
                    <form id="signupcarrot-form" class="h-100" action="">\
                        <div class="form-group">\
                            <input required class="form-control" type="text" name="engraving" id="signupcarrot-engraving" placeholder="Keyring Name">\
                        </div>\
                        <div class="form-group">\
                            <select required name="product" id="signupcarrot-product-select" class="form-control">\
                                <option selected data-image="http://modalgenerator.local/keyring-teal.png" value="1">Teal</option>\
                                <option data-image="http://modalgenerator.local/keyring-orange.png" value="2">Orange</option>\
                            </select>\
                        </div>\
                        <div class="form-group">\
                            <input required class="form-control" type="email" name="email" id="signupcarrot-email" placeholder="Email">\
                        </div>\
                        <div class="form-group">\
                            <input required class="form-control" type="text" name="2" id="signupcarrot-2" placeholder="Merge field">\
                        </div>\
                        <div class="form-group">\
                            <input required class="form-control" type="text" name="3" id="signupcarrot-3" placeholder="Merge field">\
                        </div>\
                        \
                    </form>\
                </div>\
            </div>\
        </div>\
    </div>\
    <div class="row text-center">\
        <div class="col-sm-12">\
            <div class="col-sm-12">\
                <div class="form-group">\
                    <input style="background-color:teal" class="w-100 btn btn-primary" type="submit" form="subscribe-form" value="CLAIM NOW">\
                </div>\
            </div>\
        </div>\
    </div>\
</div>\
';

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
        ddTag.src = 'http://modalgenerator.local/ddexitpop/ddexitpop.js';
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
        ddexitpop.init({
            contentsource: ['id', 'signupcarrot'],
            fxclass: 'random',
            displayfreq: 'always',
            hideaftershow: true,
            onddexitpop: function($popup){
                console.log("opened");
            }
        })
    });
    jQuery(document).on(
		{
			change: () => {
				var newImageSrc = window.jQuery("#signupcarrot-product-select").find("option:selected").attr("data-image");
				window.jQuery("#signupcarrot-product-image").attr("src", newImageSrc);
			}
		},
		"#signupcarrot-product-select"
	);
}