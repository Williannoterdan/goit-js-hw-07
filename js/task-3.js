document.addEventListener('input', (event) => {
    if (event.target.value.trim().length > 0) {
        document.querySelector('span#name-output').textContent =
            event.target.value.trim()
    } else {
        document.querySelector('span#name-output').textContent = 'Anonymous'
    }
})
