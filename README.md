# SaaS Analytics Dashboard

Projeto de portfólio demonstrando:

- Next.js 14 (App Router)
- Server Components
- SSR + Client Components
- Autenticação (NextAuth placeholder)
- Gráficos com Chart.js
- Layout profissional com Tailwind

Estrutura:

saas-analytics-dashboard/
├─ app/
│  ├─ layout.tsx
│  ├─ page.tsx
│  ├─ dashboard/
│  │  └─ page.tsx
├─ components/
│  ├─ Sidebar.tsx
│  ├─ StatsCard.tsx
├─ lib/
│  └─ auth.ts
├─ public/
└─ README.md

Como rodar:

1. Instale dependências:

```bash
npm install
```

2. Rode o modo de desenvolvimento:

```bash
npm run dev
```

Configuração de autenticação:

- Copie `.env.local.example` para `.env.local` e preencha `GITHUB_ID`, `GITHUB_SECRET` e `NEXTAUTH_SECRET`.
- A rota do NextAuth está em `app/api/auth/[...nextauth]/route.ts` e as opções em `lib/auth.ts`.

Observações:
- Arquivos de estilo globais (por exemplo `globals.css`) devem estar em `app/`.
