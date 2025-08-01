// to cut something from an existing word .slice() will be use.


const address = 'andorkilla';
const part = address.slice(5,10);
console.log(part); //answer : kIlla

/*to split something from an existing sentence .split() will be use.*/

const sentence = 'Iam Nazmul Hasan, I love to code';
console.log(sentence.split('')); /* answer: 'I', 'a', 'm', ' ', 'N', 'a',
  'z', 'm', 'u', 'l', ' ', 'H',
  'a', 's', 'a', 'n', ',', ' ',
  'I', ' ', 'l', 'o', 'v', 'e',
  ' ', 't', 'o', ' ', 'c', 'o',
  'd', 'e'
*/

const friends = 'Rohim, Mohim, Sohim, Dohim, Kohim';
console.log(friends.split(','))  // answer: [ 'Rohim', ' Mohim', ' Sohim', ' Dohim', ' Kohim' ]

// to join names

const realFriends = [ 'Rohim', ' Mohim', ' Sohim', ' Dohim', ' Kohim' ]
console.log(realFriends.join());
console.log(realFriends.join('|'));
console.log(realFriends.join('-'));

