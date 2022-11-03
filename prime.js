function checkprime(num) {

let factor=0;
	for (let i=1; i<=num; i++) {
	if(num % i == 0) {
		factor++;
	}
}
	if (factor == 2) {
	console.log(num, "is a prime number");
	} else {
	console.log(num, "is not a prime number.");
	}

checkprime(39);