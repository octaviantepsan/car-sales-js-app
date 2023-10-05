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
        document.getElementById("filter").innerHTML += "<option disabled selected id='emptyOption'>Select...</option>";
        for (let i = 0; i < marci.length; i++) {
            document.getElementById("filter").innerHTML += `<option>${marci[i].marca_masina}</option>`;
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
    let $titleBar = document.getElementById("titleBar");
    $titleBar.innerHTML += '<div class="notificationWrapper" id="notificationWrapper"><div class="notification" id="notification"></div></div>';
    if (type === "success") {
        document.getElementById("notification").style.backgroundColor = "green";
    }
    else if (type === "error") {
        document.getElementById("notification").style.backgroundColor = "red";
    }
    document.getElementById("notification").innerHTML = `<p class="notificationText">${text}</p>`;

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
                    $filter.value = "emptyOption";
                    showNotification(`There are no cars listed as ${event.target.value}.`, "error");
                }
            }
        });
    }
    $clearFilters.addEventListener("click", function () {
        $articles.innerHTML = "";
        populateArticles();
        $filter.value = "emptyOption";
        showNotification("Filters were reset" ,"success");
    })
}


populateFilter();
populateArticles();
createEventListeners();


//document.getElementById("clearFilters").style.backgroundColor = "blue"