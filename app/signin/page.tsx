'use client'
import React from 'react'
import { signIn } from 'next-auth/react'

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow">
        <h1 className="text-xl font-semibold mb-4">Entrar</h1>
        <button onClick={() => signIn('github')} className="px-4 py-2 bg-indigo-600 text-white rounded">
          Entrar com GitHub
        </button>
      </div>
    </div>
  )
}
