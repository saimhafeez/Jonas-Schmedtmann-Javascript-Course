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
