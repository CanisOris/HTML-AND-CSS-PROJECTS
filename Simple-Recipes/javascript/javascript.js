
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

var closeBtn = document.querySelectorAll(".close-btn");
var modals = document.querySelectorAll(".recipe-modal");


for (var i = 0; i < closeBtn.length; i++) {
    closeBtn[i].onclick = function () {
        for (var index in modals){
            if (modals[index].style){
                modals[index].style.display = "none";
            }
        }
    }
}
