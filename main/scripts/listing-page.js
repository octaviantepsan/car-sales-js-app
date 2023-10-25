let slideIndex = 1;

function getData() {
    let listingDataAsString = window.sessionStorage.getItem("listingData");
    let listingData = JSON.parse(listingDataAsString);
    console.log(listingData);
}

function showSlides(n) {
    let i;
    let $slides = document.getElementsByClassName("mySlides");

    if (n > $slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = $slides.length;
    }
    for (i = 0; i < $slides.length; i++) {
        $slides[i].style.display = "none";
    }

    $slides[slideIndex - 1].style.display = "block";
}

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showInformation() {
    let listingDataAsString = window.sessionStorage.getItem("listingData");
    let listingData = JSON.parse(listingDataAsString);
    let imageIdentifier = 1;

    for(let i = 0; i < listingData.anunt_imagini.length; i++) {
        document.getElementById(`imageOfSlide${imageIdentifier}`).src = listingData.anunt_imagini[i];
        imageIdentifier++;
    }
    
    document.getElementById("anuntTitluText").innerHTML = listingData.anunt_titlu;
    document.getElementById("anuntDescriereText").innerHTML = listingData.anunt_descriere;

    document.getElementById("Brand").innerHTML += `<span class="listingInfo">${listingData.marca_masina}</span>`;                               
    document.getElementById("Displacement").innerHTML += `<span class="listingInfo">${listingData.engine_displacement}</span>`;
    document.getElementById("Year").innerHTML += `<span class="listingInfo">${listingData.year}</span>`;
    document.getElementById("Power").innerHTML += `<span class="listingInfo">${listingData.power}</span>`;
    document.getElementById("Mileage").innerHTML += `<span class="listingInfo">${listingData.km}</span>`;
    document.getElementById("Phone number").innerHTML += `<span class="listingInfo">${listingData.phone_number}</span>`;
}

function createEventListeners() {
    let $return = document.getElementById("returnButton");

    $return.addEventListener("click", function(){
        window.location.href = redirectUrls.index;
    })
}

createEventListeners();
showSlides(slideIndex);
showInformation();
getData();