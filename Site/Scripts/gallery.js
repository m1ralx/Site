"use strict";
var gallerySize = 8;
var displayedPhotos = 4;
$(document).ready(function () {
    var curLeft = 1;
    var currentChoice = 0;
    function toLeft() {
        if (curLeft === 1) {
            $("#button-left").css("visibility", "hidden");
            return;
        }
        $("#button-right").css("visibility", "visible");
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
        if (curLeft === gallerySize - displayedPhotos) {
            $("#button-right").css("visibility", "hidden");
            return;
        }
        $("#button-left").css("visibility", "visible");
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


    for (let i = 1; i <= gallerySize; i++) {
        $(".image-" + i).click(function () {
            currentChoice = i;
            $(".modal").css("display", "flex");

            var img = new Image();
            img.onload = function () { $(".main-image").attr("src", img.src); }
            img.src = "/Content/Gallery/" + i + ".jpg";
        });
    }

    $(".left").click(function () {
        if (currentChoice === 1)
            return;
        currentChoice--;
        toLeft();
        var img = new Image();
        $(".main-image").attr("src", "/Content/Images/loading.gif");
        img.onload = function () { $(".main-image").attr("src", img.src); }
        img.src = "/Content/Gallery/" + currentChoice + ".jpg";
    });
    $(".right").click(function () {
        if (currentChoice > gallerySize-1)
            return;
        currentChoice++;
        toRight();
        var img = new Image();
        $(".main-image").attr("src", "/Content/Images/loading.gif");
        img.onload = function () { $(".main-image").attr("src", img.src); }
        img.src = "/Content/Gallery/" + currentChoice + ".jpg";
    });
    $(".closing").click(function () {
        $(".main-image").attr("src", "/Content/Images/loading.gif");
        $(".modal").hide();
    });
});