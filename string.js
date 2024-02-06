    //  A or in a string------------------------------

// const sentence = 'banannarr'



// let count = 0;
// for (i = 0 ; i <= sentence.length ; i++)

// { let letter = sentence[i];
//     if( letter ==='a' || letter === 'r')
//     { count++;

//     }

// }
// console.log(count );

//  only 'a' finder in a string***********************************


// const word = "bananna"

// const a = 'a';
//  let count = 0;
//  for ( i = 0 ; i <= word.length ; i++)

// {
//     if ( a.includes(word[i])){
//         count++;
//     }

// }
// console.log( count);

// Check whether a string contains all the vowels a, e, i, o, u************************

// const sentence = 'i will work hard till ,i become a web developer and also a softwere Engineer'
//  const letter = [ 'a', 'e', 'i', 'o', 'u'];

//  let count = 0 ;
//  for ( i = 0 ; i <= sentence.length ; i++)
//  {
//     if ( letter.includes(sentence[i]))
//     {
//         count++;
//     }
//  }
//  console.log(count);

// If a given string has either x, replace x by y. if the given string has X, replace it by Y.----------------------------------------------------------------------------

const sentence = 'i will work hArd till ,i become a web developer and Also a softwere Engineer'

if( sentence.includes('a') || sentence.includes('A'))
{
    let replacedString = sentence.replace(/a/g, 'B').replace( /A/g, 'b');
    console.log(replacedString);
}


// capitalize the first letter
let inputString = "capitalize every first letter";

let capitalizedString = inputString.replace(/\b\w/g, function(match) {
  return match.toUpperCase();
});


console.log(capitalizedString); 










