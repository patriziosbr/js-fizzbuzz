// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi "Fizz" al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

for (var i = 1; i <= 15; i++ ) {
    // console.log(i); 
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("fizzbuzz");
     } else if ( i % 5 == 0 ) {
        console.log("buzz");
     } else if (i % 3 == 0) {
         console.log("fizz");
     } else {
         console.log(i);
     }
}

