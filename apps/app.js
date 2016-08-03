$(function() {
    $('#search-term').submit(function(event) {
        event.preventDefault();

        var request = gapi.client.youtube.search.list({
            q: $('#query').val(),
            part: 'snippet',
            type: "video",
            maxResults: 20
        });
        request.execute(function(response) {
            var results = response.result;

            showResults(results);
            //console.log(response);
        });
    });
});

function showResults(results) {
    $.each(results.items, function(index, item) {
        $('#search-results').append('<img id="' + item.id.videoId + '"src=' + item.snippet.thumbnails.medium.url + '><br>');
      	$('#' + item.id.videoId).click(function(){
     	 window.location.href = 'https://www.youtube.com/watch?v=' + item.id.videoId;
     	}); 
    });

}

function init() {
    gapi.client.setApiKey('AIzaSyAAeEliIWNKfAlOjtTFoEfGoTtqt_RAF0I');
    gapi.client.load("youtube", "v3", function() {
        //yt api is ready
    });
}
