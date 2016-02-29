$(document).ready(function() {
	console.log("hello");

	// $('div').text("I am Red Box");

	$('div').html("<h1>I'm Bigger Red</h1>");

	var text = "new text string";
	$("div").append(text);

	$("div").toggleClass("highlight");

});





// window.onload = function (){

// document.getElementById("calculate").onclick = calculatePledge;

// 	var num1 = document.getElementbyId("value1").value;
// 	var num1 = document.getElementbyId("value2").value;
// 	var result = num1 * num2;

// 	if (result > 1000){
// 		text = "Hey, Money money Money";
// 	} else if (result > 100){
// 		text = "Eyyy Lmao";
// 	}else {
// 		text = "Thank,";
// 	}

// 	document.getElementById("calculation").innerHTML = "$" + result + "(" + text + ")";

	// var jappy = " :D";
	// var sour= " >:(";
	// var sad = " :(";
	// var mood = document.getElementById("mood");

	// document.getElementById("jappy").onmouseover = function(){ 
	// 	mood.innerHTML = jappy;
	// 	mood.style.color = "orange"
	// };

	// document.getElementById("sour").onmouseover = function(){ 
	// 	mood.innerHTML = sour;
	// 	mood.style.color = "green"
	// };

	// document.getElementById("sad").onmouseover = function(){ 
	// 	mood.innerHTML = sad;
	// 	mood.style.color = "blue"
	// };


}