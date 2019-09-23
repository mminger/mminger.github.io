var myModal = $('#exampleModalCenter');

myModal.on('show.bs.modal', function(e){
  var slideShow = $('.carousel');
  var thumbnail = $(e.relatedTarget);

  var slideNumber = thumbnail.data('number');
  console.log("thumbnail element is " + thumbnail);
  console.log("currSlide is " + slideNumber);

  slideShow.carousel(parseInt(slideNumber));
});

var myModal1 = $('#animationModal1');
var video1 = $('#animationPlayer01');

myModal1.on('hide.bs.modal', function(){
  var videoSrc = video1.attr('src');
  video1.attr('src','');
  video1.attr('src',videoSrc);
})

var myModal2 = $('#animationModal2');
var video2 = $('#animationPlayer02');

myModal2.on('hide.bs.modal', function(){
  var videoSrc = video2.attr('src');
  video2.attr('src','');
  video2.attr('src',videoSrc);
})

var myModal3 = $('#animationModal3');
var video3 = $('#animationPlayer03');

myModal3.on('hide.bs.modal', function(){
  var videoSrc = video3.attr('src');
  video3.attr('src','');
  video3.attr('src',videoSrc);
})

var myModal4 = $('#animationModal4');
var video4 = $('#animationPlayer04');

myModal4.on('hide.bs.modal', function(){
  video4[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
})

var myModal5 = $('#animationModal5');
var video5 = $('#animationPlayer05');

myModal5.on('hide.bs.modal', function(){
  var videoSrc = video5.attr('src');
  video5.attr('src','');
  video5.attr('src',videoSrc);
})

var demoReel = $('#demoReelPlayer');

demoReel.on('hide.bs.modal', function(){
  var videoSrc = demoReel.attr('src');
  demoReel.attr('src','');
  demoReel.attr('src',videoSrc);
})
