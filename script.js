/*

A program is a set of intstructions that you give a computer. Programming is the task of writing these instructions in a language that a computer can understand

Javascript can be used for the frontend and the backend. This allows you to build full-stack solutions with one language

It's syntax includes semicolons, brackets, parentheses, and more.

<>.{}[]()''""||&&;:=``$%*-!#+

A common convention you will see is the use of camelCasing for distinguishing between words in variables

*/

let numberOfApples = 21

// Variables can store all data types

numberOfApples = (numberOfApples - 10)

numberOfApples -= 2

console.log(numberOfApples)

// create a variable that can take a value from an input

let numFromInput = Number(document.querySelector('#danceDanceRevolution').value)

numFromInput += 25

alert(numFromInput)

// create a variable that holds the h1

const h1 = document.querySelector('h1')

// add an event listener that takes the two previous values and adds them

h1.addEventListenter('click',jamOnIt)

function jamOnIt() {
  console.log(numberOfApples + numFromInput)
}

const pizza = "Dominos"

if (pizza === 'Papa Johns'){
  console.log('scram')
} else if (pizza === 'Dominos'){
  console.log('Welcome aboard the train to flavor town')
} else {
  console.log('what are you even doing with your life?')
}

let day
if (day === 'Saturday' || day === 'Sunday') {
  console.log('It is the weekend')
}

day === 'Saturday' ? 'It is the best day of the week' : 'Almost my favorite day'

let age 

function whatToDo(age){
  let age = Number(document.querySelector('input').value)
  if (age < 16){
    console.log('You cannot drive')
  } else if (age < 18){
    console.log("can't hate from outside the club if you can't even get in")
  } else if(age < 21){
    console.log('you cannot drink')
  } else if (age < 25){
    console.log('cannot rent cars affordably')
  } else if(age < 30){
    console.log('cannot rent fancy cars afforably')
  } else {
    console.log('there is nothing else to look forward too')
  }
}

document.querySelector('h1').addEventListener('click',whatToDo)

