const appStart = function(){

    // const mymap = L.map('mapid').setView([51.505, -0.09], 13);
    const mymap = L.map('mapid');

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoiZGF2ZXktZWxsaXMiLCJhIjoiY2plYmQydWo1MWVrdjJ5bzNmdmtiZXhhaiJ9.lNuXnwIwUmmdz82hHE-0Rg'
    }).addTo(mymap);

    // const marker = L.marker([51.5, -0.09]).addTo(mymap);
    // marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();

    const newMarkerIcon = L.icon({
        iconUrl: 'marker.png',
    
        iconSize:     [30, 60], // size of the icon
        // iconAnchor:   [50, 1], // point of the icon which will correspond to marker's location
        // popupAnchor:  [15, -20] // point from which the popup should open relative to the iconAnchor
    });

    mymap.locate({setView: true, maxZoom: 16});

    function onLocationFound(e) {
        const radius = e.accuracy / 2;
    
        L.marker(e.latlng, {icon: newMarkerIcon}).addTo(mymap)
            .bindPopup("You are here!").openPopup();
    
        L.circle(e.latlng, radius).addTo(mymap);
    }
    
    mymap.on('locationfound', onLocationFound);


}


document.addEventListener("DOMContentLoaded", appStart);