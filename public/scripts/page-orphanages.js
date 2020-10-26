const map = L.map('mapid').setView([-9.6610382,-35.7354843], 16);


//create
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [48,68],
    iconAnchor: [29,68],
    popupAnchor: [170,2]
})

function addMarker({id,name,lat,lng}){
    //create popup
const popup = L.popup({
    closeButton: false,
    className: 'man-popup',
    minWidth: 240,
    minHeight: 240
}).setContent(`${name} <a href="/orphanage?id=${id}" > <img src="/images/arrow-white.svg">  </a>`)

//create and add marker
L.marker([lat , lng],{ icon: icon }).addTo(map).bindPopup(popup);
}

const orphanagesSpan = document.querySelectorAll(".orphanages span")

orphanagesSpan.forEach( element => {
    const orphanage = {
        id: element.dataset.id,
        name: element.dataset.name,
        lat: element.dataset.lat,
        lng: element.dataset.lng
    }
    

    addMarker(orphanage)
})