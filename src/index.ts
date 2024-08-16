import express from 'express';
import dotenv from 'dotenv';
import Middleware from './middleware/middleware';
import routes from './routes/routes';
import cors from 'cors'
dotenv.config();

function main() {
  const app = express()
  const middleware = new Middleware()

  app.use(cors())
  app.use(express.json())
  app.use(middleware.check);
  app.use(routes);
  app.set('trust proxy', 'loopback')

  app.listen(process.env.PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${process.env.PORT}`);
  });
}

main()

