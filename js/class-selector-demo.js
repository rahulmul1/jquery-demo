/// <reference path="../typings/globals/jquery/index.d.ts" />
$(document).ready(function () {
    $('.small') // Selects all elements with class small
    $('.small,.big') // Selects all elements with class small or big
    $('div.small,.big') // Selects div elements with class small and any element with class big

    //Selects all elements with class "small" or "big" and sets 5px solid red border
    $('.small, .big').css('border', '5px solid red');
    //Selects all elements with class "small" and all span elements with class "big" and sets 5px solid red border
    $('.small, span.big').css('border', '5px solid orange');
    //Selects all elements with class small that are nested in a an element with id=div2 and sets 5px solid red border
    $('#div2 .small').css('border', '5px solid blue');
    //Selects all elements that has both the classes - small and big. There should be no space between the class names. 
    $('.small.big').css('border', '5px solid yellow');
    //If you have a space between the two class names then we are trying to find descendants, i.e. find elements with class big that are descendants of an element with class small.
    $('.small .big').css('border', '5px solid green');



});