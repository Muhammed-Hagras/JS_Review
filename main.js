// let d = prompt("What is the diameter of the circle?");

// let r = parseInt(d) / 2;

// // console.log(r)

// let area = Math.PI * r * r;

// console.log(`The area of the circle is ${area.toFixed(2)}`);

/********* Admins and empolyees **********/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = [
  "Amgad",
  "Samah",
  "Ameer",
  "Omar",
  "Othman",
  "Amany",
  "Samia",
  "Anwar",
];

document.write(`<div>We Have X Admins</div>`);

for (let i = 0; i < myAdmins.length; i++) {
  if (myAdmins[i] === "Stop") {
    document.write(`<div>We Have ${i} Admins</div>`);
    break;
  }

  document.write(`<div>The Admin for team ${i + 1} is ${myAdmins[i]}</div>`);

  document.write(`<h3>Employees:</h3>`);

  for (let j = 0; j < myEmployees.length; j++) {
    // console.log(myEmployees[j]);
    console.log(myAdmins[i]);
    if (myEmployees[j][0] == myAdmins[i][0]) {
      myEmployees[j];
      document.write(`<p>- ${myEmployees[j]}</p>`);
    }
  }
  document.write(`<hr>`);
}
