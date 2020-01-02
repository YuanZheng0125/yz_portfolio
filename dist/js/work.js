
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
