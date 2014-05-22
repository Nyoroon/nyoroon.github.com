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
        main.append($("<h1>Pages</h1>"));
        for(var page in pages) {
            main.append($("<li>" + page + "</li>"))
        }
    }
});

    
    
