const menuBtn = document.querySelector(".menu-btn")
const menuItems = document.querySelector(".menu-items")
const menuItem = document.querySelectorAll('.menu-item')

menuBtn.addEventListener('click', () => {
    toggle()
})

// toggle on item click if open
menuItem.forEach(item => {
    item.addEventListener("click", () => {
        if (menuBtn.classList.contains("open")) {
            toggle()
        }
    })
})

function toggle() {
    menuBtn.classList.toggle("open")
    menuItems.classList.toggle("open")
}

function delete_project_confirmation(event) {
    const choice = window.confirm("Are you sure you want to delete this project?")
    if (choice == false) {
        event.preventDefault();
        return false
    }
}