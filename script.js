// Get all menu links
const menuItems = document.getElementsByClassName("menuLink");

// Add event listeners to all menu links
for(let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener("click", clickMenuItem);
}

// Update apperance of menu links when clicked
function clickMenuItem() {
    for(let i = 0; i < menuItems.length; i++) {
        menuItems[i].classList.remove("selectedMenuItem");
        menuItems[i].classList.add("unselectedMenuItem");
    }

    this.classList.remove("unselectedMenuItem");
    this.classList.add("selectedMenuItem");
}

