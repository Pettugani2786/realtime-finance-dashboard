import React, { useEffect, useRef } from 'react'
import { Chart } from 'chart.js/auto'
export default function QuoteChart({ data }) {
  const canvasRef = useRef(null)
  const chartRef = useRef(null)
  useEffect(() => {
    if (!canvasRef.current) return
    if (!chartRef.current) {
      chartRef.current = new Chart(canvasRef.current.getContext('2d'), {
        type: 'line',
        data: { labels: data.map(d => new Date(d.ts).toLocaleTimeString()),
          datasets: [{ label: 'Price', data: data.map(d => d.price) }] },
        options: { responsive: true, animation: false, scales: { x: { ticks: { maxTicksLimit: 6 } } } }
      })
    } else {
      const c = chartRef.current
      c.data.labels = data.map(d => new Date(d.ts).toLocaleTimeString())
      c.data.datasets[0].data = data.map(d => d.price)
      c.update('none')
    }
  }, [data])
  return <canvas ref={canvasRef} height="180"></canvas>
}