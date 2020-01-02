var slideIndex = 0;
const allImgs = $(".sliderImage").find("img");
const allImgNavs = $(".sliderNav").find("span");
const numImgs = allImgs.length;
const imgWidth = allImgs.get(0).getBoundingClientRect().width;
const halfWidth = imgWidth / 2;

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

function changeCursor(event, element) {
  let xPos = event.pageX - element.offset().left;
  element.removeClass("cursor-prev cursor-next");
  if (xPos > halfWidth) {
    element.addClass("cursor-next");
  } else {
    element.addClass("cursor-prev");
  }
}

$(document).ready(function() {
  allImgs.mousemove(function(event) {
    changeCursor(event, $(this));
  });

  allImgs.click(function(event) {
    $(this).removeClass("cursor-prev cursor-next");
    let xPos = event.pageX - $(this).offset().left;
    let indexDelta = 1;
    if (xPos <= halfWidth) {
      indexDelta = -1;
    }
    let imgIndex = slideIndex + indexDelta;
    imgIndex = imgIndex < 0 ? numImgs - 1 : imgIndex % numImgs;
    changeCursor(event, allImgs.eq(imgIndex));
    console.log(imgIndex);
    showImg(imgIndex);
  });

  allImgNavs.click(function() {
    const index = allImgNavs.index($(this));
    showImg(index);
  });

  showImg(0);
});
