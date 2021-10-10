
// 2. Monkey Trouble 
function monkeyTrouble(a,b) {
    let count = 0;

    if (a) {count++};

    if (b) {count++}; 

    count == 1 ? console.log("true") : console.log("false");

}


console.log("hello world");
monkeyTrouble(0,0);

// 3. String Times

function stringTimes(string, num) {
    let result = string;
    
    for (let i=1; i < num; i++) {
        result = result + string;
    }

    return result;

}

// 4. Front Times
function front_times(string, num) {
    const front = string.slice(0,3);
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

     if (speed >= 81 if  ) {
         ticket = 2;
     } else if (speed >= 61) {
         ticket = 1;
     }
 }
