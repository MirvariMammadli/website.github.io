window.onload = function(){
    alert("Hey");
}

//min-production

$(document).ready(() =>{
$("button").click(function(){
    $(this).html("Clicked");
});

    $("button").click(function(){
        $("p").css({clolor: "blue"});

    });

    $("p").click(function(){
        $(this).after("<p>text<p>");
    });
});