var marker;
$(document).ready(function () {
    var arrayLength = data.length;
    for (var i = 0; i < arrayLength; i++) {
        //get users geolocation and set map center
        /*
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            document.getElementById("errorDisplay").innerHTML = "Geolocation is not supported by this browser.";
        }
        function showPosition(position) {
            mymap.setView(new L.LatLng(position.coords.latitude, position.coords.longitude), 9);
        }
        */

        //log array data for testing
        //console.log(data[1]);

        //set marker icon
        var hazardIcon = L.icon({
            iconUrl: 'images/marker-16.png',

            iconSize: [32, 32],

        });
        //set rating image dependant on rating
        var ratingImage;
        switch (data[i]["RatingValue"]) {
            case 0:
                ratingImage = "<img src='images/rating_0.jpg' alt='FSA Rating' height='100' width='200'>";
                break;
            case 1:
                ratingImage = "<img src='images/rating_1.jpg' alt='FSA Rating' height='100' width='200'>";
                break;
            case 2:
                ratingImage = "<img src='images/rating_2.jpg' alt='FSA Rating' height='100' width='200'>";
                break;
        }


        //set markers for each item in array using its lat/lng
        if (data[i]["Latitude"] !== null) {
            var lat = data[i]["Latitude"];
            var lng = data[i]["Longitude"];

            var marker = L.marker([lat, lng], { icon: hazardIcon }).addTo(mymap);
            marker.bindPopup(
                "<b>" + data[i]["BusinessName"] +
                "</b><br>" + data[i]["AddressLine2"] + "<br>" + data[i]["AddressLine3"] + "<br>" + data[i]["AddressLine4"] + "<br><br>" +
                ratingImage + "<br>Rating Date: " +
                data[i]["RatingDate"] + "<br>New Rating Pending?: " + data[i]["NewRatingPending"]+ "<br><br>" + "<a href='https://ratings.food.gov.uk/business/" + data[i]["FHRSID"] + "' target='_blank'>More Info</a>").openPopup();
        }

    }


});