// AJAX and APIs Exercise
// Recording date 04-22.replacement video
// 1
const first = document.querySelector('#first');
const p1 = document.createElement('p');
const p2 = document.createElement('p');
first.append(p1, p2);
`{"id":18,"type":"programming","setup":"Why did the programmer quit his job?","punchline":"Because he didn't get arrays."}`;

// 1a
const jokeJS1 = JSON.parse(`{"id":18,"type":"programming","setup":"Why did the programmer quit his job?","punchline":"Because he didn't get arrays."}`);
console.log(jokeJS1);

// 1b
p1.innerText = jokeJS1.setup;
// 1c
const {punchline} = jokeJS1;
p2.innerText = punchline;

p2.innerText = jokeJS1.punchline;

// 2
const second = document.querySelector('#second');
const p3 = document.createElement('p');
const p4 = document.createElement('p');
second.append(p3, p4);
// under my initial attempt i started having issues here. it looked the same but something wasn't loading 
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
// 3b
async function quoteFunc(){
    // 3a
        try{
            const quoteJS3 = await axios.get(`https://friends-quotes-api.herokuapp.com/quotes/random`);
    //3c
            p5.innerText = quoteJS3.data.character;
            p6.innerText = quoteJS3.data.quote;
    // 3d
    } catch (err){
        console.log(err);
    }
}
// Just found my other issue I had I forgot QuoteFunc 
quoteFunc(); 

// 4
const fourth = document.querySelector('#fourth');
const p7 = document.createElement('p');
fourth.append(p7);

// 4a
async function tvMazeFunc(){
    try {
        // the link was in the lesson channel
        // https://www.tvmaze.com/api then look for episodeByNum
        const  episodeByNum = await axios.get(`https://api.tvmaze.com/shows/38963/episodebynumber?season=2&number=8`);
        p7.innerText = episodeByNum.data.name;
    } catch (err) {
        console.log(err);
    }
        
}
tvMazeFunc();
// Make sure to review API and how to read them.

// this was confusing most definitely something i need to work on...



// BONUS
// 5
const body = document.querySelector(`body`);
axios.get(`https://pokeapi.co/api/v2/pokemon/snorlax`)
.then(res => {
    const img = document.createElement(`img`);
    img.src = res.data.sprites.front_default;
    body.append(img);
})
.catch (err => {
    console.log(err);
    alert(`You did NOT catch that Pokemon!!!`)
    }
);

pokePic();

// // 6
// const body = document.querySelector(`body`);
// async function bonusSix (){
//     try {
//         const moviePoster = await axios.get(`http://img.omdbapi.com/?apikey=[7a60da0]&`);
//         const poster = document.createElement(`img`);
//         poster.src = moviePoster.data.poster;
//         body.append(poster);
//     }   catch (err) {
//         console.log(err);
//     }
// }
// bonusSix();


// 7a60da0