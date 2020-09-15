$(document).ready(function(){
    console.log("Hello world")
    $(".aibLinkin").hover(function(){
        console.log("you did it");
        $(".aibDropDownContent").slideToggle("slow");
        $(".aibDropDownContent").css("background-color", "#f5f2d0", "display", "show");

    });
    $(".eliHome").hover(function(){
        console.log("Eli Hover");
        $(".eliDropDownContent").slideToggle("slow");
        $(".eliDropDownContent").css("background-color", "#f5f2d0", "display", "show");

    });
    $(".energy").hover(function(){
        console.log("Kamehameha");
        $(".energyDropDownContent").slideToggle("slow");
        $(".energyDropDownContent").css("background-color", "#f5f2d0", "display", "show");

    });
    $(".travel").hover(function(){
        console.log("boof");
        $(".travelDropDownContent").slideToggle("slow");
        $(".travelDropDownContent").css("background-color", "#f5f2d0", "display", "show");

    });
});