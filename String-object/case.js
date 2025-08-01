// upper case: ABCDEFGH
// loweer case: abcdefgh

const school = 'Fazal Ambia High School';
const subject = 'Chemistry';
const book ='Chemistry';

// make an stricng upper case or lower case

// normal one
console.log(school);

// to lower case
console.log(school);
console.log(school.toLowerCase());

// to lower case
console.log(school.toUpperCase());


// upper codes reflects the comparison between uppercase and lower case. if any string mistakenly written in different cases then (.toLowerCasa/.toUpperCase) will be use to make them correct.





const drink = 'water';
// if the string doesnt match and a period(space) or somethig is fallen then thin rules will be applied
const liquid = 'water ';

// .trim is use to reduce the period fallen into code by mistake

if( drink.trim()  === liquid.trim()){
    console.log('pani er opor nam jibon');
}
else {
    console.log('somudre pani ache khaite pari na')
}