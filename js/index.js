"use strict";

var scrollAnchor = document.querySelector('.slider__icon-block');
var anchor = document.querySelector(".about");
scrollAnchor.addEventListener('click', function (event) {
  event.preventDefault();
  document.querySelector(".about").scrollIntoView({
    behavior: 'smooth'
  });
});
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener('click', function (event) {
    event.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
}); //Hidden mobile menu marginLeft = -windowWidth

var mobileMenu = document.querySelector('.header__mobile-menu-block');
var mobileMenuItems = document.querySelectorAll('.header__mobile-menu .menu__item'); //Burger visible

var menuBurger = document.querySelector(".header__burger-container");
menuBurger.addEventListener('click', function () {
  mobileMenu.classList.toggle('header__mobile-menu-visible');
});
mobileMenuItems.forEach(function (item, i, arr) {
  arr[i].addEventListener('click', function () {
    mobileMenu.classList.toggle('header__mobile-menu-visible');
  });
}); //Mobile menu

var menu = document.querySelector('.header');
window.addEventListener('scroll', function (event) {
  var topCoord = document.querySelector('.slider').offsetHeight;

  if (this.pageYOffset > topCoord) {
    menu.className = "header header_scrolled";
  } else {
    menu.className = "header";
  }
}); // document.addEventListener('DOMContentLoaded', function() {
//     var item = document.querySelector(".about");
//     var scrollAnchor = document.querySelector('.slider__icon-block');
//     scrollAnchor.addEventListener('click', function () {
//         item.scrollIntoView(true);
//     });
//  }, false);
//Blog slider

var blogSliderItems = document.querySelector(".blog__items-container");
var circles = document.querySelectorAll(".blog__circle");
var left = 0;
var index = 0;
var blogItemWidth;
circles[0].classList.add('blog__circle_active');
var blogSlider = setInterval(function () {
  var max = +blogItemWidth * 2;
  blogItemWidth = document.querySelector(".blog__slide").offsetWidth; // console.log("Left :" + left);
  // console.log("Max" + -max);
  // console.log("Counter" + counter);

  if (left > -max) {
    circles.forEach(function (item, i, arr) {
      if (i === index + 1) arr[i].classList.add('blog__circle_active');else arr[i].classList.remove('blog__circle_active');
    });
    left -= blogItemWidth;
    index++;
  } else {
    left = 0;
    index = 0;
    circles.forEach(function (item, i, arr) {
      if (i === index) arr[i].classList.add('blog__circle_active');else arr[i].classList.remove('blog__circle_active');
    });
  }

  left = blogItemWidth * index;
  blogSliderItems.style.left = left + 'px';
}, 4000); //Testimonilas slider

var tesSliderItems = document.querySelector(".testimonials__slide-container");
var tesCircles = document.querySelectorAll(".testimonials__circle");
var tesLeft = 0;
var tesIndex = 0;
var tesItemWidth;
tesCircles[0].classList.add('testimonials__circle_active');
var tesSlider = setInterval(function () {
  var max = +tesItemWidth * 2;
  tesItemWidth = document.querySelector(".testimonials__slide").offsetWidth; // console.log("Left :" + left);
  // console.log("Max" + -max);
  // console.log("Counter" + counter);

  tesLeft = tesItemWidth * tesIndex;

  if (tesLeft > -max) {
    tesCircles.forEach(function (item, i, arr) {
      if (i === tesIndex + 1) arr[i].classList.add('testimonials__circle_active');else arr[i].classList.remove('testimonials__circle_active');
    });
    tesLeft -= tesItemWidth;
    tesIndex++;
  } else {
    tesLeft = 0;
    tesIndex = 0;
    tesCircles.forEach(function (item, i, arr) {
      if (i === tesIndex) arr[i].classList.add('testimonials__circle_active');else arr[i].classList.remove('testimonials__circle_active');
    });
  }

  tesSliderItems.style.marginLeft = tesLeft + 'px';
}, 3500); //Team slider

var teamSliderItems = document.querySelector(".team__slides-container ");
var teamCircles = document.querySelectorAll(".team__circle");
var teamLeft = 0;
var teamIndex = 0;
var teamItemWidth;
teamCircles[0].classList.add('team__circle_active');
var teamSlider = setInterval(function () {
  teamItemWidth = document.querySelector(".team__slide").offsetWidth;
  var max = +teamItemWidth * 2; // console.log("Left :" + left);
  // console.log("Max" + -max);
  // console.log("Counter" + counter);

  teamLeft = teamItemWidth * index;

  if (teamLeft > -max) {
    teamCircles.forEach(function (item, i, arr) {
      if (i === teamIndex + 1) arr[i].classList.add('team__circle_active');else arr[i].classList.remove('team__circle_active');
    }); // console.log(teamLeft);

    teamLeft -= teamItemWidth;
    teamIndex++;
  } else {
    teamLeft = 0;
    teamIndex = 0;
    teamCircles.forEach(function (item, i, arr) {
      if (i === teamIndex) arr[i].classList.add('team__circle_active');else arr[i].classList.remove('team__circle_active');
    });
  }

  teamSliderItems.style.marginLeft = teamLeft + 'px';
}, 3500); // var defaultContainerSize = document.querySelector('.container').offsetWidth;
// console.log(containerSize);
// window.addEventListener('resize', function() { 
//     var containerSize = document.querySelector('.container').offsetWidth;
//     if(defaultContainerSize != containerSize) { 
//         blogItemWidth = document.querySelector(".blog__slide").offsetWidth;    
//         for (blogIndex = 0; blogIndex < array.length; blogIndex++) {
//         }  
//    } 
// });
// var teamBars = document.querySelectorAll(".team__slide .team__inner-bar");
// teamBars.forEach(function(item, i, arr) { 
//     item[i].style.width = item[i].dataset.branding + "%";
// })