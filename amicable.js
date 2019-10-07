/*
console.log(isFactor(5, 1))
console.log(isFactor(1, 5))
console.log(isFactor(150, 10))

console.log(showFactors([1,2,3,4,5]));
console.log(showFactors([]));

console.log(addFactors([1,2,3,4,5]))
console.log(addFactors([]))

console.log(getFactors(5));
console.log(getFactors(6));
console.log(getFactors(40));
console.log(getFactors(1));
console.log(getFactors(0));
console.log(getFactors(1220));
*/





function takeInput() {
	num1 = document.getElementById('num1').value;
	num2 = document.getElementById('num2').value;
	amicable(num1,num2);
}

function amicable(num1, num2) {
	var num1_facts, num2_facts, num1_sum, num2_sum;
	num1_facts = new Array();
	num2_facts = new Array();
	num1_facts = getFactors(num1);
	num2_facts = getFactors(num2);
	num1_sum = showFactors(num1_facts);
	num2_sum = showFactors(num2_facts);
	num1_sum = addFactors(num1_facts);
	num2_sum = addFactors(num2_facts);

	if (num1_sum == num2_sum) {
		document.getElementById('results').innerHTML += "Wow! You found 2 amicable numbers!";
	}
	else {
		document.getElementById('results').innerHTML += "Hm, these are not amicable.";

	}



}

function isFactor(num1, num2) {
	if ((num1 % num2) == 0)
		return true;
	return false;
}

function showFactors(array) {
	document.getElementById('results').innerHTML += array + "</br></br>";
}

function addFactors(array) {
	var i, sum = 0;
	for (i = 0; i < array.length; i++) {
		sum += array[i];
	}
	return sum;
}

function getFactors(num) {
	factors = new Array();
	for (i = 1; i <= num; i++) {
		if (isFactor(num, i)){
			factors.push(i);
		}
	}
	return factors;
}