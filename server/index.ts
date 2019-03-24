const express = require('express');
import * as next from 'next';

// const bodyParser = require('body-parser');
// const graphqlHttp = require('express-graphql');
// const { buildSchema } = require('graphql');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dir: './client', dev });
const handle = app.getRequestHandler();
const port = parseInt(process.env.PORT, 10) || 3000;

app.prepare().then(() => {

	const server = express();
	
	// server.use(bodyParser.json());
	// server.use('/graphql', graphqlHttp({
	// 	schema: buildSchema(`
	// 		type RootQuery {
				
	// 		}

	// 		type RootMutation {

	// 		}

	// 		schema {
	// 			query: RootQuery,
	// 			mutation: RootMutation
	// 		}
	// 	`),
	// 	rootValue: {}
	// }))
    
	server.get('*', (req, res) => {
		return handle(req, res);
	})
    
	server.listen(port, (err) => {
		if (err) throw err;
		console.log(`> Ready on http://localhost:${port}`);
	})
	
})
.catch((ex) => {
	console.error(ex.stack);
	process.exit(1);
})