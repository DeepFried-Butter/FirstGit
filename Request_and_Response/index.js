// const http=require('http'); 

// const server= http.createServer ((req, res)=>{ 
//     console.log("server is created"); 
//     //req.url,req.headers 
//     res.setHeader('Content-Type', 'text/html'); 
//     if(req.url=='/') { 
//         res.statusCode=200; //ok 
//         res.end("<h1>Hello World</h1>");
//     }
//     else{ 
//         if(req.url==='/home'){ 
//             res.statusCode=200; //ok 
//             res.end("<h1>Welcome home</h1>");
//         }
//         else if(req.url==='/about'){ 
//             res.statusCode=200; //ok 
//             res.end("<h1>Welcome to About Us</h1>"); 
//         }
//         else if(req.url==='/node'){ 
//             res.statusCode=200; //ok 
//             res.end("<h1>Welcome to my Node Js project</h1>"); 
//         }
//         else{ 
//             res.statusCode=404; //not found 
//             res.end("<h1>Page Not Found</h1>");
//         }
//     }
// })

// let port=3000; 
// server.listen(port, () => { 
// console.log("server is running") ;
// });



const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Request URL:", req.url); // Log the requested URL for debugging

  // Set the Content-Type header to text/html
  res.setHeader("Content-Type", "text/html");

  // Handle different URLs
  if (req.url === "/home") {
    res.statusCode = 200; // OK
    res.end("<h1>Welcome home</h1>");
  } else if (req.url === "/about") {
    res.statusCode = 200; // OK
    res.end("<h1>Welcome to About Us</h1>");
  } else if (req.url === "/node") {
    res.statusCode = 200; // OK
    res.end("<h1>Welcome to my Node Js project</h1>");
  } else {
    res.statusCode = 404; // Not Found
    res.end("<h1>Page Not Found</h1>");
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});