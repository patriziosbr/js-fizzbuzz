// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi "Fizz" al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

for (var i = 0; i <= 15; i++ ) {
    console.log(i);
    if ( i % 3 == 0 ) {
        console.log("fizz");
     } else if ( i % 5 == 0 ) {
        console.log("buzz");
     }
}

if ( i / 3 == 0 ) {
    i = "fiz"
 } else if ( i / 5 == 0 ) {
     i = "buzz"
 } 