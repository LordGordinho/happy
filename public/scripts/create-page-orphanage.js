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
let marker;

//create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    marker && map.removeLayer(marker)

    marker = L.marker([lat , lng] , { icon }).addTo(map)
})

// adicionar o campo de fotos

function addPhotoField(){
    // #images pegar o cotainer de fotos
    const container = document.querySelector('#images')

    //pegar o container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')

    //realizar o clore da ultima imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

    //limpar o campo
    const input = newFieldContainer.children[0]

    if(input.value == ""){
        return
    }

    input.value = ""

    //adicionar o clone ao container de #image
    container.appendChild(newFieldContainer)

}

function deleteField(event){
    
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length <= 1){
        span.parentNode.children[0].value = ""
        return
    }

    span.parentNode.remove()


}


//seleção sim ou não

function trocarSelecao(event){
    // pegar o botão clicado
    document.querySelectorAll('.button-select button').forEach(function(button){
        button.classList.remove('active')
    })
    //verificar sim ou não
    const button = event.currentTarget
    button.classList.add('active')

    //atualizat o meu input 
    const input = document.querySelector('[name="open_on_weekends"]')

    input.value = button.dataset.value

}