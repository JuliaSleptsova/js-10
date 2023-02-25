
// sort arr str
const arr = ["4534", "a", "bb", "sdfds", "", " ", "r4rdv-"];
arr.sort(function(a, b) {
  if (a > b) {
        return 1;
    }
    if (b > a) {
        return -1;
    }
    return 0;
});

console.log(arr); 

// sort arr by name
const arr = [
  { name: "John", age: 25 },
  { name: "John", age: 5 },
  { name: "John", age: 2 },
  { name: "John", age: 45 },
  { name: "Pete", age: 30 },
  { name: "Mary", age: 29 },
  { name: "Mary", age: 2 },
  { name: "Taras", age: 25 },
  { name: "Taras", age: 19 },
  { name: "Kate", age: 74 },
  { name: "Chris", age: 14 },
  { name: "Alan", age: 5 },
  { name: "Alan", age: 32 },
  { name: "Boris", age: 55 },
  { name: "Elizabeth", age: 48 },
  { name: "Elizabeth", age: 8 },
];

const sortUsers = arr.sort (function (a, b) {
     if (a.name < b.name) {
    return -1;
  } else if (a.name > b.name) {
    return 1;
  } else {
    return a.age - b.age;
  }
})

console.log(sortUsers);


// sort arr
const arr = [324, 32423, -3242, 544, 0, 23, -454, 22, 4];
arr.sort(function(a, b) {
  return a - b;
});
console.log(arr);

// filter arr
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function filterRange(arr, from, to) {
  return arr.filter(num => num >= from && num <= to);
}
const filteredArr = filterRange(arr, 3, 7);
console.log(filteredArr); 

// capitalize words
const str = 'my name is julia';
const arr = str.split(" ");
for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
}
const str2 = arr.join(" ");
console.log(str2);

// avarage age
const arr = [
  { name: "John", age: 25 },
  { name: "Pete", age: 30 },
  { name: "Mary", age: 29 },
  { name: "Taras", age: 25 },
  { name: "Kate", age: 74 },
  { name: "Chris", age: 14 },
  { name: "Alan", age: 5 },
  { name: "Boris", age: 55 },
  { name: "Elizabeth", age: 48 },
];

const averageAge = arr.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.age;
}, 0);

console.log(averageAge / arr.length);

// find mix and max
const arr = [
  { name: "John", age: 25 },
  { name: "Pete", age: 30 },
  { name: "Mary", age: 29 },
  { name: "Taras", age: 25 },
  { name: "Kate", age: 74 },
  { name: "Chris", age: 14 },
  { name: "Alan", age: 5 },
  { name: "Boris", age: 55 },
  { name: "Elizabeth", age: 48 },
];

const maxAge = arr.reduce(function (previous, current) {
    return current.age > previous.age ? current : previous;
});

const minAge = arr.reduce(function (previous, current) {
    return current.age < previous.age ? current : previous;
});
console.log (minAge);
console.log (maxAge);