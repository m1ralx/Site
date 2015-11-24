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
            img.onload = function () { $('.main-image').attr('src', img.src); }
            img.src = "/Content/Gallery/" + i + ".jpg";

//          $(".modal-image > img").attr("src", $(".image-" + i + " img").attr("src"));
//            $(".main-image").attr("src", "/Content/Gallery/" + i + ".jpg");
//            $(".main-image").hide();
//            $(".loading").hide();

//            console.log("kek");
//            $(".modal-image > img").onload(function () {
//                $(".main-image").show();
//                $(".loading").hide();
//            });
//            $(".modal-image > img").one("load", function () {
//                 do stuff
//            }).each(function () {
//                if (this.complete) $(this).load();
//            });
        });
    }


    $(".left").click(function () {
        if (currentChoice === 1)
            return;
        currentChoice--;
        toLeft();
        $(".modal-image > img").attr("src", $(".image-" + currentChoice + " img").attr("src"));
    });
    $(".right").click(function () {
        if (currentChoice > gallerySize-1)
            return;
        currentChoice++;
        toRight();
        $(".modal-image > img").attr("src", $(".image-" + currentChoice + " img").attr("src"));
    });
    $(".closing").click(function () {
        $(".modal").hide();
    });
});