function maxOfThreeNumbers(a, b, c) {
    // your code
    return Math.max(a, b, c);
  }


  function sumArray(numbers) {
    // your code
    let sum = 0;
    const newArray = numbers.forEach(function (number) {
    return sum += number;
  });
    return sum
  }


  function maxOfArray(numbers) {
    let sum = 0;
    const total = numbers.reduce(function (sum, number) {
      return (sum += number);
    }, 0);
    console.log(total);
    return total;
  }

  //maxOfArray([1, 200, 100, 44]);


  function maxOfArray(numbers) {
    if (numbers.length != 0) {
      let max = numbers.reduce(function (a, b) {
        if (a > b) {
          return a;
        }
        return b;
      });
      return max
    } else {
      return false;
    }
  }



  function longestString(strings) {
    // your code
    if (strings.length != 0) {
        let max = strings.reduce(function (a, b) {
          if (a.length > b.length) {
            return a;
          } else if (a.length === b.length) {
              return a
          }
          return b;
        });
        //console.log(max);
        return max
      } else {
        return false;
      }
  }

  longestString(['abc', 'bca', 'bac', 'bbb'])

  const webStudent = {
    firstName: 'Ana', 
    lastName: 'Alonso'
  }

  function getFullName(personObj) {
    // your code
    return personObj.firstName + personObj.lastName;
  }

  function doesWordExist(wordsArr, word) {
    // your code
    const wordexist = wordsArr.filter(function (wordsArr) {
      //only if condition is satisfied, add to the new array
      if (wordsArr === word) {
        return true;
      } else {
          return false
      }
    });
    if (wordexist.length > 0 ) {
        return true
    } else {
        return false
    }
  }


  function findUnique(wordsArr) {
    // your code
    //get first and last index of array and compare them
    if(wordsArr.length === 0) {
        return false;
    }
    const newArray = wordsArr.map(function (string) {
        
        let firstIndex = wordsArr.indexOf(string);
        let lastIndex = wordsArr.lastIndexOf(string);
        if(firstIndex === lastIndex) {
            return wordsArr[firstIndex] 
        }
        
      });
      //remove undefined data
      let filtered  = newArray.filter(Boolean)
      console.log(filtered)
        return filtered[0]
  }

  const twoDimArr1 = [
    [1, 2, 3],
    [4, 3, 8],
    [5, 12, 9]
  ]


  function maxTwoDimArray(matrix) {
    // your code
    let newArray = [];
    for (let i of matrix) {
        for (let b of i) {
          newArray.push(b);
        }
      }
      let max = newArray.reduce(function (a, b) {
        if (a > b) {
          return a;
        }
        return b;
      });
      return max
  }


  maxTwoDimArray(twoDimArr1)