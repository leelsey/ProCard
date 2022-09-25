/* PWA begin */
const divInstall = document.getElementById('installContainer');
const butInstall = document.getElementById('butInstall');

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
    .then((reg) => {
        console.log('Applied service worker.', reg);
    });
}

self.addEventListener('fetch', function(e) {})

if (window.location.protocol === 'http:') {
  const requireHTTPS = document.getElementById('requireHTTPS');
  const link = requireHTTPS.querySelector('a');
  link.href = window.location.href.replace('http://', 'https://');
  requireHTTPS.classList.remove('hidden');
}
/* PWA end */

/* Loading bar */
//
function FunLoadingBarStart() {
  var backHeight = $(document).height();                      //bg height
  var backWidth = window.document.body.clientWidth;           //bg width
  var backGroundCover = "<div id='back'></div>";              //bg cover
  var loadingBarImage = '';                                   //centre image
  loadingBarImage += "<div id='loadingBar'>";
  loadingBarImage += " <img src='../img/loadingbar.gif'/>";   //loading bar
  loadingBarImage += "</div>";
  $('body').append(backGroundCover).append(loadingBarImage);
  $('#back').css({ 'width': backWidth, 'height': backHeight, 'opacity': '0.3' });
  $('#back').show();
  $('#loadingBar').show();
}
function FunLoadingBarEnd() {
  $('#back, #loadingBar').hide();
  $('#back, #loadingBar').remove();
}

/* Modal Effect */
//
$('.button').click(function(){
  var buttonId = $(this).attr('id');
  $('#modal-layer').removeAttr('class').addClass(buttonId);
  $('body').addClass('modal-active');
})
$('#modal-layer').click(function(){
  $(this).addClass('out');
  $('body').removeClass('modal-active');
});

/* Top Scroll */
//
$(document).ready(function() {
  $(".nav-gotop").click(function() {
     $('html, body').animate({scrollTop: 0}, 300);
  });
});