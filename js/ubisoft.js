
const ubisoftInfo = document.querySelector('.ubisoftInfo') // select the div with the class ubisoftInfo

fetch('https://mbo-sd.nl/period3-fetch/games-console-ubisoft') // fetch the data from the api
    .then(myData => myData.json()) // convert the data to json
    .then(data => showBodyThree(data)) // call the function showBodyThree and pass the data to it

function showBodyThree(data) { // create the function showBodyThree and pass the data to it
    for (let i = 0; i < data.length; i++) { // loop through the data
        const ubisoft = data[i]; // create a variable called ubisoft and assign the data to it
     
        // add the data to the html
        ubisoftInfo.innerHTML += `
        <div class='card mx-4 mb-5 col-md p-1 bg-dark-purple text-light'>
        <img class="img-fluid" src="${ubisoft.img}">
        <h2> ${ubisoft.title}</h2> <br>
        <p> ${ubisoft.description} </p>
        <p> the first release of this game was on: ${ubisoft.firstGame} </p>
        <p class="text-danger"> genres: ${ubisoft.genres} </p>
        <p class="text-danger"> playercount: ${ubisoft.playerCount} </p>
        <p class="text-danger"> total sales: ${ubisoft.sales} </p>
        </div>
        `
    };
};