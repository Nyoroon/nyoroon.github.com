gitweb = "https://api.github.com/repos/Nyoroon/nyoroon.github.com/contents/"
var pages;

$.getJSON(gitweb + "pages", function(data) {
    pages = [];
    for(var i in data) {
        file = data[i];
        filename = file["name"]
        pages.push(filename.substr(0, filename.length - 3))
        //$.getJSON(gitweb + "pages/" + file, function(page_content) {
        //    console.log(page_content);
        //});
    }
});

var pages_html = $("<div id='pages'>");
    
pages_html.append($("<h1>Pages</h1>"));
for(var page in pages) {
    pages_html.append($("<li>" + page + "</li>"))
}
    
