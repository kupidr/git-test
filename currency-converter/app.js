document.getElementById("submit").addEventListener("click", function () {
  let amount = document.getElementById("amount").value;
  let currency = document.getElementById("currency").value;
  let print = document.getElementById("print");
  
  if (currency == "" || amount == "") {
    alert("Your Amount is Empty");
  } else {
    amount = parseInt(amount)
    if (currency == "dollerToTaka") {
      let total = amount * 85.97;
      print.value = total;
    }else if(currency == "takaToDoller"){
      let total = amount * 0.012;
      print.value = total;
    }else if(currency == "cadToTaka"){
      let total = amount * 68.06;
      print.value = total;
    }else if(currency == "takaToCad"){
      let total = amount * 0.015;
      print.value = total;
    }else if(currency == "euroToTaka"){
      let total = amount * 97.02;
      print.value = total;
    }else if(currency == "takaToEuro"){
      let total = amount * 0.010;
      print.value = total;
    }else{
      alert("Your Amount is Empty");
    }
  }
});
