$(".themeChange").on("click", function() {
    if ($(this).hasClass("regular")) {
        $("#theme").attr("href", "css/ocean.css")
    }
    else if ($(this).hasClass("blue")) {
        $("#theme").attr("href", "css/seaweed.css")
    }
    else if ($(this).hasClass("dark")) {
        $("#theme").attr("href", "css/otter.css")
    }
});