document.addEventListener('DOMContentLoaded', (event) => {
    var items = document.querySelectorAll('.grid-item')
    var modals = document.querySelectorAll('.modal')
    var closeBtn = document.getElementsByClassName('.close')

    items.forEach((item, index) => {
        item.addEventListener('click', () => {
            document.getElementById(`modal${index + 1}`).style.display = 'block';
        })
    })
})

closeBtn.forEach((button, index) => {
    button.addEventListener('click', () => {
        document.getElementById(`modal${index + 1}`).style.display = 'none';
    })
})

window.addEventListener('click', (event) => {
    modals.forEach(modal => {
        if (event.target == modal) {
            modal.style.display = "none"
        }
    })
})
