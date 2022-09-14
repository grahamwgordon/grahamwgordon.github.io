function copyToClipBoard() {
    var content = document.getElementById("emailLink") ;
    content.select();
    document.execCommand("copy");
}
