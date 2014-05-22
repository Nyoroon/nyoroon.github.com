gitweb = "https://api.github.com/repos/Nyoroon/nyoroon.github.com/contents/"

$.getJSON(gitweb + "/pages", function(data) {
    pages = [];
    for(var file in data) {
        $.getJSON(gitweb + "/pages/" + file, function(page_content) {
            console.log(page_content);
        });
    }
});
