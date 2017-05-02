/*

var final = 0;

window.addEventListener("scroll", function(){
	var actual = window.pageYOffset || document.documentElement.scrollTop;

	if(actual > final){
		alert("primero");
	}else{
		alert("Segundo")
		if(actual <= 3){
		alert("tercero")
		}
	}

	final = actual;
}, false);

*/

window.onload = function(){

	var element = document.querySelector(".form");
		element.addEventListener("submit", function(event){
			event.preventDefault();
		});

	var telefono = document.getElementById("phone");

	telefono.addEventListener("click", function(){
		var hidden = document.getElementsByClassName("hidden");

		for(var i = 0; i < hidden.length; i++){
			hidden[i].style.display = "inline-block";
		}

	});

	var nombre = document.getElementById("name");
	var email = document.getElementById("email");
	var ciudad = document.getElementById("city");

	var letras = function(e){
		var codigo = e.keyCode;
		if((codigo>=97 && codigo<=122) || (codigo>=65 && codigo<=90) || codigo==39 || codigo==32){
			this.nextElementSibling.innerText = "";
			this.nextElementSibling.style.display = "none"
			return true;
		}else{
			this.nextElementSibling.innerText = "X";
			this.nextElementSibling.style.display = "inline-block"
			return false;
		}
	}

	nombre.onkeypress = letras;
	ciudad.onkeypress = letras;

	var numeros = function(e){
		var codigo = e.keyCode;
		var length = this.value.length;

		if(length == 1){
			this.nextElementSibling.focus();
		}

		if(codigo >= 48 && codigo <= 57 && length <= 8){
			this.nextElementSibling.innerText = ""
			this.nextElementSibling.style.display = "none"
			return true;
		}else{
			this.nextElementSibling.innerText = "X"
			this.nextElementSibling.style.display = "inline-block"
			return false;
		}
	}

	telefono.onkeypress = numeros;

}
