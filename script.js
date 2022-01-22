var p = new Ping();
var log = document.getElementById("ping-github").innerHTML;
function pinger () {
    p.ping("https://github.com", function(err, data) {
    var now = new Date();
    if (err) {
        console.log("error loading resource", now); 
        log = log + "LOST:  " + data + " " + err + " " + now.toLocaleString() + "<br>";
    } else {
        log = log + "FOUND: " + data + " " + now.toLocaleString() + "<br>";
    };
    document.getElementById("ping-github").innerHTML = log;
    });
};

pinger();
setInterval(pinger, 10000);