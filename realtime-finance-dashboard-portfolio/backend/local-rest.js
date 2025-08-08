import http from 'http'
import { randomUUID } from 'node:crypto'
const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url.startsWith('/dev/quotes')) {
    const now = Date.now()
    const base = 100 + Math.random() * 20
    const points = Array.from({ length: 5 }, (_, i) => ({
      id: randomUUID(), symbol: 'DEMO', price: Number((base + (Math.random()-0.5)).toFixed(2)), ts: now - i*1000
    }))
    res.setHeader('Content-Type', 'application/json')
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.end(JSON.stringify(points))
    return
  }
  res.statusCode = 404
  res.end('Not Found')
})
server.listen(3000, () => console.log('Local REST server on http://localhost:3000/dev/quotes'))