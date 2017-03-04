//Buttons class addition to allow flip

$(document).ready(function() {

    var $bioButton = $("#jk-home-bio-button");
    var $flipingContainer = $("#jk-home-bio-container");

    $bioButton.click(function () {
        console.log('ftw');
        $flipingContainer.toggleClass("active");
    });
});
