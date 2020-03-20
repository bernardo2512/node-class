var http = require("http");

http.createServer(function(requiscao,resposta){
    resposta.end("<h1>bem vindo ao meu site</h1><h4>teste</h4>")

}).listen(8181);
console.log("meu servidor esta rodando")

