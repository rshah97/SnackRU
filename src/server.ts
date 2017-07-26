import * as express from 'express';
import * as path from 'path';
import * as http from 'http';

import * as readline from 'readline';

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/hello', (req: express.Request, res: express.Response) => {
    res.send(`<h1>Hello Ryan!</h1>`);
});

const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log(`Application running on localhost:${port}`));

// Graceful shutdown portion

if (process.platform === 'win32') {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.on('SIGINT', () => {
        process.emit('SIGINT');
    });
}

process.on('SIGINT', () => {
    console.log('\nSIGINT detected!');
    // close database connections before exiting the process!!
    process.exit();
});
