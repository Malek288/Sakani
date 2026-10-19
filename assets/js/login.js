
const Email = document.getElementById('email');
const password = document.getElementById('pass');
const button = document.getElementById('submit');

const Gmail = 'a3m@gmail.com';
const pass = 'KQ9!$Z@7x2MP#L';
console.log(button);

button.addEventListener('click', function (e) {
    if (Email.value === Gmail && password.value === pass) {
        window.location.href = "create-listing.html";
        alert('Login Successful');
        localStorage.setItem('loggedIn', 'true');
    }

    else {
        alert('Login Failed');
    }

})

