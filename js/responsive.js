let header = document.getElementById('header');
let mobileMenu = document.querySelector('.mobile-menu');
let currentHeight = header.clientHeight;

// Close button
mobileMenu.onclick = function() {
    var isClosed = header.clientHeight === currentHeight;
    if(isClosed) {
        header.style.height = 'auto';
    } else {
        header.style.height = null;
    }
}

// Show children
let menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for(let i = 0; i < menuItems.length; i++) {
   let menuItem = menuItems[i];
   
   menuItem.onclick = function(event) {
    let isParent = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
    if(isParent) {
        event.preventDefault();
    } else {
        header.style.height = null;
    }
   }
}

