$(document).ready(function () {

  $(".list li").click(function () {

    var id = $(this).data("tab");

    $(".content .active").removeClass("active");

    $("#tab-" + id).addClass("active");

    $(".list .active").removeClass("active");

    $(this).addClass("active");

  });

});