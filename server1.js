var chaitanya= require('http');

chaitanya.createServer(function(req,res){
    res.writeHead(200,{'Content-Type': 'text/htm;'});
    res.write('Hello Worlds!');
    res.end();
}).listen(8080);
