// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const crypto = require('crypto');

export default function generateKey(req, res) {
  res.status(200).json({ privateKey: crypto.randomBytes(32).toString('hex') });
}
