// For all of the following problems, use an array higher order method to solve the problem.
// You should not use any for or while loops!
// For each section, we've provided some sample data for you to test your function with.

/* -------------------------------------------- */
/* --------------STRING PROBLEMS--------------- */
/* -------------------------------------------- */

const sampleWords = ['dog', 'blueberry', 'alabama', 'earth', 'football'];

// Problem 1
const printEveryWord = (words) => {
  words.forEach(word => console.log(word))

};
printEveryWord(sampleWords)

// Problem 2
const getStringLengths = (strings) => {
  console.log(strings.map(string => string.length))

};
getStringLengths(sampleWords)

// Problem 3
const sortWordsZtoA = (words) => {
  console.log(words.sort((a, b) => a === b ? 0 : a < b ? 1 : -1))

};
sortWordsZtoA(sampleWords)

/* -------------------------------------------- */
/* --------------NUMBER PROBLEMS--------------- */
/* -------------------------------------------- */

const sampleNumbers = [7, 3, 9, 1, 4, 8, 2, 10, 5, 6];

// Problem 4
const getEvenNumbers = (nums) => {
  console.log(nums.filter(num => num % 2 === 0))
};
getEvenNumbers(sampleNumbers)

// Problem 5
const getLargestNumber = (numbers) => {
  let largest = -Infinity
  numbers.find(num => {
    if (num > largest) {
      largest = num
    }
  })
  console.log(largest)
};
getLargestNumber(sampleNumbers)

/* -------------------------------------------------- */
/* --------------OBJECT ARRAY PROBLEMS--------------- */
/* -------------------------------------------------- */

const sampleUsers = [
  { name: 'Charlie', isActive: true, age: 18, score: 80 },
  { name: 'Edward', isActive: true, age: 30, score: 60 },
  { name: 'Bob', isActive: true, age: 25, score: 90 },
  { name: 'Diana', isActive: false, age: 35, score: 70 },
  { name: 'Alice', isActive: false, age: 28, score: 100 },
];

// Problem 6
const printUserNamesAndScores = (users) => {
  users.forEach(user => console.log(`${user.name} scored ${user.score} points.`))
};
printUserNamesAndScores(sampleUsers)

// Problem 7
const getUserNames = (users) => {
  console.log(users.map(user => user.name))

};
getUserNames(sampleUsers)


// Problem 8
const getActiveUsersUnder30 = (users) => {
  console.log(users.filter(user => user.age < 30 && user.isActive === true))
};
getActiveUsersUnder30(sampleUsers)

// Problem 9
const getTotalScore = (users) => {
  console.log(users.reduce((acc, currVal) => acc + currVal.score, 0))
};
getTotalScore(sampleUsers)


// Problem 10
const sortUsersByScoreDescending = (users) => {
  console.log(users.sort((a, b) => b.score - a.score))

};
sortUsersByScoreDescending(sampleUsers)
