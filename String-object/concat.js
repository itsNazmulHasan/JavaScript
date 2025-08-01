// addup two name

const first = 'Nazmul';
const last = 'Hasan';
const fullName = first + last;
console.log(fullName);

// if space between name is needed


// const fullName2 = first + ' ' + last;
//  console.log(fullName2);

// if space between name is needed

const fullName2 = first.concat(" ").concat(last);
console.log(fullName2);

// Includes

console.log(last.includes("x"));