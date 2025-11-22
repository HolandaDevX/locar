const linksDoMenu = document.querySelectorAll('.item')
const menuCheckbox = document.getElementById('#menu-btn')

linksDoMenu.forEach(link => {
    link.addEventListener('click', () =>{
        menuCheckbox.checked = false
    })
})