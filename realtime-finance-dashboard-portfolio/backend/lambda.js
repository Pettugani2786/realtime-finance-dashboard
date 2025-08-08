import { randomUUID } from 'node:crypto'
export const getQuotes = async () => {
  const now = Date.now()
  const base = 100 + Math.random() * 20
  const points = Array.from({ length: 10 }, (_, i) => ({
    id: randomUUID(),
    symbol: 'DEMO',
    price: Number((base + (Math.random() - 0.5)).toFixed(2)),
    ts: now - (10 - i) * 1000
  }))
  return { statusCode: 200, headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }, body: JSON.stringify(points) }
}