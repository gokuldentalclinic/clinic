for(var i=0;i<document.querySelectorAll(".drum").length,i++){

document.querySelectorAll(".drum")[i].addEventListner("click",function(){

var mpow = this.innerHTML;
  makeSound(mpow);
  buttonAnimation(mpow);
});
}



document.addEventListner("keypress",function(event){
  makeSound(event.key);
    buttonAnimation(event.key);
});

function makesound(key){


switch(mpow){
  case "w":
    var tom1= new audio("sounds/tom-1.mp3");
    tom1.play();
    break;

    case "a":
      var tom2= new audio("sounds/tom-2.mp3");
      tom2.play();
      break;

      case "s":
        var tom3= new audio("sounds/tom-3.mp3");
        tom3.play();
        break;

        case "d":
          var tom4= new audio("sounds/tom-4.mp3");
          tom4.play();
          break;

          case "j":
            var snare= new audio("sounds/snare.mp3");
            snare.play();
            break;

            case "k":
              var crash= new audio("sounds/crash.mp3");
              crash.play();
              break;

              case "l":
                var kick= new audio("sounds/kick.mp3");
                kick.play();
                break;
  default:
}


}

function buttonAnimation(key){

  var actbt = document.querySelector("."+ key);
  actbt.classList.add("pressed");
  setTimeout(function()
{
  actbt.classList.remove("pressed");
},100);
}
