let mainTitle = document.getElementById("mainTitle")

let carDevelop = document.getElementById("carDevelop");
let carPrice = document.getElementById("carPrice");
let members = document.getElementById("members");
let membersPrice = document.getElementById("membersPrice");
let directorPrice = document.getElementById("directorPrice");
let bughalterPrice = document.getElementById("bughalterPrice");



function calculate(){
    let money = eval((carDevelop.value*carPrice.value-members.value*membersPrice.value-directorPrice.value-bughalterPrice.value)*12)
    console.log(money)
    if(money > 1000000){
        mainTitle.innerHTML = 'Отлично, через год у вас будет новый завод!'
    }
    else{
        mainTitle.innerHTML = 'К сожелению, придется усерднее работать на старом!'
    }
}

function clean(){
    mainTitle.innerHTML = 'Директор построит новый завод?'
    // document.getElementsByTagName('input') держит все теги input
    for(let input of document.getElementsByTagName('input')){
        input.value = ''
    }

    // carDevelop.value = ""
    // carPrice.value = ""
    // members.value = ""
    // membersPrice.value = ""
    // directorPrice.value = ""
    // bughalterPrice.value = ""
}