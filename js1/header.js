const header = document.querySelector("header");

// **snip() insert into dom 
// The menu is coded in place it could be moved to seperate File.
// passing a param this could be a generic loader
if (header) {
    header.insertAdjacentHTML("afterbegin", `
        <nav class="site-nav" aria-label="Main navigation">
            <a href="/HTML-AND-CSS-PROJECTS/">Home</a>
           
        </nav>
    `);
}