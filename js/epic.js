const cardContainer = document.querySelector('.card-container'); // select the div with the class card-container

fetch('https://mbo-sd.nl/period3-fetch/games-pc-epic-games') // fetch the data from the api
    .then(response => response.json()) // convert the data to json
    .then(data => handleData(data)) // call the function handleData and pass the data to it

function handleData(data) { // create the function handleData and pass the data to it
    let colHTML = ``; // create a variable called colHTML and assign an empty string to it

    for (let index = 0; index < data.length; index++) { // loop through the data
        const element = data[index]; // create a variable called element and assign the data to it

        // add the data to the variable colHTML
        colHTML += `
        <div class="col">
        <div class="card text-white bg-primary m-5 p-5">
        <img class="card-img-top img-fluid" src=${element.img} alt="Title">
        <div class="card-body">
        <h4 class="card-title">${element.title}</h4>
        <p class="card-text">${element.description}</p>
        <p class="card-text">Release Date: ${element.releaseDate}</p>
        <p class="card-text">Genres: ${element.genres}</p>
        <p class="card-text">Platforms: ${element.platforms}</p>
        <p class="card-text">Price: ${element.price}</p>
        </div>
        </div>
        </div>`
    }

    // add the data to the html
    cardContainer.innerHTML += `
    <div class="row">
    ${colHTML}
    </div>
    `;
}