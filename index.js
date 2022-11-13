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
