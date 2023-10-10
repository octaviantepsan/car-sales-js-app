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
    if (document.getElementById("filter")) {
        document.getElementById("filter").innerHTML += "<option class='selectedCar' disabled selected id='emptyOption'>Select...</option>";
        for (let i = 0; i < marci.length; i++) {
            document.getElementById("filter").innerHTML += `<option class="selectedCar">${marci[i].marca_masina}</option>`;
        }
    }
}

function populateArticles() {
    if (document.getElementById("articles")) {
        for (let i = 0; i < anunturi.length; i++) {
            document.getElementById("articles").innerHTML +=
                `<div class="anunt"><img class="carImage" src="${anunturi[i].url_imagine}"><p class="carBrand">${anunturi[i].marca_masina}</p></div>`;
        }
    }
}

function showNotification(text, type) {
    let $notificationWrapper = document.getElementById("notificationWrapper");
    let uniqueIdentifier = Math.floor(Math.random() * 99999);
    $notificationWrapper.innerHTML += `<div class="notification" id="notification-${uniqueIdentifier}"><p class="notificationText">${text}</p></div>`;
    if (type === "success") {
        document.getElementById(`notification-${uniqueIdentifier}`).style.backgroundColor = "#357e37";
    }
    else if (type === "error") {
        document.getElementById(`notification-${uniqueIdentifier}`).style.backgroundColor = "#bc4749";
    }
    setTimeout(() => {
        document.getElementById(`notification-${uniqueIdentifier}`).style.display = "none";
    }, 3000);
}

function createEventListeners() {
    let $filter = document.getElementById("filter");
    let $articles = document.getElementById("articles");
    let $clearFilters = document.getElementById("clearFilters");
    if ($filter) {
        $filter.addEventListener("change", function (event) {
            if (event.target.value) {
                $articles.innerHTML = "";
                for (let i = 0; i < anunturi.length; i++) {
                    if (anunturi[i].marca_masina === event.target.value) {
                        $articles.innerHTML +=
                            `<div class="anunt"><img class="carImage" src="${anunturi[i].url_imagine}"><p class="carBrand">${anunturi[i].marca_masina}</p></div>`;
                    }
                }
                if ($articles.innerHTML === "") {
                    populateArticles();
                    showNotification(`There are no cars listed as ${event.target.value}.`, "error");
                    $filter.value = "emptyOption";
                }
            }
        });
    }
    $clearFilters.addEventListener("click", function () {
        $articles.innerHTML = "";
        populateArticles();
        $filter.value = "emptyOption";
        showNotification("Filters were reset", "success");
    })
}

populateFilter();
populateArticles();
createEventListeners();