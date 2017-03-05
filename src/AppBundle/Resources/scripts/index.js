$(document).ready(function() {

    //Buttons class addition to allow flip
    var $bioButton = $("#jk-home-bio-button");
    var $flipingContainer = $("#jk-home-bio-container");
    var $bioContainer = $("#jk-home-bio-container-content");
    var $bioDescription = $("#jk-home-bio-container-description");

    // Class addition
    $bioButton.click(function () {
        console.log('ftw');
        $flipingContainer.toggleClass("active");
        $bioContainer.toggleClass("active");
        $bioDescription.toggleClass("active");
    });

    //Buttons class addition to fill scores
    var $scoreItem = $("[data-jk-score-item]");
    var $scroreButton = $("#jk-home-skills-button");

    // Class addition
    $scroreButton.click(function () {
        console.log('ftw');
        $scoreItem.toggleClass("active");
    });
});
