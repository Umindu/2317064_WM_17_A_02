// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById('fristButton').addEventListener('click', function() {

//         console.log("@@")
//         var elements = document.getElementsByClassName("face");
//         for (var i = 0; i < elements.length; i++) {
//             elements[i].classList.add("anim");
//         }

//     });
// });

var p1TotalScore = 0;
var p2TotalScore = 0;

document.getElementById("secondButton").disabled = true;

async function PlayBtnClick(player) {
    var audio = new Audio('image/sound.mp3');
    audio.play();
    
    var ran1 = Math.floor(Math.random() * 6) + 1;
    var ran2 = Math.floor(Math.random() * 6) + 1;

    var elements1 = document.getElementById("containerOne");
    var elements2 = document.getElementById("containerTwo");

    var cube1 = document.getElementById("cubeOne");
    var cube2 = document.getElementById("cubeTwo");

    if(player === 'one'){
        document.getElementById("fristButton").disabled = true;
        document.getElementById("secondButton").disabled = true;
    }
    else{
        document.getElementById("secondButton").disabled = true;
        document.getElementById("fristButton").disabled = true;
    }

    elements1.classList.add("anim");
    elements2.classList.add("anim4");

    cube1.classList.add("anim2");
    cube2.classList.add("anim3");

    setTimeout(function () {

        elements1.style.animationPlayState = 'paused';
        elements2.style.animationPlayState = 'paused';

        cube1.classList.remove("anim2");
        cube2.classList.remove("anim3");

        switch (ran1) {
            case 1:
                cube1.style.transform = 'rotateX(0deg) rotateY(0deg)';
                break;
            case 2:
                cube1.style.transform = 'rotateX(180deg) rotateY(0deg)';
                break;
            case 3:
                cube1.style.transform = 'rotateX(270deg) rotateY(0deg)';
                break;
            case 4:
                cube1.style.transform = 'rotateX(90deg) rotateY(0deg)';
                break;
            case 5:
                cube1.style.transform = 'rotateX(180deg) rotateY(90deg)';
                break;
            case 6:
                cube1.style.transform = 'rotateX(180deg) rotateY(270deg)';
                break;
        }

        switch (ran2) {
            case 1:
                cube2.style.transform = 'rotateX(0deg) rotateY(0deg)';
                break;
            case 2:
                cube2.style.transform = 'rotateX(180deg) rotateY(0deg)';
                break;
            case 3:
                cube2.style.transform = 'rotateX(270deg) rotateY(0deg)';
                break;
            case 4:
                cube2.style.transform = 'rotateX(90deg) rotateY(0deg)';
                break;
            case 5:
                cube2.style.transform = 'rotateX(180deg) rotateY(90deg)';
                break;
            case 6:
                cube2.style.transform = 'rotateX(180deg) rotateY(270deg)';
                break;
        }

        if(player === 'one'){
            p1TotalScore = p1TotalScore+ran1+ran2
            document.getElementById("scoreOne").innerHTML = "Score : "+(p1TotalScore)+"/50";
            document.getElementById("secondButton").disabled = false;
        }
        else{
            p2TotalScore = p2TotalScore+ran1+ran2
            document.getElementById("scoreTwo").innerHTML = "Score : "+(p2TotalScore)+"/50";
            document.getElementById("fristButton").disabled = false;
        }

        if(p1TotalScore>=50){
            document.getElementById("winAnim").style.display = 'block';
        }
        else if(p2TotalScore >= 50){
            document.getElementById("winAnim").style.display = 'block';
            document.getElementById("playerName").innerHTML = "Player 2 is";
        }

    }, 970);

}


function refreshPage(){
    window.location.reload();
}