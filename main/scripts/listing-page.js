function getData() {
    let listingDataAsString = window.sessionStorage.getItem("listingData");
    let listingData = JSON.parse(listingDataAsString);
    console.log(listingData);
}

getData();