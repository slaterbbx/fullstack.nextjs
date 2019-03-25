import * as express from 'express';
import * as next from 'next';

// import bodyParser from 'body-parser';
import * as graphqlHttp from 'express-graphql';
import { buildSchema } from 'graphql';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dir: './client', dev });
const handle = app.getRequestHandler();
const port = parseInt(process.env.PORT, 10) || 3000;

app.prepare().then(() => {

	const server = express();
	
	// All graphQL stuff is working but I will add examples in future updates
	// server.use(bodyParser.json());
	server.use('/graphql', graphqlHttp({
		schema: buildSchema(`
			type RootQuery {
				savedNumbers: [Int!]
			}

			type RootMutation {
				addNumber: Int
			}

			schema {
				query: RootQuery,
				mutation: RootMutation
			}
		`),
		rootValue: {
			savedNumbers: () => {
				return [10, 12, 23];
			},
			addNumber: (number) => {
				return number;
			}
		},
		// dev only
		graphiql: true
	}))
    
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