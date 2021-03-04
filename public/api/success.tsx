import { Handler } from 'aws-lambda';

export const handler: Handler = (e, ctx, cb) =>
  cb(null, {
    statusCode: 204,
    body: '',
  });