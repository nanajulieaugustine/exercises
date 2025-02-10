const name = "Peter Heronimous Lind";

// const nameParts = name.split(" ");

const firstName = name.substring(0, name.indexOf(" "));
const middleName = name.substring(name.indexOf(" ") + 1, name.lastIndexOf(" "));
const lastName = name.substring(name.lastIndexOf(" ") + 1);

console.log(
  `First name is ${firstName}, Middle name is ${middleName}, Last name is ${lastName}`
);
