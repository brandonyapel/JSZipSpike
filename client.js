
var myApp = angular.module('myApp', []);

myApp.controller('JSZipController', ['$http', function ($http) {
    console.log('JSZipController is running');
    var self = this;

    self.zip = function () {
        var zip = new JSZip();
        zip.file("client.js", "console.log('hello')\n");
        var styles = zip.folder("styles");
        styles.file("styles.css","");
        zip.file("index.html","<h1>Hello World!</h1>")
        zip.generateAsync({ type: "blob" })
            .then(function (content) {
                // see FileSaver.js
                saveAs(content, "public.zip");
            });
    }


}]);