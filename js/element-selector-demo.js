/// <reference path="../typings/globals/jquery/index.d.ts" />

$(document).ready(function () {
    $('td') // Selects all td elements
    $('div a') // Select all anchor elements that are descendants of div element
    $('div, span, a') // Selects all div, span and anchor elements

    //Alerts the total count of td elements on the page
    $(document).ready(function () {
        alert($('td').length);
    });

    //Selects all the tr elements on the page and changes their background colour to red
    $(document).ready(function () {
        $('tr').css('background-Color', 'red');
    });


    //Alerts the HTML content of the table

    $(document).ready(function () {
        alert($('table').html());
    });


    //Alerts the HTML content of each table row

    $(document).ready(function () {
        $('table tr').each(function () {
            $(document).ready(function () {
                $('tr:even').css('background-Color', 'gray');
                $('tr:odd').css('background-Color', 'yellow');
            });
            alert($(this).html());
        });
    });


    //Select and changes the background colour of all the div, span and anchor elements

    $(document).ready(function () {
        $('div, span, a').css('background-Color', 'yellow');
    });


    //Select all anchor elements that are descendants of div element
    $(document).ready(function () {
        $('div a').css('background-Color', 'yellow');
    });

    //To change the background color of even rows to gray and odd rows to yellow just for one of the table, use #id selector along with element selector.
    $(document).ready(function () {
        $('#table tr:even').css('background-Color', 'gray');
        $('#table tr:odd').css('background-Color', 'yellow');
    });
    //Changes the background color of even rows to gray and odd rows to yellow on both the tables.
    $(document).ready(function () {
        $('tr:even').css('background-Color', 'gray');
        $('tr:odd').css('background-Color', 'yellow');
    });
});
