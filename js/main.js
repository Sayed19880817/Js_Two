var imgList = Array.from(document.querySelectorAll(".item img"));
var lightBoxContainer = document.querySelector(".lightboxContainer");
var lightBoxItem = document.querySelector(".lightboxitem");
var nextBtn = document.getElementById("next");
var prevBtn = document.getElementById("prev");
var closeBtn = document.getElementById("close");
var currentSlideIndex = 0;

for (var i = 0; i < imgList.length; i++) {
  imgList[i].addEventListener("click", function (e) {
    var imgSrc = e.target.getAttribute("src");
    currentSlideIndex = imgList.indexOf(e.target);
    lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
    lightBoxContainer.classList.replace("d-none", "d-flex");
  });
}

function nextSlide(e) {
  currentSlideIndex++;
  if (currentSlideIndex == imgList.length) {
    currentSlideIndex = 0;
  }
  var imgSrc = imgList[currentSlideIndex].getAttribute("src");
  lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
}
function prevSlide() {
  currentSlideIndex--;
  if (currentSlideIndex < 0) {
    currentSlideIndex = imgList.length - 1;
  }
  var imgSrc = imgList[currentSlideIndex].getAttribute("src");
  lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
}
nextBtn.addEventListener("click", nextSlide);
document.addEventListener("keydown", nextWithKey);
prevBtn.addEventListener("click", prevSlide);

closeBtn.addEventListener("click", function () {
  lightBoxContainer.classList.replace("d-flex", "d-none");
});


function nextWithKey(e){

    if(e.keyCode===39){
        nextSlide(e);
    }
    else if(e.keyCode == 37){
        prevSlide(e)
    }

}

document.addEventListener("keydown", closeWithKey);

function closeWithKey(e){

  if(e.keyCode===27){
    lightBoxContainer.classList.replace("d-flex", "d-none");
  };
}
