// $(document).ready(function() {
//     $("h1").css("color", "red");
// });

// $("h1").addClass("big-title margin-50");

// $("h1").text("Lol");

// $("h1").html("<em>Hey</em>");


// console.log($("img").attr("src", "https://img.a.transfermarkt.technology/portrait/big/472423-1683900849.jpg?lm=1"));

// $("h1").click(function() {
//     $("h1").css("color", "yellow");    
// });

// $("button").click(function() {
//     $("h1").css("color", "yellow"); 
// });

// $("input").keydown(function(event) { //input, body or document also work
//     console.log(event.key);
//     $("h1").append(event.key);
// })


// $("h1").on("mouseover", function () {
//     $("h1").css("color", "red");
// })

// $("h1").before(<button>New</button>);

// $("button").remove();

// $("button").on("click", function() {
//     $("h1").hide(); 
// });

// $("button").on("click", function() {
//     $("h1").toggle(); 
// });

// $("button").on("click", function() {
//     console.log($("h1").slideToggle()); //fadeIn fadeOut slideUp slideDown
// });

$("button").on("click", function() {
    $("h1").slideUp().slideDown().animate({opacity: 0.5}); //only numeric values for animate
});
