const path=require('path');
const fs=require('fs');
const http=require('http');

const server=http.createServer((req,res) => {
    let filePath;
    if(req.url==="/" || req.url==="/index")
    {
        filePath=path.join(__dirname,"index.html");
    }
    else if(req.url==="/contact-me")
    {
        filePath=path.join(__dirname,"contact-me.html");
    }
    else if(req.url==="/about")
    {
        filePath=path.join(__dirname,"about.html");
    }
    else{
        filePath=path.join(__dirname,"404.html");
    }
    fs.readFile(filePath,'utf-8',(err,data) => {
        if(err)
        {
            res.statusCode=404;
            res.setHeader('Content-type','text/html');
        }
        else{
            res.setHeader('Content-type','text/html');
            res.end(data);
        }
    })
})

server.listen(8080,"localhost",() => {
    console.log(`Server is listening at http://localhost:8080`);
});