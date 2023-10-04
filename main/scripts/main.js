const anunturi = [
    {
        marca_masina: "Dacia",
        url_imagine: "../main/images/Dacia.jpg"
    },
    {
        marca_masina: "Dacia",
        url_imagine: "../main/images/BMW.jpg"
    },
    {
        marca_masina: "Dacia",
        url_imagine: "../main/images/Mitsubishi1.jpg"
    },
    {
        marca_masina: "Dacia",
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
    },
    {
        marca_masina: "BMW",
        url_imagine: "../main/images/BMW2.jpg"
    },
    {
        marca_masina: "Honda",
        url_imagine: "../main/images/Honda.jpg"
    },
];

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
    },
    {
        marca_masina: "Honda",
    },
    {
        marca_masina: "Nissan",
    }
];

function populateFilter() {
    if (document.getElementById("filter") !== null) {
        document.getElementById("filter").innerHTML += "<option disabled selected></option>";
        for (let i = 0; i < marci.length; i++) {
            document.getElementById("filter").innerHTML += `<option>${marci[i].marca_masina}</option>`;
        }
    }
}

function populateArticles() {
    if (document.getElementById("articles") !== null) {
        for (let i = 0; i < anunturi.length; i++) {
            document.getElementById("articles").innerHTML +=
                `<div class="anunt"><img class="carImage" src="${anunturi[i].url_imagine}"><p class="carBrand">${anunturi[i].marca_masina}</p></div>`;
        }
    }
}

function createEventListeners() {
    let $filter = document.getElementById("filter");
    let $articles = document.getElementById("articles");
    let $clearFilters = document.getElementById("clearFilters");
    if ($filter !== null) {
        $filter.addEventListener("change", function (event) {
            if (event.target.value !== null) {
                $articles.innerHTML = "";
                for (let i = 0; i < anunturi.length; i++) {
                    if (anunturi[i].marca_masina === event.target.value) {
                        $articles.innerHTML +=
                            `<div class="anunt"><img class="carImage" src="${anunturi[i].url_imagine}"><p class="carBrand">${anunturi[i].marca_masina}</p></div>`;
                    }
                    console.log($articles.innerHTML);
                }
                if ($articles.innerHTML === "") {
                    alert(`There are no cars listed as ${event.target.value}.`);
                    populateArticles();
                    event.target.value = "";
                }
            }
        });
    }
    $clearFilters.addEventListener("click", function(event) {
        $articles.innerHTML = "";
        populateArticles();
        event.target.value = "";
        alert("Filters were reset");
    })
}


populateFilter();
populateArticles();
createEventListeners();
