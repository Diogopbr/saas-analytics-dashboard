import React from 'react'
import Sidebar from '../../components/Sidebar'
import dynamic from 'next/dynamic'

const StatsCard = dynamic(() => import('../../components/StatsCard'), { ssr: false })

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex-1 p-8">
        <h2 className="text-2xl font-semibold">Visão Geral</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatsCard title="Receita" value="R$ 24.800" />
          <StatsCard title="Novos Usuários" value="1.240" />
          <StatsCard title="Churn" value="2.1%" />
        </div>
      </div>
    </div>
  )
}
