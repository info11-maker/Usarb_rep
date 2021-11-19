import $ from 'jquery';
import 'what-input';

// Foundation JS relies on a global variable. In ES6, all imports are hoisted
// to the top of the file so if we used `import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
require('foundation-sites');
// import jQuery library


$(document).ready(function(){

    $(".button").click(function(){
      $(".main").toggleClass("open");
      $(".menu").toggleClass("open");
    });

    $(".nav-main li:has(ul)").addClass("has-sub-nav").prepend("<div class=\"sub-toggle\"></div>");
    
    $(".has-sub-nav a").click(function(){
      $(this).parent().addClass("active");
      $(".nav-container").addClass("show-sub");
    });
    
    $(".has-sub-nav .back").click(function(){
      $(".nav-container").removeClass("show-sub");
      $(".has-sub-nav").removeClass("active");
    });
    
    });


/*$(document).ready(function(){

    $(".menuIt").mouseover(function(){
    var parent = this;
        $(".boxes>div").fadeOut(500, function () {
            switch ($(parent).attr("id")) {
            case "1":
                $("#box-1, #box-2, #box-3, #box-4, #box-5, #box-6, #box-7,#box-8, #box-9").fadeIn();
                   
                    $(".menuIt").mouseover(function(){
                        $(".container-2").hide("slow", function(){
                    });
                });
                break;
            case "2":
                $("#box-10,#box-11,#box-12,#box-13, #box-14,#box-15,#box-16,#box-17").fadeIn();
                
                $(".menuIt").mouseover(function(){
                    $(".container-1").hide("slow", function(){
                });
            });
                break;
            case "3":
                $("#box-18, #box-19,#box-20,#box-21").fadeIn();
                $(".boxes>div").fadeOut(500, function (){
                    $(".boxes>div").stop();
                    });
                break;
            default:
                break;
        }
        });
    });
  });*/
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';
$(document).foundation();

