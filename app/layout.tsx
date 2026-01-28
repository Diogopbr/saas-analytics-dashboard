import './globals.css'
import React from 'react'

export const metadata = {
  title: 'SaaS Analytics Dashboard',
  description: 'Portfolio demo — Next.js 14 + Server Components',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-slate-50 text-slate-900">
        {children}
      </body>
    </html>
  )
}
