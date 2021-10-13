// 1. Sleep In
function sleep_in(weekday,vacation) {
    if (!weekday || vacation) {
      return true;
    } else {
      return false;
    }
  }
  // 2. Monkey Trouble
  function monkey_trouble(a,b) {
      let count = 0;
      let result;
  
      if (a) {count++};
  
      if (b) {count++}; 
  
      count == 1 ? result = true : result = false;
  
      return result;
  
  }
  // 3. String Times 
  function string_times(string, num) {
    let result = string;
  
    for (let i=0; i<num; i++) {
      result = result + string;
    }
    
    return result;
  }
  // 4. Front Times
  function front_times(string, num) {
    const front = string.splice(0,3);
    let final = front;
  
    for (let i=1; i<num; i++) {
      final = final + front;
    }
    return final;
  }
  // 5. String Bits 
  function string_bits(string) {
      let result = [];
  
      for (let i=0; i<5; i++) {
          if (i % 2 == 0) {
              result.push(string[i]);
          }
      }
      return result.join("");
  }
  // 6. Caught Speeding 
  function caughtSpeeding(speed, birthday = 0) {
    let ticket = 0;
    let bigLimit = 81;
    let smallLimit = 61;
  
    if (birthday) {bigLimit += 5; smallLimit += 5};
  
    if (speed >= bigLimit) {
      ticket = 2;
    } else if (speed >= smallLimit) {
      ticket = 1;
    }
    return ticket;
  }
  // 7. FizzBuzz
  function fizzBuzz(num) {
       if (num % 3 == 0 && num % 5 == 0) {
           return "FizzBuzz!";
       } else if (num % 5 == 0) {
           return "Buzz!";
       } else if (num % 3 == 0) {
           return "Fizz!";
       } else {
           return num.toString() + "!";
       }
  }
  // 8. Special Eleven 
  function specialEleven(num) {
      let result = false;
  
      if (num % 11 == 0 || num + 1 % 11 == 0) {
          result = true;
      }
  
      return result;
  }
  
  // 9. Without Doubles
  function withoutDoubles(x, y, noDoubles) {
      if (noDoubles && x == y) {x++};
  
      let sum =  x + y;
      return sum;
  } 
  
  // 10. Left2 
  function left2(string) {
      let first2 = string.slice(0,2);
      string = string.slice(2, string.length) + first2;
      return string;
  }


// 11. firstLast6

function firstLast6(array) {
    if (array[0] == 6 || array[array.length-1] == 6) {
        return true;
    } else {
        return false;
    }
}
/*
let array = [6,4,4,6];

switch (true) {
    case array[0] == 6:
    case array[array.length-1] == 6:
        console.log("true");
        break;
    default: 
        console.log("false");
}
*/

// 12. has23
function has23(array) {
    for (let i=0; i<array.length; i++) {
        if (array[i] == 2 || array[i] == 3) {
            return true;
        } 
    }
    return false;
}

// 13. fix23

function fix23(array) {
    for (let i=0; i<array.length; i++) {
        if (array[i] == 2) {
            if (array[i+1] == 3) {
                let changedArray = array;
                changedArray[i+1] = 0;
                return changedArray;
            }
        }
    }
    return array;
}

// 14. countYZ
function countYZ(string) {
    let array = string.split(" ");
    let counter = 0;
    let word;

    for (let i=0; i<array.length; i++) {
        word = array[i];
        word = word.toLowerCase();
        for (let i=0; i<word.length; i++) {
            if (word[i] == "y" || word[i] == "z") {
                counter = counter + 1;
            }
        }
    }
    return counter;
}

// 15. endOther 
function endOther(string1, string2) {
    let end = string2.slice(string2.length - string1.length, string2.length);
    if (end == string2) {
        return true;
    }
    
    end = string1.slice(string1.length - string2.length, string1.length);
    if (end == string1) {
        return true;
    }
    return false;
}

let string1 = "low";
let string2 = "hdfsa";

console.log(endOther(string1,string2));

// 16. starOUt
function starOut(string) {
    let stringArray = string.split("");
    let indexArray = [];

    for (let i=0; i<stringArray.length; i++) {
        if (stringArray[i] == "*") {
            indexArray.push(stringArray.indexOf(stringArray(i-2)));
        }
    }
    for (let i=0; i<3; i++) {
        stringArray
    }
}

let string = "asdfdfsg";
let array = string.split("")
let index = array(3);
console.log(string.indexOf(string.indexOf(string[5-2])));

// 17. getSandwich 

function getSandwich(string) {
    if ("bread" in string) {
        let index1 = string.indexOf("bread");
        index1 = index1 + 5;
    }
}

