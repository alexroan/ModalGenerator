const TITLE = 'get a free personalised key ring';
const SUBTITLE = 'when you sign up to our mailing list';
const ROOT_URL = 'http://modalgenerator.local/';
function addToHead(element) {
    document.head.appendChild(element);
}

function addToBody(element) {
    document.body.appendChild(element);
}

function addScript(src, content) {
    var script = document.createElement("script");
    if(src !== null && src !== "" && src !== undefined){
        script.setAttribute('src', src);
    }
    if(content !== null && content !== undefined) {
        script.innerHTML = content;
    }
    addToHead(script);
}

function addLink(rel, href) {
    var link = document.createElement("link");
    link.setAttribute('rel', rel);
    link.setAttribute('href', href);
    addToHead(link);
}

function addDiv(id, divClass, content) {
    var div = document.createElement("div");
    div.setAttribute('id', id);
    div.setAttribute('class', divClass);
    div.innerHTML = content;
    addToBody(div);
}

function constructModal() {
    let content = "<div class='thecarrot-modal-header'>\
            <h1>" + TITLE + "</h1>\
            <h2>" + SUBTITLE + "</h2>\
        </div>\
        <div class='thecarrot-modal-body'>\
            <div class='thecarrot-modal-body-left thecarrot-split-div'>\
                <div class='thecarrot-modal-body-left-content thecarrot-split-content'>\
                    <img id='thecarrot-selected-colour-image' src='" + ROOT_URL + "/images/keyring-black.png' />\
                    <img id='thecarrot-price-cut' src='" + ROOT_URL + "/images/pricecut.png' />\
                    <input type='text' id='keyring-name' placeholder='KEYRING NAME'></input>\
                    <div class='thecarrot-colour-chooser-wrapper'>\
                        <select form='thecarrot-subscribe-form' id='thecarrot-color-chooser' class='image-picker' required>\
                            <option>KEYRING COLOUR</option>\
                            <option value='" + ROOT_URL + "images/keyring-black.png'>BLACK</option>\
                            <option value='" + ROOT_URL + "images/keyring-blue.png'>BLUE</option>\
                            <option value='" + ROOT_URL + "images/keyring-burgundy.png'>BURGUNDY</option>\
                            <option value='" + ROOT_URL + "images/keyring-green.png'>GREEN</option>\
                            <option value='" + ROOT_URL + "images/keyring-orange.png'>ORANGE</option>\
                            <option value='" + ROOT_URL + "images/keyring-pink.png'>PINK</option>\
                            <option value='" + ROOT_URL + "images/keyring-purple.png'>PURPLE</option>\
                            <option value='" + ROOT_URL + "images/keyring-red.png'>RED</option>\
                        </select>\
                    </div>\
                </div>\
            </div>\
            <div class='thecarrot-modal-body-right thecarrot-split-div'>\
                <div class='thecarrot-modal-body-right-content thecarrot-split-content'>\
                    <form action='#' id='thecarrot-subscribe-form'>\
                        <input type='text' id='name' placeholder='FIRST NAME'></input>\
                        <input type='email' id='email' placeholder='EMAIL'></input>\
                        <div class='thecarrot-subscribe-form-text'>\
                            <p>Delivered to your door</p>\
                            <p>in 3-5 days</p>\
                            <input onClick='ddexitpop.hidepopup()' class='calltoaction' type='submit' value='SUBSCRIBE'></input>\
                        </div>\
                    </form>\
                </div>\
            </div>\
        </div>"
    return content;
}

document.addEventListener('DOMContentLoaded', function(event) {
    addLink("stylesheet", "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css");
    let cssLocation = ROOT_URL + "boilerplate/ddexitpop.css"
    addLink("stylesheet", cssLocation);
    addScript("https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js");
    scriptLocation = ROOT_URL + "boilerplate/ddexitpop.js";
    addScript(scriptLocation);
    addDiv("ddexitpop1", "ddexitpop", constructModal());
});