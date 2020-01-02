var slideIndex = 0;
var indexDelta = 1;
const allImgs = $(".slider").find("img");
const numImgs = allImgs.length
const imgWidth = allImgs.get(0).getBoundingClientRect().width
const halfWidth = imgWidth / 2;


function showImg(picIndex) {
    if (picIndex < 0) slideIndex = numImgs - 1;
    else if(picIndex >= numImgs) slideIndex = 0;
    allImgs.hide();
    allImgs.eq(slideIndex).show();
}

function showNextImage() {
    slideIndex += indexDelta;
    showImg(slideIndex);
}

function changeCursor(event, element) {
    const xPos = event.pageX - element.offset().left;
    element.removeClass("cursor-prev cursor-next");
    if (xPos > halfWidth) {
        element.addClass("cursor-next");
        indexDelta = 1;
    } else {
        element.addClass("cursor-prev");
        indexDelta = -1;
    }
}

$(document).ready(function(){
    allImgs.mousemove(function(event){
        changeCursor(event, $(this))
    });

    allImgs.click(function(event){
        showNextImage();
        changeCursor(event, $(this));
    });
    showImg(1);
})