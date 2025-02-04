// function congreet(firstName) {
//   console.log(`Hello ${firstName}`);
// }
// setTimeout(congreet, 2000, "Frode");

// function hire(person) {
//   person.hired = true;
// }

// function fire(person) {
//   person.hired = false;
// }

// function fireOrHire(action, person) {
//   action(person);
// }
// const person3 = {
//   firstName: "Harry",
//   lastName: "Potter",
//   hired: false,
// };

// const person4 = {
//   firstName: "Fred",
//   lastName: "Weasly",
//   hired: false,
// };
// console.log("person4", person4);
// fireOrHire(hire, person4);
// console.log("person4", person4);

const postUrl = "https://kea-alt-del.dk/t7/api/products";
loadJSON(postUrl, prepareData);
function loadJSON(url, callback) {
  fetch(url)
    .then((response) => response.json())
    .then((jsonData) => callback(jsonData));
}
function prepareData(data) {
  console.table(data);
  data.forEach((element) => {
    document.querySelector(
      "body"
    ).innerHTML += `<h1>${element.productdisplayname}</h1>`;
  });
}
