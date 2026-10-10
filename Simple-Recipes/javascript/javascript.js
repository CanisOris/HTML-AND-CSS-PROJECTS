
// RECIPE MODAL SECTION
// **snip(10)
// **todo look closer 
// modal btn 

var btns = document.querySelectorAll("input.modal-button");

for (var i = 0; i < btns.length; i++) {

    btns[i].onclick = function (event) {
        const modal = document.querySelector(event.target.getAttribute("href"));
        modal.style.display = "block";
    };
}
