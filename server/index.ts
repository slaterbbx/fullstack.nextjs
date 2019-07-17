import express from 'express';
import next from 'next';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dir: './client', dev: true});
const handle = app.getRequestHandler();
const port = parseInt(process.env.PORT, 10) || 3000;

app.prepare().then(() => {

	const server = express();
    
	server.get('*', (req, res) => {
		return handle(req, res);
	})

	server.listen(port, (err) => {
		if (err) throw err;
		if (dev) console.log(`> Ready on http://localhost:${port}`);
	})
	
})
.catch((ex) => {
	console.error(ex.stack);
	process.exit(1);
})