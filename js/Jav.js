var nav = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (scrollY >= 56) {
    nav.classList.add('nav-scroll');
  } else if (screenY < 56) {
    nav.classList.remove('nav-scroll');
  }
});


function validate() {
    var regemail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var regPassword=/^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var res=regemail.test(email)
    var res2=regPassword.test(password)
    if (res==true && res2==true) {
        window.open("index.html","_self");
    }
    else {
        alert("You must enter email and pass");
    }
}