// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const pkg = require('../../package.json')

export default function handler(req, res) {
  res.status(200).json(pkg.scripts)
}
