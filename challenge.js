let breakfast = 'pancakes'
let lunch = 'pasta'
let dinner = 'pizza'

const menu = () => {

    return `Breakfast - ${breakfast}, lunch - ${lunch}, dinner - ${dinner}`
}


console.log(menu())

const number1= (num) => {

    if (num % 3 == 0 && num % 5 == 0) {
        return `Fizz Buzz`
    } else if (num % 3 == 0) {
        return `Fizz`
        } else if (num % 5 == 0) {
            return `Buzz`
            } else if (typeof num !== "number" || num <= 0){
                return `Needs to be a positive number`
            } else {
                return `${num}`

   
 } 
}

  console.log(number1(15))


const numberSum = (num1, num2 ) => {

    let result = num1 + num2
    if( result % 2 == 0 ) {
        return `The sum is even: ${result}`

    } else if(result % 2 != 0){
        return num1 * num2 


    } else {
        return `Error("Invalid input")`
    }



}

console.log(numberSum(1, 2))

let randomNumbers = [];

const numberCount = () => {

    while(randomNumbers.length < 6){
        let num = Math.floor(Math.random() *50) +1;
        
            randomNumbers.push(num);
    }
    console.log(randomNumbers)
    


}

numberCount()




let number = [0,1,2,3,4,5,6,7,8,9]

const reverse = () => {

    for(let i = number.length -1; i>= 0; i-- ){
        console.log(i)
    }
}

reverse()








