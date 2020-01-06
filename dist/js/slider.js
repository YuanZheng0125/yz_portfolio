var slideIndex = 0;
const allImgs = $(".sliderImage").find("img");
const allImgNavs = $(".sliderNav").find("span");
const sliderContent = $(".slider");
const sliderText = $(".sliderText");
const numImgs = allImgs.length;
var textFadeInOutTime = 2000;
var imgFadeInOutTime = 600;

function showImg(picIndex) {
  slideIndex = picIndex;
  allImgs.hide();
  allImgs.eq(slideIndex).show();
  allImgNavs.removeClass("dotActive");
  allImgNavs.eq(slideIndex).addClass("dotActive");
}

function showNextImage(indexDelta) {
  showImg(slideIndex + indexDelta);
}

function changeCursor(event, element, halfWidth) {
  let xPos = event.pageX - element.offset().left;
  element.removeClass("cursor-prev cursor-next");
  if (xPos > halfWidth) {
    element.addClass("cursor-next");
  } else {
    element.addClass("cursor-prev");
  }
}

$(document).ready(function() {
  sliderContent.css("opacity", "0");
  sliderText.css("opacity", "0");
  allImgs.mousemove(function(event) {
    let halfWidth = this.getBoundingClientRect().width / 2;
    changeCursor(event, $(this), halfWidth);
  });

  allImgs.click(function(event) {
    let halfWidth = this.getBoundingClientRect().width / 2;
    $(this).removeClass("cursor-prev cursor-next");
    let xPos = event.pageX - $(this).offset().left;
    let indexDelta = 1;
    if (xPos <= halfWidth) {
      indexDelta = -1;
    }
    let imgIndex = slideIndex + indexDelta;
    imgIndex = imgIndex < 0 ? numImgs - 1 : imgIndex % numImgs;
    changeCursor(event, allImgs.eq(imgIndex), halfWidth);
    showImg(imgIndex);
  });

  allImgNavs.click(function() {
    const index = allImgNavs.index($(this));
    showImg(index);
  });

  setTimeout(function() {
    showImg(0);
    sliderContent.animate({ opacity: 1 }, imgFadeInOutTime);
    sliderText.animate({ opacity: 1 }, textFadeInOutTime);
  }, 200);
});
