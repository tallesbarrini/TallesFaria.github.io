$(window).scroll(function() {
  var wScroll = $(this).scrollTop();
  $(".logo").css({
    transform: "translate(0px, " + (wScroll - 4200) / 2 + "%)"
  });
  // console.log(wScroll - 3000);

  $(".back-bird").css({
    transform: "translate(0px, " + (wScroll - 4200) / 2 / 4 + "%)"
  });

  $(".fore-bird").css({
    transform: "translate(0px, -" + (wScroll - 4000) / 2 / 40 + "%)"
  });

//   if (wScroll > $(".clothes-pic").offset().top) {
//     $(".clothes-pic img").each(function(i) {
//       setTimeout(function() {
//         $(".clothes-pic")
//           .eq(i)
//           .addClass("is-showing");
//       }, 150 * (i + 1));
//     });
//   }
});
