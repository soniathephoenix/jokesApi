(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// For notes on package instalations refer back to bear notes 'Forms and DOM class'
// 1 - grabbing the reference to the form element
const wordForm = document.querySelector('#inputSection form') //this refers to the form inside inputSection
// api 2 - add the variable to the <p> in the #jokeSection
const joke = document.querySelector('#jokeSection p')


// 2 - add event listener. The first argument is the type of event. 
// 3 - The second argument is our callback function. Meaning that
// when the input button is clicked, it will run that function.
// 4 - we will name a function which we have yet written. When our 
//functions are small, makes sense to write inside the eventListener
// but if they're big makes sense to create it seperately like below
wordForm.addEventListener('submit', extractWord)

// 5 - Here we define the function with 'e' as an argument which stands for event
// this function will extract the information that the api holds about the inputed word
function extractWord(e) {
    e.preventDefault() // 6 - this prevents the default behaviour which is to refresh automatically
    // 6 - we need to see the path to the value that we submitted in the input with the id of #wordInput 
//so that we can define the path to it. 
//submitEvent(which is an object) -> target(which is an array or the first element of the node list) -> 0: input#wordInput -> value: "fruit"(which 
//is a key holding the value of fruit)
    //addWord(e.target[0].value) // this 'addWord' function will be written later below
    // api 3 - we replace addWord with the following:
    fetchWordData(e.target[0].value)
    // 7 - this clears the input form once we hit enter
    e.target[0].value = ''
}

// api 4 - create the function to fetch word data
// function fetchWordData(word) {
//     fetch(`https://api.chucknorris.io/jokes/search?query=${word}`)
//         // api 5 - here we are saying that is we get the response 
//         //from the api we convert the json to js
//         .then(resp => resp.json()) 
//         // api 6 - if the response succeeds we ask it to do the next catch block
//         // We're going to call the addWord function with the data received
//         .then(data => addWord(data)) 
//         // api 7 - add catch for any errors in the process above
//         .catch(err => console.log(err))
// }

//api 12 - refactor the old function to be async
async function fetchWordData(word) {
    //everything inside try is what will happen if we are successful
    try {
        const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${word}`)
        const data = await response.json()
        addWord(data)
    } catch {
        // if it doesnt work we 'catch' the error
        const err = 'Error'
        console.log(err)
    }        
}


// 8 - we want to add a <ul> inside the #jokeSection in the html
// 9 - then we create the variable for the jokeSection list
const jokeList = document.querySelector('#jokeSection ul')

// 10 - this function will help us take the unordered list and add different
// list elements to it
function addWord(word) {
    console.log(word)
    //dom manipulation to create elements, in this case a list
    const li = document.createElement('li')
    // this will print the word on the list element on the browser
    // li.textContent = word 
    // api 8 - we substitute the line above with the code below to access the joke in the api object
    li.textContent = word.result[0].value
    // this will add the li element to the #jokeSection unordered list
    jokeList.appendChild(li)
}

// 11 - on the html in the input #wordInput add 'required' next to the placeholder 
// so that if we press enter and there isn't any value, it won't print a dot without 
// nothing on it 

/////////to integrate the API
// api 1 - on the html go the the #jokeSection <ul> and add a <p> inside it
},{}]},{},[1]);
