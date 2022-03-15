// Arrow Functions

const calcAge = (birthYear) => 2037 - birthYear;

console.log(calcAge(1991));

const yearsUnitRetirement = (birthYear) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return retirement;
};

console.log(yearsUnitRetirement(1991));
