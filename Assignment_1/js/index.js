var slides = document.getElementsByClassName('slide');
var b = 0;
var slideCount = slides.length;

//position last slide on left of first slide
slides[slideCount-1].style.left = "-100%"

function moveLeft() {
  b++;
  if (b < slideCount) {
    slides[b].style.visibility = "visible";
    slides[b].style.left = "0";
    slides[b - 1].style.left = "-100%";
    console.log("next, b = " + b)
  } else {

    b = 0; //Resets current slide to index 0
    slides[b].style.visibility = "visible";
    slides[b].style.left = "0"; //Moves Current Slide to Center
    slides[slideCount - 1].style.left = "-100%";
    console.log("back to start, b = " + b)

    // RESET ALL OTHER SLIDES TO THE RIGHT
    for (var x = 1; x < slideCount - 1; x++) {
      slides[x].style.visibility = "hidden";
      slides[x].style.left = "100%";
    }
  }
 if (b === slideCount -1) {
   slides[0].style.visibility = "hidden";
   slides[0].style.left="100%"
 }
  if (b === slideCount - 2) { //resets last slide just before it turns
     slides[slideCount -1].style.visibility = "hidden";
   slides[slideCount -1].style.left="100%"
  }
}

function moveRight() {
  if (b > 0) {
    b--;
    slides[b].style.visibility = "visible";
    slides[b].style.left = "0";
    slides[b + 1].style.left = "100%";
    console.log("previous, b = " + b)
  } else {
    b = slideCount - 1; //Resets current slide to last slide
    slides[b].style.visibility = "visible";
    slides[b].style.left = "0"; //Moves Current Slide to Center
    slides[0].style.left = "100%"; //move first slide to right
    console.log("back to start, b = " + b)

    // RESET ALL OTHER SLIDES TO THE LEFT
    for (var x = 1; x < slideCount - 1; x++) {
      slides[x].style.visibility = "hidden";
      slides[x].style.left = "-100%";
    }
  }
 if (b === 1) {
   slides[0].style.visibility = "hidden";
   slides[0].style.left="-100%"
 }
  if (b === 0) { //resets last slide just before it turns
     slides[slideCount -1].style.visibility = "hidden";
   slides[slideCount -1].style.left="-100%"
  }
}

var prevBut = document.getElementById('prev');
prevBut.onclick = moveRight;

var nextBut = document.getElementById('next');
nextBut.onclick = moveLeft;