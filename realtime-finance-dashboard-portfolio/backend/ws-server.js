import { WebSocketServer } from 'ws'
import { randomUUID } from 'node:crypto'
const wss = new WebSocketServer({ port: 8080 })
console.log('Mock WebSocket server running on ws://localhost:8080')
setInterval(() => {
  const msg = JSON.stringify({ type: 'quote', payload: { id: randomUUID(), symbol: 'DEMO', price: Number((100 + Math.random()*20).toFixed(2)), ts: Date.now() } })
  wss.clients.forEach(c => c.readyState === 1 && c.send(msg))
}, 1000)