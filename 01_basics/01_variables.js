const accountId =12345
let accountEmail="prince"
var accountPassword="8765224981"
accountCity="jamsedpur"
let accountState;

// accountId=2    not allowed
accountEmail="rahul@gmail.com"
var accountPassword="985342768"
accountCity="mango"

// prefer not to use var
// becaude of issue in block scope and functional scope

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])