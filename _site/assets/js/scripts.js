'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var svg = document.getElementById('home-fandom-title');
var warp = new Warp(svg);

warp.interpolate(4);
warp.transform(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2);

  var x = _ref2[0];
  var y = _ref2[1];
  return [x, y, y];
});

var offset = 0;
function animate() {
  warp.transform(function (_ref3) {
    var _ref32 = _slicedToArray(_ref3, 3);

    var x = _ref32[0];
    var y = _ref32[1];
    var oy = _ref32[2];
    return [x, oy + 9 * Math.sin(x / 4 + offset), oy];
  });
  offset += 0.1;
  requestAnimationFrame(animate);
}

animate();

var parallaxElements = $('.item'),
    parallaxQuantity = parallaxElements.length;

$(window).bind("load resize scroll", function (e) {

  if ($(window).width() > 768) {

    window.requestAnimationFrame(function () {

      for (var i = 0; i < parallaxQuantity; i++) {
        var currentElement = parallaxElements.eq(i);
        var scrolled = $(window).scrollTop();

        currentElement.css({
          'transform': 'translate3d(0,' + scrolled * -0.3 + 'px, 0)'
        });
      }
    });
  }
});

$(document).ready(function () {

  $(".main-menu").click(function () {
    $(this).toggleClass("expand-left");
  });

  $(".browse-side-wrapper").click(function () {
    $(".browse-menu").toggleClass("expand-right");
  });

  $(".close-btn a").click(function () {
    $(".browse-menu").toggleClass("expand-right");
  });

  /*
  
  $( ".about a" ).click(function() {
    $( ".about-details").toggleClass( "fadeinright");
    $("#main").toggleClass("no-scroll")
  });
  
  
  
  $( ".close" ).click(function() {
      $( ".about-details").toggleClass( "fadeinright").addClass("slide-out");
      $("#main").toggleClass("no-scroll")
   });
  
   */

  $(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

  $('#fullpage').fullpage({

    scrollingSpeed: 600,
    easing: 'easeOutBounce',
    scrollOverflow: true

  });

  $(".authors li ").hover(function () {
    $(".preview-wrapper").fadeIn();
  }, function () {
    $(".preview-wrapper").fadeOut();
  });

  $('body').addClass('loaded');
});

var $boxs = $("#parent > .box");
var $btns = $(".btn").on("click", function () {

  var active = $btns.removeClass("active").filter(this).addClass("active").data("filter");

  $boxs.hide().filter("." + active).fadeIn(450);
});

var $boxs1 = $("#parent1 > .box1");
var $btns1 = $(".btn1").on("click", function () {

  var active1 = $btns1.removeClass("active1").filter(this).addClass("active1").data("filter");

  $boxs1.hide().filter("." + active1).fadeIn(450);
});

var rellax = new Rellax('.item');

plyr.setup();

var controller = new ScrollMagic.Controller();

// build scene
var scene = new ScrollMagic.Scene({
  triggerElement: "#issue-section"
}).setClassToggle(".letter", "fix") // add class toggle
//.addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
.addTo(controller);

// build scene
var scene = new ScrollMagic.Scene({
  triggerElement: "#issue-section"
}).setClassToggle(".letter-wrapper a", "no-link") // add class toggle
//.addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
.addTo(controller);