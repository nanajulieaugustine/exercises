const people = ["Harry", "Ron", "hermione", "Neville"];
function testParms(a, b, c, d) {
  console.log(`a: ${a}, b: ${b}, c: ${c}, d: ${d}`);
}

people.forEach(testParms);
