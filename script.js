var connRequests = 2;

function removeConnection(element){
    element.remove();
    connRequests--;
    document.querySelector('.connRequests').innerText = connRequests;
    if(connRequests === 0) {
        document.querySelector('.connectionRequests').remove();
    }
}