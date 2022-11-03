function checkprime(num) {

let fact=0;
	for (let i=1; i<=num; i++) {
	if(num % i == 0) {
		fact++;
	}
}
	if (fact == 2) {
	console.log(num, "is prime number");

	} else {
	console.log(num, "is not prime number.");
	}

checkprime(31);