const primaryNavigation = document.getElementById('primary-navigation')
const mobileToggle = document.querySelector('.mobile-toggle')
const menuItems = document.querySelectorAll('.main-nav li')


mobileToggle.addEventListener('click', () => {
    primaryNavigation.classList.toggle('active')
    ariaExpandedCheck()
})

menuItems.forEach(items => {
    items.addEventListener('click', () => {
        primaryNavigation.classList.remove('active')
        ariaExpandedCheck()
    })
})

let ariaExpandedCheck = () => {
    if (primaryNavigation.classList.contains('active')) {
        primaryNavigation.setAttribute('aria-expanded', 'true')
    } else {
        primaryNavigation.setAttribute('aria-expanded', 'false')
    }
}

