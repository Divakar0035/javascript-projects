const name = "Divakar"
const repocount = 69

// console.log(name + " " + repocount + " value") // but this syntax is not good or outdated
// *************************** NEW WAY *************************
// console.log(`hello my name is ${name} and my repo count is ${repocount}`);

const gamename = new String('DivakarFC')
// to access the key/index we can use 
/* console.log(gamename[0]);
console.log(gamename.__proto__);
*/
/*console.log(gamename.length);
console.log(gamename.toLowerCase());
console.log(gamename.charAt(4));
*/
// console.log(gamename.indexOf('F'));
const New = gamename.substring(0,6);
// console.log(New);
const NEW2 = gamename.slice(-8,0);
// console.log(NEW2);

const NEWSTRINGONE = "      AKKU BAUA   ";
console.log(NEWSTRINGONE.trim());
