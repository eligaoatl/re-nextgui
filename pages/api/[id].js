const pkg = require('../../package.json')

export default function handler(req, res) {
    if(req.method === 'GET') {
        res.status(200).json(pkg.scripts[req.query.id])
    } else {
        res.setHeader( 'Allow', ['GET'])
        res.status(405).json({message: `Method ${req.method} not allowed!`})
    }
}
