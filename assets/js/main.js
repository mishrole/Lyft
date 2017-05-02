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
			hidden[i].style.display = "block";
		}

	})

	
}
