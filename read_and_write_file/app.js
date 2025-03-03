const http=require('http')
const fs=require('fs')

const server=http.createServer((req,res)=>{

    const url=req.url;
    const method=req.method;
    
    if (req.url==='/'){

        res.setHeader('Content-Type','text/html');

        res.end(
            `
            <form action="/message" method="POST">
            <label>Name:</label>
            <input type="text" name="username">
            <button type="submit">Add</button>
            </form>
            `
            
        )
    }
    else{
        if(url==='/message'){
            res.setHeader('Content-Type','text/html');
            
            let dataChuncks=[];
            req.on('data',(chunks)=>{
                // console.log(chunks);
                dataChuncks.push(chunks);

            })

            req.on('end',()=>{
                const data=Buffer.concat(dataChuncks);
                // console.log(data.toString());
                let value=data.toString().split('=')[1];
                // console.log(value);
                fs.writeFile('formValues',value,(error)=>{
                    res.statusCode=302;
                    res.setHeader('Location','/');
                    res.end();
                })
            });
        }
        else{
            if (url==='/read'){
                fs.readFile('formValues',(err,data)=>{
                    console.log(data);
                    res.end(
                        `<h1>${data.toString()}</h1>`);
                })
            }   
        }
    }
})

server.listen(3000,()=>{
    console.log("server running")
})

