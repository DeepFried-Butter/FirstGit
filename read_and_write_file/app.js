const http = require('http');
const routes=require('./routes')

const server = http.createServer(routes);

server.listen(3000, () => {
    console.log('Server running on port 3000');
});










// const http=require('http')
// const fs=require('fs');
// const { error } = require('console');

// const server=http.createServer((req,res)=>{

//     const url=req.url;
//     const method=req.method;
    
//     if (req.url==='/'){
//         fs.readFile('formValues', 'utf8', (err, data) => {
//             if (err) {
//                 console.error(err);
//                 data = ''; // If the file doesn't exist or is empty, start with an empty string
//             }

//             // Split the data into an array of messages
//             let messages = data.split('\n');
//             if(data){
//             messages = data.toString().split('=')[-1];
//             }


//             // Display the form with messages at the top
//             res.setHeader('Content-Type', 'text/html');
//             res.end(`
//                 <h1>${messages}</h1>
 
//                 <form action="/message" method="POST">
//                     <label>Name:</label>
//                     <input type="text" name="username">
//                     <button type="submit">Add</button>
//                 </form>
//             `);
//         });
//     }
//     else{
//         if(url==='/message'){
//             res.setHeader('Content-Type','text/html');
            
//             let dataChuncks=[];
//             req.on('data',(chunks)=>{
//                 // console.log(chunks);
//                 dataChuncks.push(chunks);

//             })

//             req.on('end',()=>{
//                 const data=Buffer.concat(dataChuncks);
//                 // console.log(data.toString());
//                 let value=data.toString().split('=')[1];
//                 // console.log(value);
//                 fs.writeFile('formValues',value,(error)=>{
//                     res.statusCode=302;
//                     res.setHeader('Location','/');
//                     res.end();
//                 })
//                 console.log(value);
//             });
//         }
//     }
// })

// server.listen(3000,()=>{
//     console.log("server running")
// })

