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
document.getElementById("squareRoot").addEventListener("click", function(){
	putNumber(" √ ");
});

document.getElementById("power").addEventListener("click", function(){
	putNumber(" ^ ");
});
document.getElementById("delete"). addEventListener("click", deleteLast);


document.getElementById("equals").addEventListener("click", calculeaza);

function cleanSlate(){
	document.getElementById("inputScreen").innerHTML = "";
	document.getElementById("expressionScreen").innerHTML = "";
}
function putNumber(numar){
		
	var operator = [" + ", " / ", " * ", " - ", " ^ "];	
	let x = document.getElementById("inputScreen").innerHTML;
	if (x =="Can't divide by zero!"){
		x = "";
	}
	
	let lungime = x.length;
	
	if(x == "0" && numar == "0"){
		return false;	
	}
	
	if(x == "" && numar == " √ "){
		return document.getElementById("inputScreen").innerHTML = x + numar;	
	}
	
	let wer = x.slice(Number(lungime) - 3, lungime);
	if(numar == " √ " && operator.includes(wer)){
		return document.getElementById("inputScreen").innerHTML = x + numar;
	}
	
	if(numar == " √ " && !operator.includes(wer)){
		return false;
    }
    //if screen empty do not write an operator && replace operator if one is last entry
	if((x == "" || wer == " √ ")&& operator.includes(numar)){
		return false;
	}else{
		if(operator.includes(wer) && operator.includes(numar)){
			return document.getElementById("inputScreen").innerHTML = x.slice(0,Number(lungime) - 3) + numar;
		}else{
			let pos = x.lastIndexOf(".");
			if((pos == -1) && numar == "."){
				return document.getElementById("inputScreen").innerHTML = x + numar;		
			}else{
				let xxx = (x.slice(pos,lungime)).search(/ [-+/*] /);
				if (xxx > -1 || numar != "."){
					return document.getElementById("inputScreen").innerHTML = x + numar;
				}else{
					return false;
				}
			}
		}
	}
	return document.getElementById("inputScreen").innerHTML = x + numar;
}

function calculeaza(){
	
	let ceva = document.getElementById("inputScreen").innerHTML;
	document.getElementById("expressionScreen").innerHTML = ceva;
	let operator = ["√", "^", "*", "/", "-", "+"];
	let total;
	let primul;
	let aldoilea;
	let marime1;
	let marime2;
	let locatiePrimul;
	let locatieDoi;
	let lungime;
	let semn;
	let x2;
	let match2;
	let lastIndex2;
	let lastIndex;
	let x;
	let match;
	
	//daca ultimul caracter este un operator - altfel da eroare
	let sizeInput = ceva.length;
	let wer = ceva.slice(sizeInput - 2, sizeInput - 1);
	
	if(operator.includes(wer)){
		return false;
	}
	
	for(let i = 0; i < operator.length; i++){	
		while(ceva.indexOf(operator[i]) > -1){
			let operatorSign = ceva.indexOf(operator[i]);
			
			if(ceva.includes("Can't divide by zero!")){
				ceva = "Can't divide by zero!";
				break;
			}
			
			//for minus sign
			if (operatorSign == 0){
				operatorSign = ceva.slice(1).indexOf(operator[i]);
				operatorSign = operatorSign + 1;
			}
			
			x = ceva.slice(0, operatorSign);
				
			match = x.match(/ [-+/*] /g);
			
			if(ceva.slice(0,1) == "-" && ceva.slice(1).match(/ [-+/*] /g) === null){
				break;
			}
			
			if(match === null){
				lastIndex = 0;
			}else{
				lastIndex  = x.lastIndexOf(match[match.length-1]);
			}
			
			if (lastIndex == 0){
				primul = ceva.slice(0, (operatorSign -1));
				marime1 = ceva.slice(0, (operatorSign -1)).length;
				locatiePrimul = 0;
			}
			else{
				primul = ceva.slice((lastIndex + 3), (operatorSign -1));
				marime1 = ceva.slice(lastIndex + 3, (operatorSign -1)).length;
				locatiePrimul = lastIndex + 3;
			}
			
			semn = ceva.charAt(Number(operatorSign));
			if(semn == "√"){
				marime1 = 0;
			}
			
			x2 = ceva.slice(operatorSign + 2);
			match2 = x2.match(/ [-+/*^] /g);
			
			if(match2 === null){
				marime2 = ceva.slice(operatorSign + 2).length; 
			}else{
				lastIndex2  = x2.indexOf(match2[0]);
				marime2 = ceva.substr(operatorSign + 2, lastIndex2).length; 
			}
			
			aldoilea = ceva.substr(operatorSign + 2, marime2);
			
			lungime = marime1 + (marime2) + 3;
			
			if(operator[i] == "√"){
				ceva = ceva.replace(ceva.substr(operatorSign - 1, lungime), squareRoot(aldoilea));
			}else{
				ceva = ceva.replace(ceva.substr(locatiePrimul, lungime), operate(parseFloat(primul), semn, parseFloat(aldoilea)));
			}
		}
	}
	document.getElementById("inputScreen").innerHTML = ceva;
}

