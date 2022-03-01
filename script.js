let hours = document.getElementById("hours");
let minutes = document.getElementById("mins");
let seconds = document.getElementById("secs");
let am = document.getElementById("am_text");

const timings = document.querySelector(".timings");
const timingsText = document.querySelector(".timings_text");

const btnTime = document.getElementById("btn");

const image = document.getElementById("image")
const text1_text = document.getElementById("text1_text")
const text2_text = document.getElementById("text2_text")

const div21 = document.getElementById("div21");
const div22 = document.getElementById("div22");
const div23 = document.getElementById("div23");
const div24 = document.getElementById("div24");

var moring = document.getElementById("moring");
var lunch = document.getElementById("lunch");
var nap = document.getElementById("nap");
var night = document.getElementById("night");


function clock() {

    let time = new Date();
    let hrs = time.getHours();
    let mins = time.getMinutes();
    let secs = time.getSeconds();
    let am_pm = "AM";

//     if (hrs == 0) {
//         hrs = 12;
//     }
//     if (hrs > 12) {
//         hrs = hrs - 12;
//         am_pm = "PM";
//     }
//     if (hrs < 10) {
//         hrs = "0" + hrs;
//     }
//        
    am_pm = (hrs >= 12) ? "PM" : "AM";
    hrs = (hrs == 0) ? 12 : ((hrs > 12) ? hrs - 12 : hrs);
    hrs = (hrs < 10) ? `0${hrs}` : hrs;
    mins = (mins < 10) ? `0${mins}` : mins;
    secs = (secs < 10) ? `0${secs}` : secs;

    hours.innerHTML = hrs;
    minutes.innerHTML = mins;
    seconds.innerHTML = secs;
    am.innerHTML = am_pm;

}
setInterval(clock, 1000);

function btnTimings() {
    timings.classList.toggle("active");

    var value = moring.options[moring.selectedIndex].text;
    div21.innerHTML = "Wake up Time : " + value;

    var value = lunch.options[lunch.selectedIndex].text;
    div22.innerHTML = "Lunch Time : " + value;

    var value = nap.options[nap.selectedIndex].text;
    div23.innerHTML = "Nap Time : " + value;

    var value = night.options[night.selectedIndex].text;
    div24.innerHTML = "Night Time : " + value;

    // btnTime.classList.toggle("active");
    // timingsText.classList.toggle("active");

}

let btn = document.getElementById("btn");

btn.addEventListener("click", btnTimings);
btn.addEventListener("dblclick", function () {
    div21.innerHTML = "";
    div22.innerHTML = "";
    div23.innerHTML = "";
    div24.innerHTML = "";
});

function setTime() {

    var moring = document.getElementById('moring').value;
    var lunch = document.getElementById("lunch").value;
    var nap = document.getElementById("nap").value;
    var night = document.getElementById("night").value;
    // console.log(moring);
    // console.log(lunch);
    // console.log(nap);
    // console.log(night);
    const hours = new Date().getHours();


    if (hours == moring) {
        image.style.background = "url(./Assets/Group_5183-1.svg)  center no-repeat";
        text1_text.innerHTML = "Grab your morning coffee and get ready for your day!";
        text2_text.innerHTML = "Good Morning!";
    }

    if (hours == lunch) {
        image.style.background = "url(./Assets/Group_5183.svg) center no-repeat";
        text1_text.innerHTML = "Let's Have Some Lunch !!";
        text2_text.innerHTML = "Good Afternoon!";
    }

    if (hours == nap) {
        image.style.background = "url(./Assets/Group_5183.svg)  center no-repeat";
        text1_text.innerHTML = "Let's Have Some Tea !!";
        text2_text.innerHTML = "Good Evening!";
    }

    if (hours == night) {
        image.style.background = "url(./Assets/Group_5194.svg)  center no-repeat";
        text1_text.innerHTML = "Sweet Dreams !!";
        text2_text.innerHTML = "Good Night !!";
    }
};


