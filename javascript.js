// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById('fristButton').addEventListener('click', function() {

//         console.log("@@")
//         var elements = document.getElementsByClassName("face");
//         for (var i = 0; i < elements.length; i++) {
//             elements[i].classList.add("anim");
//         }

//     });
// });


function PlayBtnClick(player) {
    console.log("###");

    var elements1 = document.getElementsByClassName("container-one");
    var elements2 = document.getElementsByClassName("container-two");


    for (var i = 0; i < elements1.length; i++) {
        elements1[i].classList.add("anim");
    }

    for (var i = 0; i < elements2.length; i++) {
        elements2[i].classList.add("anim4");
    }
}