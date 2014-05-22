gitweb = "https://api.github.com/repos/Nyoroon/nyoroon.github.com/contents/"
var main = $("main");
var pages = [];

$.getJSON(gitweb + "pages", function(data) {
    for(var i in data) {
        file = data[i];
        filename = file["name"]
        pages.push(filename.substr(0, filename.length - 3))
        //$.getJSON(gitweb + "pages/" + file, function(page_content) {
        //    console.log(page_content);
        //});
        pages_div = $("<div id='pages'>");
        pages_div.append($("<h1>Pages</h1>"));
        for(var page in pages) {
            pages_div.append($("<li>" + page + "</li>"))
        }
        main.append(pages_div);
    }
});

    
    
