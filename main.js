// let d = prompt("What is the diameter of the circle?");

// let r = parseInt(d) / 2;

// // console.log(r)

// let area = Math.PI * r * r;

// console.log(`The area of the circle is ${area.toFixed(2)}`);

/********* Admins and empolyees **********/

// let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
// let myEmployees = [
//   "Amgad",
//   "Samah",
//   "Ameer",
//   "Omar",
//   "Othman",
//   "Amany",
//   "Samia",
//   "Anwar",
// ];

// document.write(`<div>We Have X Admins</div>`);

// for (let i = 0; i < myAdmins.length; i++) {
//   if (myAdmins[i] === "Stop") {
//     document.write(`<div>We Have ${i} Admins</div>`);
//     break;
//   }

//   document.write(`<div>The Admin for team ${i + 1} is ${myAdmins[i]}</div>`);

//   document.write(`<h3>Employees:</h3>`);

//   for (let j = 0; j < myEmployees.length; j++) {
//     // console.log(myEmployees[j]);
//     console.log(myAdmins[i]);
//     if (myEmployees[j][0] == myAdmins[i][0]) {
//       myEmployees[j];
//       document.write(`<p>- ${myEmployees[j]}</p>`);
//     }
//   }
//   document.write(`<hr>`);
// }

/******* Statement *******/
// function magic(s) {
//   let vowels = "aeiou";
//   for (let i = 0; i < s.length; i++) {
//     if (vowels.includes(s[i])) {
//       s = s.replace(s[i], s[i].toUpperCase());
//     }
//   }
//   s = s.split("").reverse().join("");

//   let lastChar = s[s.length - 1];
// if (
//   lastChar === "a" ||
//   lastChar === "e" ||
//   lastChar === "i" ||
//   lastChar === "o" ||
//   lastChar === "u"
// ) {
//   s = s.slice(0, -1);
// }

//   for (let i = 0; i < vowels.length; i++) {
//     if (lastChar !== vowels[i]) {
//       s = s.slice(0, -1);
//       break;
//     }
//   }
//   //   console.log(lastChar);

//   s = s.split("").join("-");

//   return s;
// }

// console.log(magic("hellothere"));

const students = [
  {
    name: "Ali",
    class: "3rd",
    grades: {
      math: 20,
      physics: 25,
      programming: 19,
      english: 22,
    },
  },
  {
    name: "3bkreem",
    class: "3rd",
    grades: {
      math: 25,
      physics: 25,
      programming: 25,
      english: 25,
    },
  },

  {
    name: "Samer",
    class: "3rd",
    grades: {
      math: 10,
      physics: 15,
      programming: 12,
      english: 19,
    },
  },

  {
    name: "Ahmed",
    class: "3rd",
    grades: {
      math: 20,
      physics: 20,
      programming: 20,
      english: 20,
    },
  },

  {
    name: "Elgoker",
    class: "3rd",
    grades: {
      math: 23,
      physics: 25,
      programming: 19,
      english: 22,
    },
  },
];

const getLeaderBoard = (students) => {
  let getLeaderBoard = students;
  return getLeaderBoard
    .map((student) => {
      const totalGrades = Object.values(student.grades).reduce(
        (acc, grade) => acc + grade,
        0
      );
      return { ...student, totalGrades };
    })
    .filter((student) => student.totalGrades >= 85)
    .sort((a, b) => b.totalGrades - a.totalGrades);
};

console.log(getLeaderBoard(students));
