const fs = require('fs');

const requestHandler=(req,res)=>{
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

}
module.exports=requestHandler;