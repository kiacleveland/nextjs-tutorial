//serverless functions, or lambda functions

//req is an instance of http.IncomingMessage, plus some pre-built middlewares.
//res is an instance of http.ServerResponse, plus some helper functions.
export default function handler(req, res) {
  res.status(200).json({ text: 'Hello' });
}
//test changes for test-branch-vercel 2
