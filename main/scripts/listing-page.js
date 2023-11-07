let listingDataAsString = window.sessionStorage.getItem("listingData");
let listingData = JSON.parse(listingDataAsString);
let slideIndex = 1;

function showInformation() {
    let imageCounter = 1;
    let i;

    for (i = 0; i < listingData.anunt_imagini.length; i++) {
        document.getElementById("slideshow-container").innerHTML += `<div class="mySlides fade"><div class="numbertext">${imageCounter} / ${listingData.anunt_imagini.length}</div><img class="imageOfSlide" src="${listingData.anunt_imagini[i]}"></div>`;
        imageCounter++;
    }

    imageCounter = 1;
    document.getElementById("slideshow-container").innerHTML += "<div class='imageDots' id='imageDots'></div>"

    for (i = 0; i < listingData.anunt_imagini.length; i++) {
        document.getElementById("imageDots").innerHTML += `<span class="dot" onclick="currentSlide(${imageCounter})"></span>`;
        imageCounter++;
    }

    document.getElementById("anuntTitluText").innerHTML = listingData.anunt_titlu;
    document.getElementById("anuntDescriereText").innerHTML = listingData.anunt_descriere;

    document.getElementById("location").innerHTML = listingData.location;
    document.getElementById("distanceText").innerHTML = listingData.fakeDistanceFromUser;
    document.getElementById("lastUpdateText").innerHTML = listingData.lastUpdatedDate;

    document.getElementById("price").innerHTML = listingData.price;
    if(listingData.negotiable == "false") {
        document.getElementById("anuntPriceText").style.marginLeft = "64px";
        document.getElementById("negotiable").innerHTML = "Not Negotiable";
    }
    else {
        document.getElementById("negotiable").innerHTML = "Negotiable";
    }
    
    document.getElementById("Brand").innerHTML += `<span class="listingInfo">${listingData.marca_masina}</span>`;
    document.getElementById("Displacement").innerHTML += `<span class="listingInfo">${listingData.engine_displacement}</span>`;
    document.getElementById("Year").innerHTML += `<span class="listingInfo">${listingData.year}</span>`;
    document.getElementById("Power").innerHTML += `<span class="listingInfo">${listingData.power}</span>`;
    document.getElementById("Mileage").innerHTML += `<span class="listingInfo">${listingData.km}</span>`;
    document.getElementById("Phone number").innerHTML += `<span class="listingInfo">${listingData.phone_number}</span>`;
}

function showSlides(n) {
    let i;
    let $slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n > $slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = $slides.length;
    }
    for (i = 0; i < $slides.length; i++) {
        $slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    $slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function createEventListeners() {
    let $return = document.getElementById("returnButton");

    $return.addEventListener("click", function () {
        window.location.href = redirectUrls.index;
    })
}

function showHistory() {
    $history = document.getElementById("page_history");
    $history.innerHTML += `<span class="history_spacing">/</span><a class="history_link" href="listing-page.html">${listingData.anunt_titlu}</a>`;
}

if (listingData) {
    createEventListeners();
    showInformation();
    showSlides(slideIndex);
    showHistory()
}
else {
    window.location.href = redirectUrls.error_page;
}