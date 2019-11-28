// const PRODUCT = 'KEY RING';

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
    let content = "<h1>GET A FREE PERSONALISED " + PRODUCT + "</h1>\
        <h2>WHEN YOU SIGN UP TO OUR EMAIL LIST</h2>\
        <div id='subscribe-form'>\
            <form action='#'>\
                <input type='text' id='name' placeholder='First Name'></input>\
                <input type='email' id='email' placeholder='Email'></input>\
                <input onClick='ddexitpop.hidepopup()' class='calltoaction' type='submit' value='SUBSCRIBE'></input>\
            </form>\
        </div>"
    return content;
}

document.addEventListener('DOMContentLoaded', function(event) {
    let scriptLocation = ROOT_URL + "boilerplate/functions.js";
    addLink("stylesheet", "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css");
    let cssLocation = ROOT_URL + "boilerplate/ddexitpop.css"
    addLink("stylesheet", cssLocation);
    addScript("https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js");
    scriptLocation = ROOT_URL + "boilerplate/ddexitpop.js";
    addScript(scriptLocation);
    addDiv("ddexitpop1", "ddexitpop", constructModal());
});