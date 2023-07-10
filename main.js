const navBurgers = document.querySelectorAll('.navbar-burger')
const navBurger = document.querySelector('.navbar-burger')
const navLists = document.querySelectorAll('.navbar-list')
const navList = document.querySelector('.navbar-list')

navBurgers.forEach(() => {
    navBurger.addEventListener('click', function() {
        if(navList.style.display == 'none') {
            navList.style.animationName = 'navList'
            navList.style.display = 'flex'
        } else {
            navList.style.display = 'none'
            navList.style.animationName = 'navList2'
        }
        
    })
})