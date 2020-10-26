const option = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}
const spanLat = document.querySelector('span[data-lat]')
const spanLng = document.querySelector('span[data-lng]')

const map = L.map('mapid', option).setView([spanLat.dataset.lat, spanLng.dataset.lng], 16);


//create
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [48,68],
    iconAnchor: [29,68],
    popupAnchor: [170,2]
})



//create and add marker
L.marker([spanLat.dataset.lat, spanLng.dataset.lng],{ icon: icon }).addTo(map);


function selectImage(event){
    var button = event.currentTarget
    
    var buttons = document.querySelectorAll(".images button")

    buttons.forEach((button) => {
        button.classList.remove("active")
    })

    var image = button.children[0]
    var imageContainer = document.querySelector(".orphanage-details > img")

    imageContainer.src = image.src

    button.classList.add("active")



}