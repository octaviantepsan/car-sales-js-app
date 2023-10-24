let currentListingsOnPage = [];

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
            let uniqueIdentifier = Math.floor(Math.random() * 99999);
            document.getElementById("articles").innerHTML +=
                `<div class="anunt" id="anunt-${uniqueIdentifier}"><span class="objectId" id="objectId">${anunturi[i].objectId}</span><img class="carImage" src="${anunturi[i].promo_image}"><p class="carBrand">${anunturi[i].marca_masina}</p></div>`;
            currentListingsOnPage.push(`anunt-${uniqueIdentifier}`);    
        }
    }
}

function showNotification(text, type) {
    let $notificationWrapper = document.getElementById("notificationWrapper");
    let uniqueIdentifier = Math.floor(Math.random() * 99999);
    $notificationWrapper.innerHTML += `<div class="notification" id="notification-${uniqueIdentifier}"><p class="notificationText">${text}</p></div>`;
    if (type === "success") {
        document.getElementById(`notification-${uniqueIdentifier}`).style.backgroundColor = "#357e37";
        document.getElementById(`notification-${uniqueIdentifier}`).style.border = "1px solid darkgreen";
    }
    else if (type === "error") {
        document.getElementById(`notification-${uniqueIdentifier}`).style.backgroundColor = "#bc4749";
        document.getElementById(`notification-${uniqueIdentifier}`).style.border = "1px solid #aa3537";
        
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
                            `<div class="anunt"><img class="carImage" src="${anunturi[i].promo_image}"><p class="carBrand">${anunturi[i].marca_masina}</p></div>`;
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
    });
    for(let i = 0; i < currentListingsOnPage.length; i++) {
        let $anunt = document.getElementById(currentListingsOnPage[i]);
        let anuntObjectId = $anunt.querySelector("#objectId").innerHTML; //cauta in parintele $anunt, copilul cu id-ul "objectId"
        let anuntObject = anunturi.find(anunt => anunt.objectId == anuntObjectId); //gaseste "anunt" care indeplineste conditia anunt.objectId == anuntObjectId
        
        $anunt.addEventListener("click", function() {
            let stringifiedObject = JSON.stringify(anuntObject);
            window.sessionStorage.setItem("listingData", stringifiedObject);
            window.location.href = redirectUrls.listing_page;
        });
    }
}

populateFilter();
populateArticles();
createEventListeners();