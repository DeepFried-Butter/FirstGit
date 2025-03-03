const http=require('http')

const server=http.createServer((req,res)=>{

    if (req.url=='/'){
        res.end(`
            <h1>Hello</h1>
            <h1>This is after Nodemon</h1>
            `)
    }
});

server.listen(3000,()=>{
    console.log("server is running")
})