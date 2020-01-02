/**
 * This is for slide toggle effect upon click
 */

//slide time for the content for each subject
const restoreDelayTime = 800;
const fadeInOutTime = 600;
const hideDelayTime = 600;

$(document).ready(function() {
  $(".acc_container").hide();

  $("h2.acc_trigger").click(function() {
    const allSubtitles = $(this)
      .next(".acc_container")
      .find("a");
    const toggleSign = $(this).find(".togglePlus");
    const contentContainer = $(this).next(".acc_container");

    if (
      $(this)
        .find(".category")
        .hasClass("active")
    ) {
      setTimeout(function() {
        allSubtitles.removeClass("active");
        allSubtitles.eq(0).addClass("active");
      }, restoreDelayTime);

      contentContainer.animate({ opacity: 0, top: "+=50" }, fadeInOutTime);
      setTimeout(function() {
        contentContainer.css("display", "none");
      }, hideDelayTime);
    } else {
      allSubtitles.eq(0).addClass("active");
      contentContainer
        .find("iframe")
        .attr("src", allSubtitles.eq(0).attr("href"));

      contentContainer.css("display", "block");
      contentContainer.animate({ opacity: 1, top: "-=50" }, fadeInOutTime);
    }

    toggleSign.text(toggleSign.text() == "+" ? "-" : "+");
    $(this)
      .find(".category")
      .toggleClass("active");

    $(this).toggleClass("acc_trigger_active");
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
