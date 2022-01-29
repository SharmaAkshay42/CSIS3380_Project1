/******************************************
*****************************************/

/*** 
 * `quotes` array 
***/

// emtpy quotes array 
const quotes = []; // For storing all the quotes object
const quoteObj = {}; // quoteObj is an collection of quotes objects

const NUM_QUOTES = 7;

for (let i = 0; i < NUM_QUOTES; i++) {
    quoteObj[i] = {}; // add empty objects to this quote obj. Each empty object represents a quote in itself
}

/**
 * Each quote is like this:
 * quoteObj[i] = {
 * 'quote': <string>
 * 'source': <string> the person who said it
 * 'citation: <string> the origin of the quote - book, movie
 * 'year': string
 * }
 */
quoteObj[0] = {
    quote: "Some are born great, some achieve greatness, and some have greatness thrust upon 'em.",
    source: 'William Shakespeare',
    citation: 'Twelfth Night',
    year: '1601'
};

quoteObj[1] = {
    quote: 'The purpose of computing is insight, not numbers.',
    source: 'Richard Hamming',
    citation: 'Numerical Methods for Scientists and Engineers',
    year: '1962'
};

quoteObj[2] = {
    quote: "Everyone knows that debugging is twice as hard as writing a program in the first place. So if you're as clever as you can be when you write it, how will you ever debug it? ",
    source: 'Brian Kernighan',
    citation: 'The Elements of Programming Style, 2nd Edition',
    year: '1978'
};

quoteObj[3] = {
    quote: 'If the code and the comments disagree, then both are probably wrong.',
    source: 'Norm Schryer',
    citation: 'Programming Pearls',
    year: '1985'
};

quoteObj[4] = {
    quote: 'In mathematics the art of asking questions is more valuable than solving problems.',
    source: 'Georg Cantor',
    citation: 'Doctoral thesis',
    year: '1867'
};

quoteObj[5] = {
    quote: 'On this quiz, I asked you to find the determinant of a 2x3 matrix. Some of you, to my great amusement, actually tried to do this.',
    source: 'mathprofessorquotes.com'
}

quoteObj[6] = {
    quote: 'Using the chain rule is like peeling an onion: you have to deal with each layer at a time, and if it is too big you will start crying.',
    source: 'Anonymous'
}

// Object.keys(quoteObj) -> returns an array. 
// We access its length for this loop
for (let i = 0; i < Object.keys(quoteObj).length; i++) {
    quotes.push(quoteObj[i]);
}



/***
 * `getRandomQuote` function
***/
// generates a random quote from the quotes array
function getRandomQuote() {
    // create a variable to store a random number 
    let randomNum = Math.floor(Math.random()*quotes.length);
    // Use the random num var to grab tha 
    let randomQuote = quotes[randomNum];

    return randomQuote;
}


/***
 * `printQuote` function
***/
// printQuote() displays a random quote to our page
function printQuote() {
    let randomQuote = getRandomQuote();
    let PtoHTML1 = "<p class='quote'>" + randomQuote.quote + "<p class='source'>" + randomQuote.source;

    if ('citation' in randomQuote) {
        PtoHTML1 += "<span class='citation'>" + randomQuote.citation + "</span>";
    }

    if ('year' in randomQuote) {
        PtoHTML1 += "<span class='year'>" + randomQuote.year + "</span>";
    }

    document.getElementById('quote-box').innerHTML = PtoHTML1;
}



/***
 * click event listener for the print quote button
 * The code will look like the following. You need to complete it.

***/

document.getElementById('load-quote').addEventListener('click', printQuote);