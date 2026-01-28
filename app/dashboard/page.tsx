import React from 'react'
import Sidebar from '../../components/Sidebar'
import DashboardStats from '../../components/DashboardStats'

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex-1 p-8">
        <h2 className="text-2xl font-semibold">Visão Geral</h2>
        <DashboardStats />
      </div>
    </div>
  )
}
