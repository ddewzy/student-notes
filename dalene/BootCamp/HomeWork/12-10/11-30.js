//Write a code snippet to output the elements of an array of string in random order
//example:
//const teams = ["Sounders", "LAFC", "Toronto FC", "LA Galaxy", "FC Dallas"];
// console might read:
// LAFC// FC Dallas// Sounders// LA Galaxy// Toronto FC

//hint: you need to choose a random team using Math.random
// remove that team from the array (array.prototype.splice)
// console log that team
// try to think about appropriate initialization, condition and step for your for loop.

const teams = [
  "Seahawks",
  "Greenbay",
  "Raiders",
  "49rs",
  "Cowboys",
  "Steelers",
];
//mine
// for (let i = 0; i < teams.length; i++) {
//   let currentTeams = teams[Math.floor(Math.random() * teams.length)];
//   console.log(currentTeams);
// }

// function random(max) {
//   return Math.floor(Math.random() * (max + 1));
// }
// for (let i = 0; i < 6; i++) {
//   const index = random(teams.length - 1);
//   const team = teams.splice(index, 1);
//   console.log(team);
// }

//shuffle //iterate through an array
//for each item, randomly choose a position in the remaining array
//swap that item with that position
// function shuffle(arr) {
//   for (let i = arr.length - 1; i > 0; i--) {
//     //action
//     const toSwap = Math.floor(Math.random() * (i + 1));
//     const temp = arr[i];
//     arr[i] = arr[toSwap];
//     arr[toSwap] = temp;
//   }
// }
// shuffle(teams);
// for (let i = 0; i < teams.length; i++) {
//   console.log(teams[i]);
// }

function random(max) {
  return Math.floor(Math.random() * (max + 1));
}
for (
  let i = random(teams.length - 1);
  teams.length > 0;
  i = random(teams.length - 1)
) {
  const result = teams.splice(i, 1);
  console.log(result[0]);
}
