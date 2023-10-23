let now = new Date()
let dayHours = now.getHours()

    if (dayHours <= 12){
    console.log('Morning')
} else if(dayHours <=18){
    console.log ('Afternoon')
} else {
    console.log ('Night')
}