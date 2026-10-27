// Scotty Energize Popovers


const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')

popoverTriggerList.forEach(function (element) {
    var imgSrc = element.getAttribute('data-bs-img');
    var content = "<img class='star-rating' src='" + imgSrc + "'>";
    new bootstrap.Popover(element, {
        content: content,
        html: true,
        trigger: 'hover'
    });
});


// init toast

var toastElList = [].slice.call(document.querySelectorAll('.toast'));
var toastList = toastElList.map(function (toastEl) {
    // possible to pass options
    // return new bootstrap.Toast(toastEl, option)
    return new bootstrap.Toast(toastEl)
});

function buyTickets() {
    const movieSelect = document.getElementById('movieSelect');
    const timeSelect = document.getElementById('timeSelect');
    const quantityInput = document.getElementById('quantity');
    const toastBody = document.getElementById('toastBody');
    const quantity = Number(quantityInput.value);

    if (movieSelect.selectedIndex === 0 || timeSelect.selectedIndex === 0) {
        toastBody.textContent = 'Please select a movie and a show time.';
    } else if (!Number.isInteger(quantity) || quantity < 1) {
        toastBody.textContent = 'Please enter a whole number of tickets of at least 1.';
    } else {
        const movie = movieSelect.options[movieSelect.selectedIndex].text;
        const time = timeSelect.options[timeSelect.selectedIndex].text;
        // \n works when css white-space: pre-line;
        toastBody.textContent = `Selected movie:${movie}\nTime: ${time}\nTickets: ${quantity}`;
    
    }

    bootstrap.Toast.getOrCreateInstance(document.getElementById('toastDisplay')).show();
}

// Bootstrap 5 tooltips must be initialized explicitly.
document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(function (element) {
    new bootstrap.Tooltip(element);
});


//Shrinks header size when the document is scrolled down by 80 pixels
$(document).on("scroll", function () {
    //When the webpage is scrolled down from the top by 50px this
    //if statement will trigger
    if ($(document).scrollTop() > 50) {
        //Once the 50px requirment has been met add the
        //nav-shrink class selctor to the same HTML element
        //that has the nav class
        $("nav").addClass("nav-shrink");
        //Adjust the position of the mobile drop menu
        //to accommodate the new hieght decrease
        $("div.navbar-collapse").css("margin-top", "-6px");
    } else {
        //if the webpage has not been scrolled down or
        //is back at the top the nav-shrink class selector
        //is removed from the HTML element with the nav
        //class selector
        $("nav").removeClass("nav-shrink");
        //The margin for the drop down menu is now
        //returned to it's orginal amount
        $("div.navbar-collapse").css("margin-top", "14px");
    }
});


// Close mobile menu when a navigation link is clicked
$(document).ready(function () {
    //On click when and element contains just the nav-link class and not the dropdown-toggle and then
    //also close when an element with the class .dropdown-item (each movie link) has been clicked
    $(".navbar-nav").on('click', '.nav-link:not(".dropdown-toggle"), .dropdown-item', function() {
        // Collapse the navbar when a link or dropdown item is clicked
        $(".navbar-collapse").collapse('hide');
    });
});