npm run devimport React from 'react'
import Link from 'next/link'

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r">
      <div className="p-6">
        <h3 className="text-lg font-bold">SaaS Analytics</h3>
      </div>
      <nav className="p-4">
        <ul className="space-y-2">
          <li>
            <Link href="/dashboard" className="block px-3 py-2 rounded hover:bg-slate-100">Dashboard</Link>
          </li>
          <li>
            <a className="block px-3 py-2 rounded hover:bg-slate-100">Relatórios</a>
          </li>
        </ul>
      </nav>
    </aside>
  )
}
