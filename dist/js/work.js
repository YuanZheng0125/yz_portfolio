// // Slideshow
// const display_left = document.querySelector(".display-left");
// const display_right = document.querySelector(".display-right");

// var slideIndex = 1;
// showDivs(slideIndex);

// function plusDivs(n) {
//   showDivs((slideIndex += n));
// }

// function showDivs(n) {
//   var i;
//   var x = document.getElementsByClassName("slides");
//   if (n > x.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = x.length;
//   }
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   x[slideIndex - 1].style.display = "block";
// }

// display_left.addEventListener("click", function() {
//   plusDivs(-1);
// });
// display_right.addEventListener("click", function() {
//   plusDivs(1);
// });

// document.addEventListener("click", function(event) {
//   var el = document.elementFromPoint(event.clientX, event.clientY);
//   console.log(el.className);
// });

// $(".acc_container").each(function() {
//   $(this).hide();
// });

/**
 * This is for slide toggle effect upon click
 */

//slide time for the content for each subject
const slideTime = 600;

$(document).ready(function() {
  $(".acc_container").hide();
  $("h2.acc_trigger").click(function() {
    const toggleSign = $(this).find(".togglePlus");
    toggleSign.text(toggleSign.text() == "+" ? "-" : "+");
    $(this)
      .find(".category")
      .toggleClass("active");
    $(this)
      .next(".acc_container")
      .slideToggle(slideTime);
  });
});
