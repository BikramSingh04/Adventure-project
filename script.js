$(".calm").click(function() {
    $(".page2").show();
    $(".page1").hide();
});

$(".reckless").click(function() {
    $(".page2").show();
    $(".page1").hide();
});

$(".gasPedal").dblclick(function() {
    $(".page3b").show();
    $(".page2").hide();
});

$(".recklessDriving").mouseleave(function() {
    $(".page4b").show();
    $(".page3b").hide();
});

$(".trafficlightb").mouseleave(function() {
    $(".watchout").text("Of course the blinking yellow light not going to stop you. The coast is clear and now we hit the JETSSS! Press the button to proceed.");
    $(".trafficlightb").css("font-size", "60px");
    $(".trafficlightb").css("border", "5px solid #FFFF00");
});

$(".next5b").click(function() {
    $(".page5b").show();
    $(".page4b").hide();
});

$(".next6").click(function() {
    $(".page6").show();
    $(".page5b").hide();
});

$(".steeringWheel").dblclick(function() {
    $(".page3a").show();
    $(".page2").hide();
});

$(".calmDriving").hover(function() {
    $(".page4a").show();
    $(".page3a").hide();
});

$(".trafficlighta").mouseleave(function() {
    $(".green").text("I see you are waiting for the green light. It is okay to be late because it will be better in the long run. Press the button to proceed.");
    $(".trafficlighta").css("font-size", "60px");
    $(".trafficlighta").css("border", "5px solid #50C878");
});

$(".next5a").click(function() {
    $(".page5a").show();
    $(".page4a").hide();
});

$(".next6").click(function() {
    $(".page6").show();
    $(".gif").hide();
    $(".page5a").hide();
});

$(".clickforfun").click(function() {
    $(".gif").slideDown();
});

$(".gif").hover(function() {
    $(".gif").css("border", "10px solid red");
});

$(".restart").click(function() {
    $(".page1").show();
    $(".page6").hide();
});