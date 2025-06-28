// lambda.js
import serverlessExpress from '@vendia/serverless-express';
import { app } from './index.js'; // or wherever you defined the express app

export const handler = serverlessExpress({ app });
