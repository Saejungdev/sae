$(document).ready(function() {
   var patch1 = 0; var patch2 = 0; var patch3 = "#s1"; var patch4 = "#s";
   $(".slide").hide();
   $("#s1").show();
   $(".switch span").click(function() {
      patch2 = $(this).attr("class");
      $(".slide").hide();
      patch3 = patch4.concat(patch2);
      $(patch3).show();
      patch1 = parseInt(patch2, 10) - 1; 
   });
   function clicked1(patchVar) {
      console.log(patchVar);
      $('html,body').animate({
            scrollTop: $(patchVar).offset().top},
      'slow');
   }
   $("#sec").click(function() {
      clicked1(patch3);
   });
});
