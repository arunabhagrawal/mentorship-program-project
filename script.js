
let form = document.getElementsByClassName('form')[0]; 

form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch(form.action, {
        method: "POST",
        body: new FormData(document.getElementsByClassName("form")[0]),
    }).then(
        response => response.json()
    ).then((html) => {
        // you can put any JS code here
        alert('success')
    });
})