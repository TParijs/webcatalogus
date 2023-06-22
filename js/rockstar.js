const rockstarInfo = document.querySelector('.rockstarInfo'); // select the div with the class rockstarInfo

fetch('https://mbo-sd.nl/period3-fetch/games-console-rockstar') // fetch the data from the api
    .then(myData => myData.json()) // convert the data to json
    .then(data => showBody(data)) // call the function showBody and pass the data to it

function showBody(data) { // create the function showBody and pass the data to it
    for (let i = 0; i < data.length; i++) { // loop through the data
        const rockstar = data[i]; // create a variable called rockstar and assign the data to it

        // add the data to the html
        rockstarInfo.innerHTML += `
        <div class="card mx-4 mb-5 col-md p-1 bg-dark-purple text-light">
        <img class="img-fluid" src="${rockstar.img}">
         <h2> ${rockstar.title}</h2> <br>
         <p> ${rockstar.description} </p>
         <p> the first release of this game was on: ${rockstar.firstGame} </p>
         <p class="text-danger"> genres: ${rockstar.genres} </p>
         <p class="text-danger"> playercount: ${rockstar.playerCount} </p>
         <p class="text-danger"> total sales: ${rockstar.sales} </p>
         </div>`;
    };
};


