import express from 'express';
import dotenv from 'dotenv';
import router from './routes/routes'
import Middleware from './middleware/middleware';
dotenv.config();

function main() {
  const app = express()
  const middleware = new Middleware()
  
  app.use(middleware.check);
  app.use(router);
  app.set('trust proxy', 'loopback')

  app.listen(process.env.PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${process.env.PORT}`);
  });
}

main()

