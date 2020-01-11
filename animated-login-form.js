$(".txt input").focus(function () {
    $(this).addClass("focus");
});
$(".txt input").blur(function () {
    if ($(this).val() == '')
        $(this).removeClass("focus")
})
$(".btn").click(function () {
    $(".pop-up").css("display", "block");
})
$(".close").click(function () {
    $(".pop-up").css("display", "none")
})