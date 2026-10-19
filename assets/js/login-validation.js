
const loginBTN = document.getElementById('loginBTN');
const adminPage = document.getElementById('adminPage');

adminPage.onclick=isLoggedin

function isLoggedin(){

  if(localStorage.getItem("loggedIn"))
    {
      adminPage.href='create-listing.html'
    }
  else 
    adminPage.href='login.html';
}

localStorage.getItem("loggedIn")?loginBTN.innerText="تسجيل خروج":loginBTN.innerText="تسجيل دخول";

loginBTN.onclick = checkLoginStatus;

function checkLoginStatus() { 

  if(loginBTN.innerText==="تسجيل خروج"){

    localStorage.removeItem("loggedIn")

loginBTN.innerText="تسجيل دخول"

  }else{

  window.location.href = "login.html";

  }
}