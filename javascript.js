var p1TotalScore = 0;
var p2TotalScore = 0;

document.getElementById("secondButton").disabled = true;

// play function
async function PlayBtnClick(player) {

    var ran1 = Math.floor(Math.random() * 6) + 1;
    var ran2 = Math.floor(Math.random() * 6) + 1;

    var elements1 = document.getElementById("containerOne");
    var elements2 = document.getElementById("containerTwo");

    var cube1 = document.getElementById("cubeOne");
    var cube2 = document.getElementById("cubeTwo");

    //sound effect 
    var audio = new Audio('sound/sound.mp3');
    audio.play();

    //disavle play button
    document.getElementById("secondButton").disabled = true;
    document.getElementById("fristButton").disabled = true;
  
    //add cube animation 
    elements1.classList.add("one-move");
    elements2.classList.add("two-move");

    cube1.classList.add("one-rotate");
    cube2.classList.add("two-rotate");

    setTimeout(function () {

        //remove cube animation
        elements1.style.animationPlayState = 'paused';
        elements2.style.animationPlayState = 'paused';

        cube1.classList.remove("one-rotate");
        cube2.classList.remove("two-rotate");

        //cube one rotate
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

        //cube two rotate
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

        //score calculation
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

        //win animation
        if(p1TotalScore>=50){
            document.getElementById("winAnim").style.display = 'block';
        }
        else if(p2TotalScore >= 50){
            document.getElementById("winAnim").style.display = 'block';
            document.getElementById("playerName").innerHTML = "Player 2 is";
        }

    }, 970);

}


//refrash function
function refreshPage(){
    window.location.reload();
}