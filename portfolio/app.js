var navLinks = document.getElementById('navLinks')
function showMenu(){
    navLinks.style.right='0';
}
function hideMenu(){
    navLinks.style.right='-200px';
}
// Get the modal
var modal = document.getElementById("formModal");

// Get the button that opens the modal
var btn = document.getElementById("send_email_btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the div, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


