'use-strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHoursOfRes = {
  thu: {
    open: 12,
    close: 11,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // open 24 hours
    close: 24,
  },
  [weekdays[1]]: {
    open: 1,
    close: 12,
  },
  [`day-${1 + 1}`]: {
    open: 9,
    close: 20,
  },
};

const restaurant = {
  name: 'Pizza Hut',
  location: 'LDA-1, lahore, Punjab, Pakistan',
  categories: ['Italian', 'Pizzeria', 'Vegerarian', 'ORganic'],
  openingHoursOfRes,
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic', 'Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // Getting 2 returns from a function
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    std_name = 's',
    father_name = 'm',
    course = 'IT',
    degree_ending = 0,
  }) {
    console.log(
      `Student named ${std_name} whose father's name is ${father_name}, is studying in ${course} and his degree will be completed in ${degree_ending} years`
    );
  },
};

console.log(restaurant);

restaurant.orderDelivery({
  std_name: 'Saim Hafeez',
  degree_ending: 4,
  course: 'BS(SE)',
  father_name: 'Muhammad hafeez',
});

console.warn('Lecture 003');

// Destructing Array
const arr = [2, 4, 6, 8];
let [a, b, x, y] = arr;
console.log(a, b, x, y);
// -- Switching variables
[a, b] = [b, a];
console.log(a, b, x, y);

// Getting 2 returns from a function
const [starterCourse, mainCourse] = restaurant.order(2, 0);
console.log(starterCourse, mainCourse);

// Nested Destructuring
const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default Values
const [p, q, r] = [8, 9];
console.log(p, q, r);
const [l = 0, m = 0, n = 0] = [8, 9];
console.log(l, m, n);

console.warn('Lecture 004');

// Object Destrcturing
const { name, openingHours } = restaurant;
console.log(name, openingHours);

const {
  name: resturantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(resturantName, hours, tags);

// Default Values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating Variables
let ab = 111;
let cd = 999;
const obj = { a: 12, b: 14, c: 16 };

// This gives error
// {a, b} = obj
// This is correct way
({ a, b } = obj);
console.log(a, b);

// nested Objects

const { openingHoursOfRes: openHours } = restaurant;

const { fri: firday } = openingHoursOfRes;

const { open: openingHour, close: closingHour } = firday;

console.log(`openingHour: ${openingHour}`, `closingHour: ${closingHour}`);

// -- SECOND WAY
const {
  fri: { open: openH, close: closeH },
} = openHours;

console.warn('005 The Spread Operator');

// Spread Operator
const arr_1 = [7, 8, 9];
const arr_2 = [1, 2, ...arr_1];
console.log(arr_2);

console.warn('006 Rest Pattern and Parameters');

// Rest Operator
const [aa, bb, ...others] = [1, 3, 4, 5, 52, 23, 32, 12];
console.log(aa, bb, others);

// functions

// ...numbers is packing all variables to an array
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(`sum: ${sum}`);
};

add(2, 4, 5, 6);
const d = [1, 3, 4, 5, 6];
// unpacking and then sending to function.
add(...d);
/*
  add(2, 4)
  add(2, 5, 6, 2)
  add(2, 5, 1, 4, 5, 5, 4, 6)
*/

console.warn('007 Short Citcuiting');

// Logical operators
// Use Any Data Type, Return Any Data Type and short-circuiting
console.log(undefined || null);
console.log(3 || true);

console.warn('008 Nullish');

// Nullish: null and undefined (NOT 0 or '')
restaurant.numGuests = 0;
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

console.warn('009 Logical Assignment Operator');

const rest1 = {
  name: 'capri',
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// not efficient because if numGuests: 0 then OR Opertor will think of it as flase value.

//rest1.numGuests ||= 10;
//rest2.numGuests ||= 10;
//console.log(rest1.numGuests, rest2.numGuests);

// better way is to use nullify
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;
console.log(rest1.numGuests, rest2.numGuests);

// AND Assignment Operator

// rest1.owner = rest1.owner && '<ANONYMOUS>';

rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.warn('011 Looping Arrays - For of Loop');

const { starterMenu } = restaurant;
// For Loop Basic
for (const item of starterMenu) console.log(item);
// For Loop with index
for (const item of starterMenu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}

console.log(...starterMenu.entries());

// -- better way
for (const [index, item] of starterMenu.entries()) {
  console.log(`${index + 1}: ${item}`);
}

console.warn('013 Optional Chaining');

// optional chaining
console.log(restaurant.openingHoursOfRes?.mon?.open);

// example
const users = [
  {
    name: 'saim',
    email: 'saim@gmail.com',
  },
];
console.log(users[0]?.name ?? 'User array empty');

console.warn('014 Looping Objects');

// loop over array
for (const day of Object.keys(openingHoursOfRes)) {
  console.log(day);
}

console.warn('014 Looping Objects');

const properties = Object.keys(openingHoursOfRes);

console.log(properties);

const values = Object.values(openingHoursOfRes);

console.log(values);

const entries = Object.entries(openingHoursOfRes);

console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

console.warn('016 Sets');
const orderSet = new Set(['pasta', 'pizza', 'risotto', 'pizza', 'pasta']);
console.log(orderSet);

console.warn('017 Maps');

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal');

rest
  .set('Categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Orgaic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'we are open :D')
  .set(false, 'we are closed :(');

console.log(rest.get('name'));
console.log(rest.get('Categories'));
console.log(rest.get(false));

console.warn('018 Map Iteration');

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['correct', 3],
  [true, 'Correct Answer!'],
  [false, 'Try again!'],
]);

console.log(question);

// Convert Object to Map
const hoursMap = new Map(Object.entries(openHours));
console.log(hoursMap);

// Iterations
for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
}

const answer_user = 3;
console.log(answer_user);

if (answer_user === Number(question.get('correct'))) {
  console.log(question.get(true));
} else {
  console.log(question.get(false));
}

// better way
console.log(question.get(question.get('correct') === answer_user));

// Convert map to Array
console.log(...question);
