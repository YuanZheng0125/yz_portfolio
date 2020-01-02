/**
 * This is for slide toggle effect upon click
 */

//slide time for the content for each subject
const slideTime = 600;

$(document).ready(function() {
  $(".acc_container").hide();

  $("h2.acc_trigger").click(function() {
    const allSubtitles = $(this)
      .next(".acc_container")
      .find("a");
    const toggleSign = $(this).find(".togglePlus");

    if (
      $(this)
        .find(".category")
        .hasClass("active")
    ) {
      setTimeout(function() {
        allSubtitles.removeClass("active");
        allSubtitles.eq(0).addClass("active");
      }, 600);
    } else {
      allSubtitles.eq(0).addClass("active");
      $(this)
        .next(".acc_container")
        .find("iframe")
        .attr("src", allSubtitles.eq(0).attr("href"));
    }

    toggleSign.text(toggleSign.text() == "+" ? "-" : "+");
    $(this)
      .find(".category")
      .toggleClass("active");

    $(this)
      .next(".acc_container")
      .slideToggle(slideTime);
  });

  $(".projectNavList")
    .find("a")
    .click(function() {
      $(".projectNavList")
        .find("a")
        .removeClass("active");
      $(this).addClass("active");
    });
});
