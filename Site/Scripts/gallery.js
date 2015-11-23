"use strict";
var gallerySize = 8;
var displayedPhotos = 4;
$(document).ready(function () {
    var curLeft = 1;
    var currentChoice = 0;
    function toLeft() {
        if (curLeft === 1) {
            return;
        }
        curLeft--;
        for (let i = 1; i <= gallerySize; i++) {
            if (curLeft <= i && i < curLeft + displayedPhotos) {
                $(".image-" + i).show();
            } else {
                $(".image-" + i).hide();
            }
        }
    }
    function toRight() {
        if (curLeft === gallerySize - displayedPhotos)
            return;
        curLeft++;
        for (let i = 1; i <= gallerySize; i++) {
            if (curLeft <= i && i < curLeft + displayedPhotos) {
                $(".image-" + i).show();
            } else {
                $(".image-" + i).hide();
            }
        }
    };
    $("#button-left").click(toLeft);
    $("#button-right").click(toRight);
    for (let i = 1; i <= 8; i++) {
        $(".image-" + i).click(function () {
            currentChoice = i;
            $(".modal").css("display", "flex");
            $(".modal-image > img").attr("src", $(".image-" + i + " img").attr("src"));
        });
    }
    $(".left").click(function () {
        if (currentChoice < 2)
            return;
        currentChoice--;
        toLeft();
        $(".modal-image > img").attr("src", $(".image-" + currentChoice + " img").attr("src"));
    });
    $(".right").click(function () {
        if (currentChoice > 7)
            return;
        currentChoice++;
        toRight();
        $(".modal-image > img").attr("src", $(".image-" + currentChoice + " img").attr("src"));
    });
    $(".closing").click(function () {
        $(".modal").hide();
    });
});