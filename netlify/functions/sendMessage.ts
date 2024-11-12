import { Handler, HandlerEvent } from '@netlify/functions';
import fetch from 'node-fetch';

const ERROR_500_RESPONSE = {
  statusCode: 500,
  body: JSON.stringify({ message: 'Wrong env' }),
  headers: { 'content-type': 'application/json' },
};

const ERROR_501_RESPONSE = {
  statusCode: 501,
  body: JSON.stringify({ message: 'Not Implemented' }),
  headers: { 'content-type': 'application/json' },
};

const handler: Handler = async (event: HandlerEvent) => {
  const { DISCORD_HOOK_URL, CORS_ORIGIN } = process.env;
  if (!DISCORD_HOOK_URL || !CORS_ORIGIN) return ERROR_500_RESPONSE;
  if (event.httpMethod !== 'POST') return ERROR_501_RESPONSE;

  const headers = {
    'Access-Control-Allow-Origin': CORS_ORIGIN,
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST',
  };

  let error;
  try {
    await fetch(DISCORD_HOOK_URL, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: event.body,
      }),
      method: 'POST',
    });
  } catch (err) {
    console.log({ err });
    error = err;
  }
  if (error)
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Something went wrong', details: error }),
      headers: { 'content-type': 'application/json' },
    };
  return {
    headers,
    statusCode: 200,
    body: JSON.stringify({ body: event.body }),
  };
};

export { handler };
