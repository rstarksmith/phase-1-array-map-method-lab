const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


const titleCased = () => {
  return tutorials.map(element => 
  element.split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(' '))
}

// const tutorials = "what does this keyword mean?"

// function titleCased(str){
//   const cased = str
//   .split(' ')
//   .map(word => {
//     return word.charAt(0).toUpperCase() + word.slice(1)
//   })
//   .join(' ')

//   return cased
// }










// function firstLetterCap(element) {
//   return element.charAt(0).toUpperCase()+ element.slice(1);
// }

// const newElement = element.split('').map(element => {
//   return element.charAt(0).toUpperCase() + element.slice(1)
// })

// const str = 'hello how are you?';

// function capitalize(str) {
//   return str.charAt(0).toUpperCase() + str.slice(1);
// }

// const caps = str.split(' ').map(capitalize).join(' ');
