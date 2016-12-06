var request = require('request');
var http = require('http');

var argv = require('minimist')(process.argv.slice(2));

var thumper = "http://192.168.1.100:3000"
if ("thumper" in argv) {
  thumper = "http://" + argv["thumper"] + ":3000"
}

console.log("Sending to REST interface @" + thumper)

http.createServer(function (req, resp) {
  req.pipe(request(thumper + req.url)).pipe(resp)
  console.log("Piping request: " + req.method + " | to " + req.url)

  req.on('data', function(chunk) {
    console.log(chunk.toString());
  });

}).listen(3000);
