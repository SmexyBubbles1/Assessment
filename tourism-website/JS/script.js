document.addEventListener("DOMContentLoaded", function () {
    console.log("Leaflet script loaded"); // Debugging message

    var map = L.map('map').setView([57.1499, -2.0938], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    L.marker([57.1499, -2.0938]).addTo(map)
        .bindPopup('Aberdeen, Scotland')
        .openPopup();
});