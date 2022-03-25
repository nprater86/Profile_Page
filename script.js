var connRequests = 2;
var yourConn = 500;
var firstNames = ["James","Robert","John","Michael","William","David","Richard","Joseph","Thomas","Charles","Mary","Patricia","Jennifer","Linda","Elizabeth","Barbara","Susan","Jessica","Sarah","Karen"];
var lastNames = ["Smith","Johnson","Williams","Brown","Jones","Garcia","Miller","Davis","Rodriguez","Martinez","Hernandez","Lopez","Gonzalez","Wilson","Prater","Anderson","Thomas","Taylor","Moore","Jackson"];


function removeConnection(element){
    element.remove();
    connRequests--;
    document.querySelector('.connRequests').innerText = connRequests;
    if(connRequests === 0) {
        document.querySelector('.connectionRequests').remove();
    }
}

function addConnection(element){
    element.remove();
    yourConn++;
    connRequests--;
    document.querySelector('.urConn').innerText = yourConn;
    document.querySelector('.connRequests').innerText = connRequests;
    if(connRequests === 0) {
        document.querySelector('.connectionRequests').remove();
    }
}

function changeName(element) {
    var newName = firstNames[Math.floor(Math.random()*firstNames.length)] + " " + lastNames[Math.floor(Math.random()*lastNames.length)];
    element.innerText = newName;
}