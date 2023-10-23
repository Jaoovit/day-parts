function charge (){

let changeString = window.document.getElementById("h")
let img = window.document.getElementById("image")
let now = new Date()
let dayHours = now.getHours()

changeString.innerHTML += `It's ${now} hours now`;
    if (dayHours >= 0 && dayHours < 12){
    img.src = 'images/morning.jpg'
    document.body.style.background = '#e2cd9f'
} else if(dayHours >= 12 && dayHours <18){
    img.src = 'images/afternoon.jpg'
    document.body.style.background = '#b9846f'
} else {
    img.src = 'images/night.jpg'
    document.body.style.background = '#515154'
}

}

