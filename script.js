var hd=document.getElementById("one")
console.log(hd.textContent="EVENT BOOKING MADE EASY")

function showalert(){
    alert("Event Created")
}

var pop=document.querySelector(".popupbox")
var lay=document.querySelector(".overlay")
function show()
{
    pop.style.display="block"
    lay.style.display="block"
}
function dis() {
    var mail = document.getElementById("mail").value;
    var phone = document.getElementById("phone").value;
    var result = document.getElementById("result");
    
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var phonePattern = /^\d{10}$/;

    if (!emailPattern.test(mail)) {
        result.textContent = "Please enter a valid email address.";
        result.style.color = "red";
    } else if (!phonePattern.test(phone)) {
        result.textContent = "Please enter a valid 10-digit phone number.";
        result.style.color = "red";
    } else {
        result.textContent = "Created Successfully";
        result.style.color = "green";
    }
}
