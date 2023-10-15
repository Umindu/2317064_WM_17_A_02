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
    var elements = document.getElementsByClassName("face");
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.add("anim");
    }

    console.log(player)
}