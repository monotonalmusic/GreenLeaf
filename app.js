//making observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    });
});

//selecting all hidden elements
const hiddenElements = document.querySelectorAll('.hidden');
//observing hidden elements
hiddenElements.forEach((el) => observer.observe(el));


function sent() {
    let contactName = document.getElementById('name-input').value;
    console.log(contactName)
    alert(`Thank you for getting in touch with us ${contactName}.\nWe will get back to you as soon as possible.`)
}

