const http = require("http");
const fs=require("fs");
// web server bna dega
const myserver = http.createServer((req, res) => {

    // console.log(req.headers);
    // console.log("NEW REQ REC");
    // res.end("hello from server again");
    //CREATE SERVER 
    const log='${Date.now()}:${req.url} new req received\n'
    fs.appendFile("contact.txt",log,(err,data) =>{
        switch(req.url){
            case "/":
                res.end("homepage");
                break;
                case"about":
                res.end("error 404 found");
                default:
                    res.end("i am manisha");
        }
    });
});
myserver.listen(8000,() =>console.log("Server Started"));
