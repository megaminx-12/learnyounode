var termInput = process.argv;
total = 0;

for (i = 2; i < termInput.length; i++) {
	total += +termInput[i];
}

console.log(total);

/* Official solution:
 *
 * var result = 0;
 * for (var i = 2; i < process.argv.length; i++) {
 *	result += Number(process.argv[i]);
 * }
 *
 * console.lot(result);
 */
