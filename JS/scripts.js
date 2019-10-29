// SearchBar Event Handler

$(function(){
    $("#submit").click(function(){
        search();


    
});
        
    


    $("#searchForm").submit(function(e){
        e.preventDefault();
    })


})

function search(){
    // Clear results after new search
    $("#results").html("");
    $("#buttons").html("");

    // Get Form Input
    let q = $("#query").val();

    // Run GET request on API
    $.get(
        "https://www.googleapis.com/youtube/v3/search",{
            part: "snippet, id",
            q: q,
            type: "video",
            key: "AIzaSyB5tT9UkxyDjkICm3g833L-5lewatEsUMk"
        },
        function(data){
            let nextPageToken = data.nextPageToken;
            let previousPageToken = data.previousPageToken;
            console.log(data);

            $.each(data.items, function(i, item){
                var output = getOutput(item);

                // Display results
                $("#results").append(output);
            });
        }

    );
    


}

// Build Output
function getOutput(item){
    var videoID = item.id.videoId;
    var title = item.snippet.title;
    var description = item.snippet.description;
    var thumb = item.snippet.thumbnails.high.url;
    var channelTitle = item.snippet.channelTitle;
    var videoDate = item.snippet.publishedAt;


    // Build Output string
    var videoOutput = '<li>' +
    '<div class="list-left">' +
    '<a href="'+thumb+'"><img src="'+thumb+'"></a>' +
    '</div>' +
    '<div class="list-right">' +
    '<h3><a href="'+thumb+'">'+title+'</a></h3>' +
    '<small>By <span class="cTitle">'+channelTitle+'</span> on '+videoDate+'</small>' +
    '<p>'+description+'</p>' +
    '</div>' +
    '</li>' +
    '<div class="clearfix"></div>' +
    '';
    return videoOutput;
}

$(document).ready(function() {

    $(".navbar-brand").click(function() {
        $(".signInForm").fadeIn("fast");
    })

    $("#signUpButton").click(function() {
        $(".signInForm").fadeOut("fast");
    })

    $("#contact").click(function() {
        $(".contactForm").fadeIn("fast");
    })

    $("#contactButton").click(function() {
        $(".contactForm").fadeOut("fast");
    })

    $("#about").click(function() {
        $("#aboutForm").fadeIn("fast");
    })
    
    $("#aboutButton").click(function() {
        $("#aboutForm").fadeOut("fast");
    })

    $("#help").click(function() {
        $("#helpForm").fadeIn("fast");
    })

    $("#helpButton").click(function() {
        $("#helpForm").fadeOut("fast")
    })






});

