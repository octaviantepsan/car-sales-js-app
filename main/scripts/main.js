const anunturi = [
    {
        marca_masina: "Dacia",
        url_imagine: "../main/images/Dacia.jpg"
    },
    {
        marca_masina: "BMW",
        url_imagine: "../main/images/BMW.jpg"
    },
    {
        marca_masina: "Mitsubishi",
        url_imagine: "../main/images/Mitsubishi1.jpg"
    },
    {
        marca_masina: "Renault",
        url_imagine: "../main/images/Renault.jpg"
    },
    {
        marca_masina: "Lamborghini",
        url_imagine: "../main/images/Lamborghini.jpg"
    },
    {
        marca_masina: "Ford",
        url_imagine: "../main/images/Ford.jpg"
    },
    {
        marca_masina: "Honda",
        url_imagine: "../main/images/Honda.jpg"
    }
]

const marci = [
    {
        marca_masina: "Dacia",
    },
    {
        marca_masina: "BMW",
    },
    {
        marca_masina: "Mitsubishi",
    },
    {
        marca_masina: "Renault",
    },
    {
        marca_masina: "Lamborghini",
    },
    {
        marca_masina: "Ford",
    }
]

// < div class="articles" id = "articles" ></div >


// <div class="anunt" id="anunt">
//     <img class="carImage" src="../main/images/Dacia.jpg">
//         <p class="carBrand"></p>
// </div>


function populateFilter() {
    if (document.getElementById("filter") !== null) {
        for (let i = 0; i < marci.length; i++) {
            document.getElementById("filter").innerHTML += `<option>${marci[i].marca_masina}</option>`;
        }
    }
}
populateFilter();

function populateArticles() {
    if (document.getElementById("articles") !== null) {
        for (let i = 0; i < anunturi.length; i++) {
            document.getElementById("articles").innerHTML += `<div class="anunt"><img class="carImage" src="${anunturi[i].url_imagine}"><p class="carBrand">${anunturi[i].marca_masina}</p></div>`;
        }
    }
}
populateArticles();
