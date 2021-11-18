import $ from 'jquery';
import 'what-input';

// Foundation JS relies on a global variable. In ES6, all imports are hoisted
// to the top of the file so if we used `import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
require('foundation-sites');

$(document).ready(function(){

    $(".menuIt").mouseover(function(){
    var parent = this;
        $(".boxes").fadeOut(500, function () {
            switch ($(parent).attr("id")) {
            case "1":
                $("#box-1, #box-2, #box-3, #box-4, #box-5, #box-6, #box-7,#box-8, #box-9").fadeIn();
                break;
            case "2":
                $("#box-10,#box-11,#box-12,#box-13, #box-14,#box-15,#box-16,#box-17").fadeIn();
                break;
            default:
                break;
        }
        });
    });
  });

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';
$(document).foundation();

