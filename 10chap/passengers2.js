var passengers = [  { name: "Jane Doloop", paid: true, ticket: "coach" },
                    { name: "Dr. Evel", paid: true, ticket: "firstclass" },
                    { name: "Sue Property", paid: false, ticket: "firstclass" },
                    { name: "John Funcall", paid: true, ticket: "coach" },
                    { name: "John Snow", paid: true, ticket: "premium" }
                 ];
                    

function createDrinkOrder(passenger) {
    var orderFunction;
    
    if (passenger.ticket === "firstclass") {
        orderFunction = function() {
            alert("Would you like a cocktail or wine?");
        }
    } else if (passenger.ticket == "premium") {
        orderFunction = function() {
            alert("Your choice is wine, cola or water.");
        }
    } else {
        orderFunction = function() {
            alert("Your choice is cola or water.");
        }
    }
    
    return orderFunction;       
}

function createDinnerOrder(passenger) {
    var orderFunction;
    
    if (passenger.ticket === "firstclass") {
        orderFunction = function() {
            alert("chicken or pasta");
        }
    } else if (passenger.ticket === "premium") {
        orderFunction = function() {
            alert("snack box or cheese plate");
        }
    } else {
        orderFunction = function() {
            alert("peanuts or pretzels");
        }
    }
    
    return orderFunction;
}

function serveCustomer(passenger) {
    var getDrinkOrderFunction = createDrinkOrder(passenger);
    getDrinkOrderFunction();
    
    var getDinnerOrderFunction = createDinnerOrder(passenger);
    getDinnerOrderFunction();
}


function servePassengers(passengers) {
    for (var i = 0; i < passengers.length; i++) {
        serveCustomer(passengers[i]);    
    }
}


servePassengers(passengers);