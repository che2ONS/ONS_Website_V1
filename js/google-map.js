
var google;

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    // Coordinates for Noida, Sector 22
    var myLatlng = new google.maps.LatLng(28.5912, 77.3237);

    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 15,

        // The latitude and longitude to center the map (always required)
        center: myLatlng,

        // How you would like to style the map.
        scrollwheel: false,
        mapTypeControl: true,
        streetViewControl: true,
        styles: [
            {
                "featureType": "administrative",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#444444"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#f2f2f2"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 45
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#c5a02e"
                    },
                    {
                        "visibility": "on"
                    }
                ]
            }
        ]
    };

    // Get the HTML DOM element that will contain your map
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Add a marker for Open Network Solutions
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'Open Network Solutions',
        icon: 'images/loc.png'
    });

    // Add info window
    var infowindow = new google.maps.InfoWindow({
        content: '<div class="map-info-window"><strong>Open Network Solutions</strong><br>B-56, Sector 22<br>Noida, Uttar Pradesh</div>'
    });

    // Open info window on marker click
    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker);
    });

    // Open info window by default
    infowindow.open(map, marker);
}
google.maps.event.addDomListener(window, 'load', init);