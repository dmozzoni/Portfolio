$(document).ready(function() {

    $("#button4").on("click", function() {
        window.location.href = 'files/Mozzoni_resume.pdf';
        return false;
    });

    $("#button6").on("click", function() {
        window.location.href = 'https://profiles.generalassemb.ly/profiles/david-mozzoni';
        return false;
    });

    $('#button1').hover(function() {
        $('#b11, #b12, #b13').toggleClass('hide');
    });

    $('#button2').hover(function() {
        $('#b21, #b22, #b23').toggleClass('hide');
    });

    $('#button5').hover(function() {
        $('#b51, #b52, #b53').toggleClass('hide');
    });

});
