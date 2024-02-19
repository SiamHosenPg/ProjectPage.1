$(document).ready(function(){
    $(".Navation .Bar").click(function(){
        $(" .Navation .Links").toggleClass("MenuBarPosition");

    }); //  ----------------     this is for menu bar toggle 


    $(document).scroll(function () {
        var $nav = $(".Navation");
        $nav.toggleClass('Navscrolled', $(this).scrollTop() > $nav.height());
      }); // =====================  This code for scrolling effect 


}); 





