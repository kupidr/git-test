let check = document.querySelector("input[type=button]")
check.addEventListener("click", function(){
	let form = document.querySelector("form")
	let num = document.getElementById("num").value
		num = parseFloat(num)
	let GPA = document.getElementById("gpa")
	
	//start logic here
	if(num <= 100 && num > 0){
		if(num > 79){
			GPA.innerHTML = "A+"
			bgEmpty()
		}else if(num > 69){
			GPA.innerHTML = "A"
			bgEmpty()
		}else if(num > 59){
			GPA.innerHTML = "A-"
			bgEmpty()
		}else if(num > 49){
			GPA.innerHTML = "B"
			bgEmpty()
		}else if(num > 39){
			GPA.innerHTML = "C"
			bgEmpty()
		}else if(num > 32){
			GPA.innerHTML = "D"
			form.style.backgroundColor = 'green'
		}else if(num > 0){
			GPA.innerHTML = "Fail"
			form.style.backgroundColor = 'red'
		}else{
			GPA.innerHTML = ""
			alert("Number is Invalid.")
		}
	}else{
		GPA.innerHTML = ""
		alert("Number is Invalid.")
	}
	function bgEmpty(){
		form.style.backgroundColor = ''
	}
})