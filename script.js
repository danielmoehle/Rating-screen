function displayRadioValue() {
    var ele = document.getElementsByName('number');

    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked)
            document.getElementById("result").innerHTML
            = "You have selected " + ele[i].value + " out of 5";
    }
}

function validateForm() {
    var radios = document.getElementsByClassName("rating-numbers");
    var formValid = false;

    var i = 0;
    while(!formValid && i < radios.length) {
        if(radios[i].checked) formValid = true;
        i++;
    } 
    if (!formValid) alert("You must select a rating to submit");
    return formValid
}

var submit = document.getElementById("submit")
var innerbox1 = document.getElementById("innerbox1")
var innerbox2 = document.getElementById("innerbox2")

submit.addEventListener("click",(event) => {
    innerbox1.style.display = "none";
    innerbox2.style.display = "grid";
    displayRadioValue();
    validateForm();

})

// function displayRadioValue() {
//     var ele = document.getElementById("number");

//     for (i = 0; i < ele.length; i++) {
//         if (ele[i].checked)
//             document.getElementById('result').innerHTML = "You have selected " + ele[i].value + " out of 5"
//     }
// }

// var submit = document.getElementById("submit") 
// var innerbox1 = document.getElementById("innerbox1")
// var innerbox2 = document.getElementById("innerbox2")

// submit.addEventListener("click",(event) => {
//     innerbox1.style.display = "none";
//     innerbox2.style.display = "grid";
//     displayRadioValue();
// })






