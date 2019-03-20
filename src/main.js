import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/skills";

// // Mobile menu
// function toggleMenu() {
//   var openBtn = $('.button__burger');
//   var closeBtn = $('.nav-mobile__close-btn');
//   var menu = $('.nav-mobile');
//
//   openBtn.on('click', function (event) {
//     event.preventDefault();
//     menu.fadeIn();
//     $('body').addClass('scroll-hidden');
//   });
//
//   closeBtn.on('click', function (event) {
//     event.preventDefault();
//     menu.fadeOut();
//     $('body').removeClass('scroll-hidden');
//   });
// }
//
// toggleMenu();