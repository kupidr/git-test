document.getElementById("submit").addEventListener("click", function () {
  // select all input value here
  let fName = document.getElementById("fName").value;
  let lName = document.getElementById("lName").value;
  let age = document.getElementById("age").value;
  let address = document.getElementById("address").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let pass = document.getElementById("pass").value;

  document.querySelector(".fName").innerHTML = fName;
  document.querySelector(".lName").innerHTML = lName;
  document.querySelector(".age").innerHTML = age;
  document.querySelector(".address").innerHTML = address;
  document.querySelector(".email").innerHTML = email;
  document.querySelector(".phone").innerHTML = phone;
  document.querySelector(".pass").innerHTML = "Password ****";
});
