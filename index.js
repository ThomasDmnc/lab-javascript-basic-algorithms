// Iteration 1: Names and Input
const hacker1 = "Léon";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Pierre";
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
};


// Iteration 3: Loops
let resultHacker1 = "";

for (let i = 0; i < hacker1.length; i++) {
    resultHacker1 += " " + hacker1[i].toUpperCase();
};
console.log(resultHacker1);

let resultHacker2 = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
    resultHacker2 += hacker2[i];
};

console.log(resultHacker2);


if (hacker1 < hacker2){
    console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first, definitely.");
} else {
    console.log("What?! You both have the same name?");
};


// Bonus Time!: 

// Bonus 1:
const longText= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum posuere turpis et vestibulum sollicitudin. Praesent luctus ex sit amet leo rhoncus, et tristique lorem tincidunt. Sed erat mauris, dapibus id tellus eget, dictum faucibus purus. Proin pulvinar lobortis dui eu consectetur. Nunc ut accumsan enim. Phasellus rhoncus orci ut nunc finibus, a cursus quam dictum. Ut ac est felis. Pellentesque eget augue non enim pretium sodales sit amet sit amet libero. Sed luctus euismod aliquet. Pellentesque commodo tempor quam, id dictum sem facilisis sit amet. Vestibulum non vestibulum ex. Mauris sit amet tristique ipsum, non faucibus lorem. Pellentesque at mi pharetra, eleifend libero eu, laoreet ex. Vivamus vulputate porttitor ultrices. Proin auctor aliquam tortor nec dignissim. Nam aliquam facilisis tellus ac sodales. Phasellus at molestie enim. Suspendisse a nisi commodo, posuere nisi eu, ornare neque. Integer nibh felis, fermentum a ultrices sit amet, viverra ac lorem. Quisque eget ultrices arcu. Quisque in scelerisque ipsum. Pellentesque malesuada aliquam erat vel ultricies. Vestibulum euismod, velit eu viverra sodales, dolor leo tempus felis, eu molestie libero arcu quis justo. In nec varius ligula. Sed nec dui vel est interdum lobortis vitae quis dui. Nunc ut scelerisque orci. Etiam accumsan condimentum nunc, sit amet iaculis quam interdum malesuada. Nullam blandit dolor in diam consectetur suscipit. Proin lacus urna, condimentum vitae odio nec, gravida tempor mi. In augue diam, aliquam et ligula a, interdum finibus urna. Proin nec ipsum mollis, lacinia lacus nec, vulputate velit. Sed euismod eleifend rutrum. Sed quis velit finibus, posuere neque blandit, rhoncus tortor. Donec pulvinar pharetra odio, imperdiet tincidunt sapien dapibus vitae. Aliquam vitae metus dignissim, imperdiet elit ut, dictum libero. Mauris sit amet tellus vitae est porta lacinia eget ut mauris. Proin tristique dictum luctus. Nulla dui metus, fermentum sit amet feugiat sit amet, bibendum facilisis urna. Fusce vel magna et nulla sodales faucibus. Praesent fringilla scelerisque lobortis.";

let countWord = longText.trim().split(/\s+/).length;
console.log(countWord);

let countNb = (longText.match(/( et )/g) || []).length
console.log(countNb);


// Bonus 2:
let phraseToCheck = "taco cat";
let phraseWithOutSpace = phraseToCheck.replace(/\s/g, '');

let tempResult = "";

for (let i = phraseWithOutSpace.length - 1; i >= 0; i--) {
    tempResult += phraseWithOutSpace[i];
};

if (tempResult === phraseWithOutSpace ) {
  console.log(`${phraseToCheck} is a Palindrome`)
} else {
  console.log(`${phraseToCheck} isn't a Palindrome`)
}
