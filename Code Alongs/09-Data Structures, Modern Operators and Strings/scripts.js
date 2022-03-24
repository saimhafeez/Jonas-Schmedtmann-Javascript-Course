'use-strict';

const restaurant = {
  name: 'Pizza Hut',
  location: 'LDA-1, lahore, Punjab, Pakistan',
  categories: ['Italian', 'Pizzeria', 'Vegerarian', 'ORganic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic', 'Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
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
  },

  // Getting 2 returns from a function
  order: function (starterIndex, mainIndex) {
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

const { openingHours: openHours } = restaurant;

const { fri: firday } = openingHours;

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
