function setUpCheckboxListeners() {
    const checkboxes = document.getElementsByTagName('input')

    console.log(Array.from(checkboxes))

    Array.from(checkboxes).forEach(c => c.addEventListener('change', (event) => {
        const name = event.target.getAttribute("name")
        const els = document.getElementsByClassName(name)
        Array.from(els).forEach(el => { el.style.display = event.target.checked ? "block" : "none" })
        
    }))
}

