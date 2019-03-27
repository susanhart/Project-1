/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


var quotes = [ { //Creating the array of quote objects (5) and naming it `quotes`. 
  quote: "Great minds discuss ideas; average minds discuss events; small minds discuss people.", //Array of quote object string.
  source: "Eleanor Roosevelt", //Adding the source of array string
  citation: "Google.com", //Adding the `citation` property to the array string.
  year: 1950 //Adding the `year` property to the array string.
},
{
  quote: "He who angers you conquers you.",
  source: "Elizabeth Kenny",
},
{ 
  quote: "It takes courage to grow up and turn out to be who you really are.",
  source:"E.E. Cummings",
},
{
  quote: "Sometimes you win, sometimes you learn.",
  source:"John Maxwell",
},
{
  quote:"Strive not to be a success, but rather to be of value.",
  source:"Albert Einstein",
}];

console.log(quotes); //  Using console.log() to log my array of quotes to the console.

function getRandomQuote(array) {
  // creating the getRandomQuote function

  var quoteIndex = Math.floor(Math.random() * quotes.length); //assigning a numerical value to the variable QuoteIndex.  Creating a variable to store a random number. 

var randomQuote = array[quoteIndex]; //Defining the randomQuote variable as the item within the array, looking for the object within the array at the index position, as represented by the variable QuoteIndex which is storing a random number between 0 and 4, since the length of the array is 5 and the starting index position is 0.

return randomQuote; 
//Returns random quote variable. Using the random number to `return` a random quote object from the `quotes` array.
}

getRandomQuote(quotes) 
//calling the function

var RandomQuote = getRandomQuote(quotes) //Stores the return value

console.log(RandomQuote) //makes the return value show up in the console


  function printQuote() // Creating the `printQuote` function. 
   {
     var result = getRandomQuote(quotes); // Calling the `getRandomQuote` function and assignng it to a variable.
     // Calls and stores the getRandomQuote in a variable called result, so that you can reference the object returned from that function.
     //Stpring an object from the array in the variable result. Result is the object.

     var message = ""; //Creating a variable for the HTML string and setting it equal to an empty string.

     message = "<p class='quote'>" + result.quote + "</p>" + "<p class = 'source'>" + result.source; 
     //properties of quote and source of result object and then reinserting the string into HTML on line 82.
     // Use the HTML template in the instructions or the markup in the index.html file, AND the random quote variable to build your HTML string.
     //Add the quote and source section to the HTML string.
     
     if (result.citation) { //Use an if statement to check for the citation property before adding it to the HTML string.
       message = message + "<span class='citation'>"+result.citation+"</span>";
       } //adding the result of the variable citation. 

     if (result.year) { //Use an if statement to check for the year property before adding it to the HTML string.
       message = message + "<span class='year'>"+result.year+"</span>"; //adding the result of the year property to the string.
     } 
     
     message = message + "</p>"; //adding on the closing tag for the second paragraph elemnent (2 spans need to be inside the paragraph element)
      // Closing that final `p` tag.
     
      document.getElementById('quote-box').innerHTML = message; //Taking the message and putting it into the HTML document. 
}    //Set the `innerHTML` of the `quote-box` div to the HTML string. 


/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.