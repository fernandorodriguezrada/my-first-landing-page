const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

var senseSpeed = 5;
var previousScroll = 0;
$(window).scroll(function (event) {
  var scroller = $(this).scrollTop();
  if (scroller - senseSpeed > previousScroll) {
    $("div.footer-img").filter(":not(:animated)").slideUp();
  } else if (scroller + senseSpeed < previousScroll) {
    $("div.footer-img").filter(":not(:animated)").slideDown();
  }
  previousScroll = scroller;
});

const card = document.getElementsByClassId(".card");
const cardContent = document.getElementsByClassName(".card-content");
let flipped = false;

card.addEventListener("click", () => {
  if (!flipped) {
    cardContent.style.transform = "rotateY(180deg)";
  } else {
    cardContent.style.transform = "rotateY(0deg)";
  }
  flipped = !flipped;
});
