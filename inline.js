const jsdom = require("jsdom");
const fs = require("fs");
const ncp = require('ncp').ncp;

const { JSDOM } = jsdom;
ncp.limit = 16;

JSDOM.fromFile("ArticleTemplates/articleTemplate.html", {}).then(dom => {
    const $ = require('jquery')(dom.window);
    $("link").each(function () {
        var href = $(this).attr('href');
        var css = fs.readFileSync('ArticleTemplates/' + href);
        var style = dom.window.document.createElement('style');
        style.type = 'text/css';
        style.appendChild(dom.window.document.createTextNode(css));
        dom.window.document.head.appendChild(style);
    });

    $("script").each(function () {
        var src = $(this).attr('src');
        var js = fs.readFileSync('build/' + src);
        var script = dom.window.document.createElement('script');
        script.innerHTML = js;
        dom.window.document.body.appendChild(script);
    });

    fs.writeFile('build/articleTemplate.html', dom.serialize(), function (error){
        if (error) throw error;
    });
});

ncp('ArticleTemplates/articleTemplateContainer.html', 'build/articleTemplateContainer.html', function (err) {
    if (err) {
      return console.error(err);
    }
});