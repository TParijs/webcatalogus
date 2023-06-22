const activisionInfo = document.querySelector('.activisionInfo') // select the div with the class activisionInfo

fetch('https://mbo-sd.nl/period3-fetch/games-console-activision-blizzard') // fetch the data from the api
    .then(myData => myData.json()) // convert the data to json
    .then(data => showBodyTwo(data)) // call the function showBodyTwo and pass the data to it

function showBodyTwo(data) { // create the function showBodyTwo and pass the data to it
    for (let i = 0; i < data.length; i++) { // loop through the data
        const activision = data[i]; // create a variable called activision and assign the data to it
    
        // add the data to the html
        activisionInfo.innerHTML += `
        <div class='card mx-4 mb-5 col-md p-1 bg-dark-purple text-light'> 
        <img class="img-fluid" src="${activision.img}">
        <h2> ${activision.title}</h2> <br>
        <p> ${activision.description} </p>
        <p> the first release of this game was on: ${activision.firstGame} </p>
        <p class="text-danger"> genres: ${activision.genres} </p>
        <p class="text-danger"> playercount: ${activision.playerCount} </p>
        <p class="text-danger"> total sales: ${activision.sales} </p>
        </div>`;
    };
};