function jQueryLoaded() {
    if(typeof ddexitpop=='undefined') {
        var headTag = document.getElementsByTagName("head")[0];
        var ddTag = document.createElement('script');
        ddTag.type = 'text/javascript';
        ddTag.src = 'http://modalgenerator.local/ddexitpop/ddexitpop.js';
        ddTag.onload = ddexitpopLoaded;
        headTag.appendChild(ddTag);
    }
    else{
        ddexitpopLoaded();
    }
}

function ddexitpopLoaded() {
    jQuery(function(){
        ddexitpop.init({
            contentsource: ['ajax', 'http://modalgenerator.local/popups/1.html'],
            fxclass: 'random',
            displayfreq: 'always',
            hideaftershow: true,
            onddexitpop: function($popup){
                console.log("opened");
            }
        })
    });
}

document.addEventListener('DOMContentLoaded', function(event) {
    if(typeof jQuery=='undefined') {
        var headTag = document.getElementsByTagName("head")[0];   
        var jqTag = document.createElement('script');
        jqTag.type = 'text/javascript';
        jqTag.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
        jqTag.onload = jQueryLoaded;
        headTag.appendChild(jqTag);
    } else {
        jQueryLoaded();
    }    
});