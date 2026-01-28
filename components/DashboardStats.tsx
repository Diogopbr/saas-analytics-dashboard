"use client"
import React from 'react'
import StatsCard from './StatsCard'

export default function DashboardStats() {
  return (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
      <StatsCard title="Receita" value="R$ 24.800" />
      <StatsCard title="Novos Usuários" value="1.240" />
      <StatsCard title="Churn" value="2.1%" />
    </div>
  )
}
