const http=require("http");
const fs=require("fs")
const server=http.createServer((req,res)=>{
    //url,method

    const url=req.url;
    const method=req.method;
    if(req.url==='/'){
        //form

        res.setHeader('content-type','text/html');
        res.end(
            `
            <form action="/message" method="POST">
                <label>Name:</label>
                <input type="text" name="username"></input>
                <button type="submit">Add</button>
            </form>
            `
        );
    }else{
        if(req.url==="/message"){
        let body=[];
        req.on("data",(chunks)=>{
            body.push(chunks);
        });
        req.on('end',()=>{
            let buffer=Buffer.concat(body);
            console.log(buffer);
            let formData=buffer.toString();
            console.log(formData);
            const formValues=formData.split('=')[1];
            fs.writeFile('formValues.txt',formValues, (err)=>{
                res.statusCode=302;
                res.setHeader('Location','/');
                res.end();
                
            })
        });
        }
    }
});
server.listen(3000,()=>{
    console.log("server is running");
});