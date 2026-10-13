
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

// close modal
for (var i = 0; i < closeBtn.length; i++) {
    closeBtn[i].onclick = function () {
        for (var index in modals) {
            if (modals[index].style) {
                modals[index].style.display = "none";
            }
        }
    }
}

// EMAIL VALIDATION
document.getElementById('contactForm').addEventListener('submit',
    function (event) {
        // **snip(3) prevent from from running
        // overide
        event.preventDefault();

        const firstname = document.getElementById("firstname").value;
        const lastname = document.getElementById('lastname').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;

        const emailpattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const valMsg = document.getElementById('valMsg');

        if (!firstname || !lastname || !phone || !message) {
            valMsg.innerHTML = '<p style="color:red">Please fill out all the fields</p>';
            // **snip(2) test emailpattern.test(email)
        } else if (!emailpattern.test(email)) {
            valMsg.innerHTML = '<p style="color:red">Please enter a valid email</p>';
        } else {
            valMsg.innerHTML = '<p style="color:blue">Thank you for your input!</p>';
        }

        const formData = {
            firstname: firstname,
            lastname: lastname,
            email: email,
            message: message,
            subscript: document.getElementById('subscription').ariaChecked
        }

        console.log(JSON.stringify(formData));
    })

