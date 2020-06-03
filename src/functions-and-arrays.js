// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(num1, num2) {
  return (num1 > num2 ? num1 : num2);
}


// Here you  write  a code and check
// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findScaryWord(words) {

  let length = 1;
  let pos = 0;
  if (words.length == 0) {
    return null;
  } else {
    words.forEach((i, index) => {
        if (i.length > length) {
          length = i.length;
          pos = index;
        }
      }

    );
  }
  return (words[pos]);

}


// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function netPrice(numbers) {
  const sum = numbers.reduce((total, no) => total + no, 0);
  return (sum);
}
// Progression #4: Calculate the average
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function midPointOfLevels(levels) {
  if (levels.length == 0) {
    return null;
  } else {
    let sumavg = 0;
    levels.forEach(i => {
      sumavg += i;
    });
    return (sumavg / levels.length);
  }


}

// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
//4  10 5 5 4 5 5 5 4 6
function averageWordLength(wordsArr) {
  let a = [],
    totall = 0;
  if (wordsArr.length == 0) return null;
  else {
    wordsArr.forEach(i => {
      let sum = 0;
      sum += i.length;
      totall += sum;
      a.push(sum);
    });
    return (totall / a.length);
  }
}

//Progression #4.3 (Bonus): A generic `avg()` function
function avg(arr) {
  if (arr.length == 0) return null;
  console.log(arr);
  let count = 0;
  let total_sum = 0;
  arr.forEach(i => {
    if (typeof (i) === "boolean")
      return;
    else {
      i = parseInt(i);

      if (Number.isNaN(i)) {
        count++;
      } else {
        total_sum += i;
      }
    }
  });
  return ((total_sum + count) / arr.length);
}



// Progression #5: Unique arrays
const wordsUnique = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt',
  'egg',
  'flour'
];

function uniqueArray(wordsUnique) {
  if (wordsUnique.length == 0) return null;
  else {
    let result = [...new Set(wordsUnique)];
    return (result);
  }

}

// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function searchElement(wordsFind, word) {
  let i;
  if (wordsFind.length == 0) return null;
  for (i = 0; i < wordsFind.length; i++) {
    if (wordsFind[i] == word) {
      return true;
    }
  }
  if (i == wordsFind.length) {
    return false;
  }

}
// Progression #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimesElementRepeated(wordsCount, word) {
  let count = 0;
  if (wordsCount.length == 0) return 0;
  else {
    wordsCount.forEach(i => {
      if (i == word) count++;
    });
    return count;
  }
}

// Progression #8: Bonus

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];