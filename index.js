var buttons = document.querySelectorAll(".drum");


for(i=0;i<buttons.length;i++){

    buttons[i].addEventListener("click",function(){

        makeSounds(this.innerHTML);
        buttonAnimation(this.innerHTML);

    });
}

document.addEventListener("keydown",function(event){
    console.log(event);
    makeSounds(event.key);
    buttonAnimation(event.key);
});

function buttonAnimation(currentKey){

    var activeButton =  document.querySelector("."+currentKey);

    activeButton.classList.add("pressed");
    console.log("button animation");
    //document.querySelector("."+currentKey).classList.remove("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);

}

function makeSounds(key) {

    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;

        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
    
        default:console.log(key);
    }
    
}




