// AJAX and APIs Exercise

// 1
const first = document.querySelector('#first');
const p1 = document.createElement('p');
const p2 = document.createElement('p');
first.append(p1, p2);
`{"id":18,"type":"programming","setup":"Why did the programmer quit his job?","punchline":"Because he didn't get arrays."}`;

// 1a
const jokeJS1 = JSON.parse(`{"id":18,"type":"programming","setup":"Why did the programmer quit his job?","punchline":"Because he didn't get arrays."}`);
console.log('Question 1');
console.log(jokeJS1);

// gg set up
// const {setup} = jokeJS1;
// p1.innerText = setup;

// OR john's
// 1b
console.log(jokeJS1.setup);
p1.innerText = jokeJS1.setup;
// I kept on running into issues around here and got thing s to work and break down.went to the video to figure out and it still took me all evening.currently 2:15am.
// from John's
//1c 
// const {punchline} = jokeJS1;
// p2.innerText = punchline;

console.log(jokeJS1.punchline);
p2.innerText = jokeJS1.punchline;


/*
// 2
const second = document.querySelector('#second');
const p3 = document.createElement('p');
const p4 = document.createElement('p');
second.append(p3, p4);

// 2a
axios.get(`https://friends-quotes-api.herokuapp.com/quotes/random`)

// 2b
.then(friendsJS2 => {
    console.log(friendsJS2.data.character);
    console.log(friendsJS2.data.quote);
// 2c 
    p3.innerText = friendsJS2.data.character;
    p4.innerText = friendsJS2.data.quote;
})

.catch (rejected => {
    console.log(`Nope,try again`);
    console.log(rejected);
    alert (`NO DICE! TRY AGAIN!`)
})

*/

// or
// 2b
.then (res => {
    console.log('Question 2');
    console.log(res);
    const friendsJS2 = res;
    console.log(friendsJS2);

    // 2c
    p3.innerText = friendsJS2.data.characters;
    p4.innerText = friendsJS2.data.quote;
})

// 2d
.catch (err => {
    console.log(`Question 2 Failed`);
    console.log(err);
});

// 3
const third = document.querySelector('#third');
const p5 = document.createElement('p');
const p6 = document.createElement('p');
third.append(p5, p6);

async function quoteFunc(){
    // 3a
    try {
        const quoteJS3 = await axios.get (`https://friends-quotes-api.herokuapp.com/quotes/random`)
    }
}
// 3a

// 4
const fourth = document.querySelector('#fourth');
const p7 = document.createElement('p');
fourth.append(p7);