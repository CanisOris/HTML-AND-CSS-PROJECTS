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