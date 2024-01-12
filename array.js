// let coffeeOrder = [
//     "Ollie - latte",
//     "Sam - cappuccino",
//     "Jack - espresso"


// ]


//  coffeeOrder.push("Bob - coffee")
// coffeeOrder[2] = "Jack - Hot chocolate"

// console.log(coffeeOrder);


// // adds to the end 
// faveFood.push("Cheese burger")
// console.log(faveFood)

// // takes away from the end 
// faveFood.pop()
// console.log(faveFood)

// //adds at beginning of array
// faveFood.unshift("Kfc")
// console.log(faveFood)

// // takes away from the start
// faveFood.shift()
// console.log(faveFood)

// // adding or taking away a block of info in a certain spot in the array
// faveFood.splice(1, 0, "hot dog")
// console.log(faveFood)

// //returns a shallow copy of a portion of an array into a new array object selected from start to end
// let bestFood = faveFood.slice(0,3);
// console.log(bestFood)




// let faveFood = [
//     "Pizza",
//     "english breakfast",
//     "Sushi",
// ]

// for(let i = 0; i < faveFood.length; i++){
//     console.log(faveFood[i])
// }



// let multiplesOf2 = []


// for(let i = 0; i < 20; i++){
//     if (i % 2 ==0){
//         multiplesOf2.push(i)
//     }

// }

// console.log(`numbers that are divisiable by 2 are ${multiplesOf2}`) 







// let age = 10

// while (age < 18){
//     console.log("you are not old enough")
//     age++
// }

// console.log("You are an adult")


// let cards = ["diamond", "spade", "clubs", "hearts"]
// let currentCard = "spade"

// while (currentCard != "hearts"){
//     console.log(currentCard)

//     currentCard = cards[Math.floor(Math.random() * 4)];


// }
// console.log(currentCard)




// let faveFilms = [
//     'The Shawshank Redemption',
//     'The Godfather',
//     'The Dark Knight',
//     'Fight Club',
//     'Toy story'
// ]

// faveFilms.push('Cars', 'Step Brothers')

// for(let i = 0; i < faveFilms.length; i++){
//     console.log(faveFilms[i])
// }


// let randomNumbers = [];

// while(randomNumbers.length < 6){
//     let num = Math.floor(Math.random() *50) +1;
    
//         randomNumbers.push(num);
// }

// console.log(randomNumbers);

// let number = [0,1,2,3,4,5,6,7,8,9]

// for(let i = number.length -1; i>= 0; i--){
//     console.log(number[i])
// }


// let favFilms = [
//      "The Godfather",
//      "The Shawshank Redemption",
//      "Ghostbusters",
//      "Pulp Fiction"
// ]


// for (let i = 0; i < favFilms.length; i++){
//     console.log(favFilms[i])
//     if(favFilms[i] !== 'Ghostbusters') {
//         console.log("This is a great film too.")
//     }else if(favFilms[i] == "Ghostbusters"){
//         console.log("I love this movie!")
//     }else {
//         console.log("Invalid Input")
//     }
// }


// let randomNumber = []

// while (randomNumber.length < 6){
//     let randNum = Math.floor(Math.random()*30) +1;
//     randomNumber.push(randNum)
//     if (randNum % 7 == 0){
//         console.log(`${randNum} can be divided by 7`)

//     } else {
//         console.log(`${randNum} cannot be divided by 7`)
//     }
// }




// let ollieFollowers = [
//     "sam",
//     "jim",
//     "jessica",
//     "david"
// ]


// let tomsFollowers = [
//     "julia",
//     "bob",
//     "sam",
//     "jim"
    
// ]

// for(let i = 0; i < ollieFollowers.length; i++){
//     for(let j = 0; j < tomsFollowers.length; j++ ){

//         if(ollieFollowers[i] === tomsFollowers[j]){
//             console.log(`Ollie and Tom both follow ${ollieFollowers[i]}`)


//     }
//  }
// }




// let coffreGrinding = false

// const pressGrindBeans = () => {
//     if (coffreGrinding){
//         console.log("Stopping the grind")
//     }else {
//         console.log('Starting to grind beans')
//     }
// }




// pressGrindBeans()
// let accountNumber = 1738

// const cashWithdrawal = (amount, accnum) => {
//     //checks if account number is valid

//     console.log(`Withdrawing ${amount} from account ${accnum}`)
// }


// cashWithdrawal(500, accountNumber)



// const sum = (num1, num2) => {
//  return num1 + num2;
// }



// console.log(sum(4,9));


// let orderCount = 0; 


// const takeOrder = (topping, crust) => {
   
//         orderCount++
//         return `You have ordered a ${crust} crust pizza with ${topping}. you are order number ${orderCount}.`

    
// }
// console.log(takeOrder('pineapple', 'cheese'))
// console.log(takeOrder('ham', 'normal'))

// let myBankB = 400
// let mypin = 1738

// const bank = (pin, balance,) => {
//     let attempt = 0;

//     while (attempt < 3){
//     if(mypin === pin && myBankB >= balance) {
//         console.log(`You have the correct pin`)
//         console.log(`Your current balance is ${myBankB}.`)
//         break;
//     } else{
//         console.log("Incorrect pin or insufficient funds")
//         attempt++;
//            }


//     }
//     if (attempt === 3){
//         console.log("You have exceeded the number of attempts.")
//     }


// }


// bank(1766, 200)
// bank(1738, 200)
// bank(1738, 600)

// const area = (base, height) => {
//     return base * height / 2

// }

// console.log(area(12, 10))


// let list = [1,2,3,4,5]

// const findMaxMin = () => {
//     console.log(Math.min.apply(Math, list))
//     console.log(Math.max.apply(Math, list))
    

// }

// findMaxMin()



const getCelsius = (fahrenheit) => {
    return ((fahrenheit - 32  ) * 5/9)

    


}


console.log(getCelsius(59))