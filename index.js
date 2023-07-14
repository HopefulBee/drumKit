//Detecting sounds by mouse click

var drumButtons = document.querySelectorAll(".drum").length;
for ( var i = 0;  i< drumButtons; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function(){

        var buttonInnerHTML = this.innerHTML;
        
        makeSound(buttonInnerHTML);
    });
}


document.addEventListener("keydown", function(event){
    makeSound(event.key);
});



//Detecting sounds by key press
function makeSound(key) {
    switch (key) {
        case "w":
                this.style.color = "blue";
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
            break;
        
        case "a":
                this.style.color = "blue";
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
            break;

        case "s":
                this.style.color = "blue";
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
            break;

        case "d":
                this.style.color = "blue";
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
            break;

        case "j":
                this.style.color = "blue";
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
            break;

        case "k":
                this.style.color = "blue";
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
            break;

        case "l":
                this.style.color = "blue";
                var kick = new Audio("sounds/kick-bass.mp3");
                kick.play();
            break;

        default: console.log(buttonInnerHTML);
    }
}