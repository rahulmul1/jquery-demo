/// <reference path="../typings/globals/jquery/index.d.ts" />

$(document).ready(function () {

    //$(':input') selects all input, textarea, select and button elements where as $('input') just selects elements with an input tag. 

    $('input').each(function () {
        console.log($(this).val());

    });

    $(':input').each(function () {
        console.log($(this).val());
    });

    $('input[type="text"]').each(function () {
        console.log($(this).val());

    });

    //alert all checked radio values
    $('#btnGetSelectedRadio').click(function (e) {
        var result = '';
        $('input[type="radio"]:checked').each(function () {
            console.log($(this).val());
            result = result + ',' + $(this).val();
        });

        $('#divResult').html(result + ' is checked.');
    });

    $('#btnGetSelectedSkills').click(function (e) {
        fungetselectedcheckboxes('skills');

    });

    $('#btnGetSelectedCities').click(function (e) {
        fungetselectedcheckboxes('cities');
    });


    //console.log($('#selectCountries option:selected').val());
    var selectedCountry = $('#selectCountries option:selected');
    $('#divResultselectCountries').html('value = ' + selectedCountry.val() + ', Text = ' + selectedCountry.text());

    var selectedCountry2 = $('#selectCountries2 option:selected');

    var result = '';
    selectedCountry2.each(function (index, element) {
        // element == this
        result += 'value = ' + $(this).val() + ', Text = ' + $(this).text() + '</br>';
        $('#divResultselectCountries2').html(result);
    });


});

var fungetselectedcheckboxes = function (groupName) {
    var result2 = '';
    $('input[type="checkbox"][name="' + groupName + '"]:checked').each(function () {
        console.log($(this).val());
        result2 = result2 + ',' + $(this).val();
    });
    $('#divResult2').html(result2 + ' is checked.');
}
