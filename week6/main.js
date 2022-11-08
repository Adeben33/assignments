let pictureIdx = 1;
slider(pictureIdx);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}
// previous
let prev = document.getElementsByClassName("prev");
prev.addEventListener("click", plusSlides(-1));

// Next/previous controls
function plusSlides(n) {
  slider((pictureIdx += n));
}

// Next
let next = document.getElementsByClassName("next");
next.addEventListener("click", plusSlides(1));

// slider
function slider(n) {
  let slide = document.getElementsByClassName("image-container");
  console.log(slide);
  if (n > slide.length) {
    pictureIdx = 1;
  }
  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
  }

  slide[pictureIdx - 1].style.display = "block";
}

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex - 1].style.display = "block";
//   dots[slideIndex - 1].className += " active";
// }
