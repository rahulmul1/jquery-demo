/// <reference path="../typings/globals/jquery/index.d.ts" />
$(document).ready(function () {
    //Selects all elements with title attribute and sets 5px solid red border 
    $('[title]').css('border', '5px solid red');
    //Selects all div elements with title attribute and sets 5px solid red border
    $('div[title]').css('border', '5px solid red');
    //Selects all elements with title attribute value - div1Title, and sets 5px solid red border
    $('[title="div1Title"]').css('border', '5px solid red');
    //Selects all div elements with both title and style attributes, and sets 5px solid black border
    $('div[title][style]').css('border', '5px solid black');
    //Selects all div elements with either title or style attributes, and sets 5px solid black border
    $('div[title],[style]').css('border', '5px solid black');
    //To make attribute contains selector case-insensitive, use filter() method and regular expression as shown below.
    $('div[title]').filter(function () {
        return RegExp('DIV', 'i').test($(this).attr('title'));
    }).css('border', '3px solid green');

});