function operate(a, z, b){
	switch(z){
		case "+":
			return (a + b);
			break;
		case "-":
			return (a - b);
			break;
		case "/":
			if(b != 0){
				return Math.round((a / b) * 100000000) / 100000000;
			}else{
				return "Can't divide by zero!";
			}
			break;			
		case "*":
			return Math.round((a * b) * 100000000) / 100000000;
			break;
		case "^":
			return Math.pow(a, b);
			break;
	}
}
function squareRoot(number){
	return Math.round((Math.sqrt(number)) * 100000000) / 100000000;
}

document.getElementById("clear").addEventListener("click", cleanSlate);
document.getElementById("1").addEventListener("click", function(){
	putNumber(`${document.getElementById("1").innerHTML}`);
});
document.getElementById("2").addEventListener("click", function(){
	putNumber(`${document.getElementById("2").innerHTML}`);
});
document.getElementById("3").addEventListener("click", function(){
	putNumber(`${document.getElementById("3").innerHTML}`);
});
document.getElementById("4").addEventListener("click", function(){
	putNumber(`${document.getElementById("4").innerHTML}`);
});
document.getElementById("5").addEventListener("click", function(){
	putNumber(`${document.getElementById("5").innerHTML}`);
});
document.getElementById("6").addEventListener("click", function(){
	putNumber(`${document.getElementById("6").innerHTML}`);
});
document.getElementById("7").addEventListener("click", function(){
	putNumber(`${document.getElementById("7").innerHTML}`);
});
document.getElementById("8").addEventListener("click", function(){
	putNumber(`${document.getElementById("8").innerHTML}`);
});
document.getElementById("9").addEventListener("click", function(){
	putNumber(`${document.getElementById("9").innerHTML}`);
});
document.getElementById("0").addEventListener("click", function(){
	putNumber(`${document.getElementById("0").innerHTML}`);
});
document.getElementById("plus").addEventListener("click", function(){
	putNumber(`${document.getElementById("plus").innerHTML}`);
});
document.getElementById("minus").addEventListener("click", function(){
	putNumber(`${document.getElementById("minus").innerHTML}`);
});
document.getElementById("multiply").addEventListener("click", function(){
	putNumber(`${document.getElementById("multiply").innerHTML}`);
});
document.getElementById("divide").addEventListener("click", function(){
	putNumber(`${document.getElementById("divide").innerHTML}`);
});
document.getElementById("point").addEventListener("click", function(){
	putNumber(`${document.getElementById("point").innerHTML}`);
});
