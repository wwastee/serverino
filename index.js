const http=require("http");
const url = require("url")
const host = 'localhost'
const port = '8080';
const pagehttp = function(req,response)
{
console.log('metodo' + req.method);
console.log("path:"+req.url);
url_parts = url.parse(req.url, true);
console.log(url_parts);
query = url_parts.query;
console.log(query);

if(url_parts.query.tipo==1 && url_parts.query.message1=='ciao'){
response.writeHead(200);
response.end(url_parts.query.message1);
} else if (url_parts.query.tipo==1 && url_parts.query.message2=='fanculo'){
    response.writeHead(200);
    response.end('caccadura');
}
}

const server = http.createServer(pagehttp);
server.listen(port,host,()=>{
    console.log(`server is running on http://${host}:${port}`);
});