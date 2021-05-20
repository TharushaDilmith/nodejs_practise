//display array length
var counter =function (arr) {
    return "There are "+arr.length +" elements in this array";
    
};

var sayMenura =function () {
    return "Menura";
    
};
var adder = function (a,b) {
    return "The sum of the 2 numbers is "+(a+b);
    
}
var pi = 3.142;


module.exports ={

    counter :counter,
    sayMenura : sayMenura,
    adder : adder,
    pi : pi
}

//we can also export using like this

// module.exports.counter = counter;
// module.exports.sayMenura = sayMenura;
// module.exports.adder = adder;
// module.exports.pi = pi;



//we can also export using like this
// module.exports.counter =function (arr) {
//     return "There are "+arr.length +" elements in this array";
    
// };

// module.exports.sayMenura =function () {
//     return "Menura";
    
// };
// module.exports.adder = function (a,b) {
//     return "The sum of the 2 numbers is "+(a+b);
    
// }
// module.exports.pi = 3.142;