

// let age = 18

// let country = 'england'

// if (age > 17 && country == 'england'){
//     console.log("Yes i can serve you")
// }else {
//     console.log(" You are not old enough!" )
// }


// let pizzaTopping = 'ham';



// switch (pizzaTopping) {
//     case 'mushroom':
//         console.log(`${pizzaTopping} should not be on my pizza!`);
//         break;
//     case 'pepperoni':
//             console.log(`${pizzaTopping} should not be on my pizza!`);
//             break;
//     case 'ham':
//         console.log('i love Putting ham on the pizza');
//         break;
//         default:

// }






// let password = 'Dogs96'

// if(password.length < 8){
//     console.log('Password is too short, it must contain at least 8 characters')
// }else {
//     console.log(password)
// }


// let num = 0;


// if (num / 3 || num / 5){
//     console.log('The number is divisible by either 3 or 5')
// } else {
//     console.log('The number is neither divisible by 3 nor by 5')
// }




// let number = 15;

// if (number % 3 === 0 && number % 5 === 0){
//     console.log("FizzBuzz");
// } else if (number % 3 === 0){
//     console.log("Fizz");
// }else if ( number % 5 === 0){
//     console.log("Buzz");
// } else {
//     console.log(`${number}`);
// }




// let number = 55234

// let reverse = Number(String(number).split('').reverse().join(''));

// if(number === reverse){
//     console.log(number + ' is a palindrome')
// }else {
//     console.log(number + " isn't a palindrome")
// }









let day = 'saturday'

let weather = 'sunny'

if (day == 'saturday' || day == 'sunday' && weather == 'sunny'){
    console.log('it is the weekend! time to get out in the sun')
} else if (day == 'saturday' || day == 'sunday' && weather == 'raining'){
    console.log('bring your umbrella, it will be rainy today')
} else {
    console.log('just another regular workday')
}