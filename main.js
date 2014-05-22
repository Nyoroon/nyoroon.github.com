gitweb = "https://api.github.com/repos/Nyoroon/nyoroon.github.com/contents/"

$.getJSON(gitweb + "pages", function(data) {
    pages = [];
    for(var i in data) {
        file = data[i];
        filename = file["name"]
        console.log(filename.substr(0, filename.length - 3))
        //$.getJSON(gitweb + "pages/" + file, function(page_content) {
        //    console.log(page_content);
        //});
    }
});
