// Arrow Functions

const calcAge = (birthYear) => 2037 - birthYear;

console.log(calcAge(1991));

const yearsUnitRetirement = (birthYear) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return retirement;
};

console.log(yearsUnitRetirement(1991));

// ARRAYS
const friends = ['saim', 'arslan', 'mehroz', 'abdullah'];
const years = new Array(12, 'saim');
console.log(years, friends, friends.length);

const data = [friends, years];
console.log(data);

friends.push('awais');
friends.unshift('Abdl sattar');
console.log(friends);

friends.pop();
friends.shift();
console.log(friends);

console.log(friends.indexOf('arslan'));

console.log(friends.includes('usman'));

// OBJECTS
const jonas = {
  firstName: 'Johnas',
  lastName: 'shmedtmann',
  age: 2036 - 1991,
  job: 'teacher',
  friends: ['Micheaal', 'Peter', 'Steven'],
};

console.log(jonas.firstName);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

jonas.location = 'Pakistan';

jonas['fb'] = '/saimhafeez';

console.log(jonas);
