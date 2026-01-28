'use client'
import React from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend)

export default function StatsCard({ title, value }: { title: string; value: string }) {
  const data = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    datasets: [
      {
        label: title,
        data: [12, 19, 8, 14, 18, 24],
        borderColor: 'rgba(99,102,241,1)',
        backgroundColor: 'rgba(99,102,241,0.1)',
        tension: 0.3,
      },
    ],
  }

  return (
    <div className="bg-white p-4 rounded shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">{title}</p>
          <p className="text-xl font-semibold">{value}</p>
        </div>
      </div>
      <div className="mt-4">
        <Line data={data} />
      </div>
    </div>
  )
}
