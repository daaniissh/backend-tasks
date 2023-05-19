const http = require("http");
const fs = require("fs");

const server = http.createServer((req,res) => {
  res.setHeader("Access-Control-Allow-Origin","*")
  if (req.url === "/") {
    fs.readFile("index.html", "utf8", (error, data) => {
      if (error) {
        console.log(error);
      }
      res.writeHead(200,{'Content-type':'text/html'});
      res.end(data)
    });
  }else if(req.url === "/user"){
    fs.readFile('user.json',(err,data)=>{
      if(err){console.log(err)}
      res.writeHead(200,{"Content-Type":"application/json"})
      res.end(data)
    })
  }else{
    res.writeHead(400,{"Content-Type": "text/plain"})
    res.end("Not found")
  }
});
const port  = 3001
server.listen(port,()=>{
  console.log(`Server started at ${port}`);
})