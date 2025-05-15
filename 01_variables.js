const accountId = 144553;
let accountEmail = "psonu786786@gmail.com"
var accountPassword = "12345"

/* Prefer not to use var, because of issue in block and functional scope
*/

accountCity = "Jaipur"
let accountState;

// accountId = 2

accountEmail = "sonu@gmail.com"
accountPassword = "67890"
accountCity = "Delhi"
console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

