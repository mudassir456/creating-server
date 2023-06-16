let http = require("http")

let server =http.createServer(function(req,res){
let {url,method} = req;

if (url === "/"){
    res.setHeader("content-type" , "text/html");
    res.statusCode = 200;
    res.write("<h1>welcome to the base url </h1>");
    return res.end()
} else if (url=== "/students" && method === "GET"){
    let students= ["mudassir","khalid","alikhan"]
    res.setHeader("content-type","html/text");
    res.statusCode = 200;
    res.write("<ul>");
    for (let i=0;i<=students.length;i++){
        res.write(`<li>${students[i]}</li>`)
    }
    res.write("</ul>");
    return res.end()
}else {
    res.statusCode = 404;
    res.write("error,no route found ")
};

})
server.listen(4000)