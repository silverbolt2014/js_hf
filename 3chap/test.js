today = "Wednesday";

f1();

function f1(){
    console.log("1 " + today);
    var today = "local";
    console.log("2 " + today);
}


console.log("3 " + today);