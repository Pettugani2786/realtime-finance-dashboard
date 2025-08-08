import React, { useEffect, useRef, useState } from 'react'
import QuoteChart from './components/QuoteChart'

const WS_URL = import.meta.env.VITE_WS_URL || 'ws://localhost:8080'
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/dev/quotes'

export default function App() {
  const [quotes, setQuotes] = useState([])
  const wsRef = useRef(null)

  useEffect(() => {
    try {
      const ws = new WebSocket(WS_URL)
      wsRef.current = ws
      ws.onmessage = (evt) => {
        const msg = JSON.parse(evt.data)
        if (msg.type === 'quote') setQuotes(qs => [...qs.slice(-99), msg.payload])
      }
      return () => ws.close()
    } catch {}
  }, [])

  useEffect(() => {
    const id = setInterval(async () => {
      try {
        const res = await fetch(API_URL)
        const data = await res.json()
        if (Array.isArray(data) && data.length) setQuotes(qs => [...qs.slice(-90), ...data])
      } catch {}
    }, 5000)
    return () => clearInterval(id)
  }, [])

  return (
    <div style={{ fontFamily: 'Inter, Arial, sans-serif', margin: 20 }}>
      <h1 style={{ marginBottom: 8 }}>Real-Time Financial Data Visualization Dashboard</h1>
      <p style={{ marginTop: 0 }}>Live quotes via WebSocket with REST fallback. Configure endpoints in <code>.env</code>.</p>
      <QuoteChart data={quotes} />
      <div style={{ marginTop: 16 }}><strong>Last Update:</strong> {quotes.length ? new Date(quotes[quotes.length-1].ts).toLocaleTimeString() : '—'}</div>
    </div>
  )
}