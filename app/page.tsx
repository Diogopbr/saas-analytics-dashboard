import Link from 'next/link'
import React from 'react'

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold">SaaS Analytics Dashboard</h1>
      <p className="mt-4 text-slate-600">Um projeto de portfólio demostrando Next.js 14, Server Components, SSR, autenticação e gráficos.</p>

      <div className="mt-8">
        <Link href="/dashboard" className="px-4 py-2 bg-indigo-600 text-white rounded">Abrir Dashboard</Link>
      </div>
    </main>
  )
}
