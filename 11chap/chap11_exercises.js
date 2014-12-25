function makeCounter(){
    var count = 0;
    
    function counter() {
        count = count + 1;
        return count;
    }
    return counter;
}


var doCount = makeCounter();
console.log(doCount());
console.log(doCount());
console.log(doCount());

// Page 500 exercises

function makePassword(password) {
    return function(passwordGuess) {
        return (passwordGuess == password);
    };
}

var isGuessCorrect = makePassword("123");
isGuessCorrect();
isGuessCorrect(123);
isGuessCorrect("123"); // true as string is converted to number type


/*
the multN function takes a number (call it n) and returns a function. That 
function itself takes a number, multiplies it by n and returns the result.
*/
function multN(n) {
    return function(input) {
        return input * n;
    };
}


var times3 = multN(3);
console.log(times3(3)); // 9
console.log(times3(10)); // 30

/*
This is a modification of the counter we just created. makeCounter 
takes no arguments, but defines a count variable. It then creates and returns an object 
with one method, increment. This method increments the count variable and returns it.
*/
            
function makeCounter2(){
    var count = 0;
    
    var obj = {increment : function() {return ++count; }};
    return obj;
}


var doCount2 = makeCounter2();
console.log(doCount2.increment());
console.log(doCount2.increment());
console.log(doCount2.increment());
