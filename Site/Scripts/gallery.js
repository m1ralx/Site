"use strict";
var gallerySize = 8;
var displayedPhotos = 4;
$(document).ready(function () {
    var curShift = 0;
    var currentChoice = 0;
    function rotate(ar, size) {
        return ar.slice(-size).concat(ar.slice(0, -size)); // size > 0 то вправо
    }
    function shiftPhotos(shift) {
        var gallery = $(".gallery");
        var photos = gallery.children('div[class^="image-"]');
        photos.detach();
        var photosArray = [];
        for (let i = 0; i < gallerySize; i++)
            photosArray.push(photos[i]);
        photosArray = rotate(photosArray, shift);
        for (let i = 0; i < gallerySize; i++) {
            photos[i] = photosArray[i];
        }
        gallery.append(photos);
        gallery.children().slice(3, 3 + displayedPhotos).each(function() {
            $(this).show();
        });
        gallery.children().slice(3 + displayedPhotos, 3 + gallerySize).each(function () {
            $(this).hide();
        });
    }
    function toLeft() {
        curShift--;
        curShift %= gallerySize;
        shiftPhotos(1);
    }
    function toRight() {
        curShift++;
        curShift %= gallerySize;
        shiftPhotos(-1);
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

    function modalToLeft() {
        toLeft();
        currentChoice--;
        if (currentChoice === 0)
            currentChoice = gallerySize;
        var img = new Image();
        $(".main-image").attr("src", "/Content/Images/loading.gif");
        img.onload = function () { $(".main-image").attr("src", img.src); }
        img.src = "/Content/Gallery/" + currentChoice + ".jpg";
    }

    $(".left").click(modalToLeft);
    function modalToRight() {
        toRight();
        currentChoice++;
        if (currentChoice === gallerySize)
            currentChoice = 1;
        var img = new Image();
        $(".main-image").attr("src", "/Content/Images/loading.gif");
        img.onload = function () { $(".main-image").attr("src", img.src); }
        img.src = "/Content/Gallery/" + currentChoice + ".jpg";
    }
    $(".right").click(modalToRight);
    $(".closing").click(function () {
        currentChoice = 0;
        $(".main-image").attr("src", "/Content/Images/loading.gif");
        $(".modal").hide();
    });
    $(document).keydown(function (event) {
        if (event.keyCode === 39)
            modalToRight();
        if (event.keyCode === 37)
            modalToLeft();
        if ($(".modal").css("display") === "none") {
            $(".main-image").attr("src", "/Content/Images/loading.gif");
        }
    });
});