const http = require("http") //declaring http
const port = 3000 //declaring a port

const server = http.createServer((req, res) => {
const { headers } =  req;
console.log("headers: " );
console.log(headers);


res.end();
});


server.listen(port, ()=>{
console.log(`sever is now ready to listen to port: ${port}`);
});




