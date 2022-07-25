var slideShow = $('.carousel');
var slide = $('div.slide-thumbnails > img');
var slideNumber = slide.attr('data-number');

if(slideShow) {
  slide.on('click', onClickHandler);
}

function onClickHandler(e) {
  var currSlide = parseInt(e.target.getAttribute('data-number'));
  slideShow.carousel(currSlide);
}
