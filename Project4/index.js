alert("Hello 👋👋 ! Welcome You All 😀😉😊")
// detecting button Press
var NoOfDrums=document.querySelectorAll(".key").length;

for (var i=0 ; i<NoOfDrums;i++){

    document.querySelectorAll(".key")[i].addEventListener("click",function(){
        

        var buttonInnerHtml=this.innerHTML;
        makeSound(buttonInnerHtml)
        
    }
);
}

// detect keyboard press
document.addEventListener("keypress", function(event){
    makeSound(event.key)
});

//main function 
function makeSound(key){
    switch(key) {
        case "w":
            var HighTom=new Audio('sounds/1.wav');
            HighTom.play();
            break;
        
        case "a":
            var LowTom=new Audio('sounds/2.mp3');
            LowTom.play();
            break;

        case "s":
            var MidTom=new Audio('sounds/3.wav');
            MidTom.play();
            break;

        case "d":
            var FloorTom=new Audio('sounds/4.wav');
            FloorTom.play();
            break;

        case "j":
            var snareDrum=new Audio('sounds/5.wav');
            snareDrum.play();
            break;

        case "k":
            var Cymbal=new Audio('sounds/6.wav');
            Cymbal.play();
            break;

        case "l":
            var BaseDrum=new Audio('sounds/7.wav');
            BaseDrum.play();
            break;

        default:
            console.log(innerHTML)
    }
}