function checkprime(num) {

let factor=0;
	for (let i=1; i<=num; i++) {
	if(i % 2 = 0) {
		factor++;
	}
}
	if (factor == 0) {
	console.log(num, "is a prime number");
	} else {
	console.log(num, "is not a prime number.");
	}

checkprime(39);