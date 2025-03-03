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

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        // Read all messages from the file
        fs.readFile('formValues.txt', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                data = ''; // If the file doesn't exist or is empty, start with an empty string
            }

            // Split the data into an array of messages
            const messages = data.split().filter(message => message.trim() !== '');

            // Display the form with messages at the top
            res.setHeader('Content-Type', 'text/html');
            res.end(`
                <h1>Messages:</h1>
                <ul>
                    ${messages.reverse().map(message => `<li>${message}</li>`).join('')}
                </ul>
                <form action="/message" method="POST">
                    <label>Name:</label>
                    <input type="text" name="username">
                    <button type="submit">Add</button>
                </form>
            `);
        });
    } else if (url === '/message' && method === 'POST') {
        let dataChunks = [];
        req.on('data', (chunk) => {
            dataChunks.push(chunk);
        });

        req.on('end', () => {
            const data = Buffer.concat(dataChunks).toString();
            const value = data.split('=')[1];

            // Append the new message to the file
            fs.writeFile('formValues.txt', `${value}\n`, (err) => {
                if (err) {
                    console.error(err);
                    res.statusCode = 500;
                    res.end('Internal Server Error');
                    return;
                }

                // Redirect back to the home page to display the updated messages
                res.statusCode = 302;
                res.setHeader('Location', '/');
                res.end();
            });
        });
    } else {
        res.statusCode = 404;
        res.end('Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});