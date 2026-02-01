# SaaS Analytics Dashboard

Projeto de portfólio demonstrando:

- Next.js (App Router)
- Server Components
- SSR + Client Components
- Autenticação (NextAuth placeholder)
- Gráficos com Chart.js
- Layout profissional com Tailwind

Nota: o projeto foi desenvolvido e testado localmente com Next.js 16 (App Router). O README menciona Next.js 14 originalmente — se preferir manter a versão 14 para apresentação, posso reverter, mas a versão atual é compatível e segura.

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

Como rodar (local):

1. Instale dependências:

```bash
npm install
```

2. Rode o modo de desenvolvimento:

```bash
npm run dev
```

3. Abra no navegador:

```
http://localhost:3000
```

Configuração de autenticação:

- Copie `.env.local.example` para `.env.local` e preencha `GITHUB_ID`, `GITHUB_SECRET` e `NEXTAUTH_SECRET`.
- Para gerar um `NEXTAUTH_SECRET` seguro (PowerShell):

```powershell
node -e "console.log(require('crypto').randomBytes(48).toString('hex'))"
```

- Não comite `/.env.local` — ele já está no `.gitignore`.

Deploy (Vercel) — passos rápidos:

1. Crie um projeto no Vercel e conecte ao repositório GitHub.
2. Em Project Settings → Environment Variables, adicione `GITHUB_ID`, `GITHUB_SECRET` e `NEXTAUTH_SECRET` com os valores apropriados.
3. Configure `NEXTAUTH_URL` para o domínio do deploy (ex.: `https://seu-projeto.vercel.app`).
4. Deploy automático será feito a cada push para `main` (ou configure a branch desejada).

Segurança e boas práticas:

- Nunca comite arquivos de ambiente com segredos.
- Use GitHub Secrets / Vercel Environment Variables para produção.
- Se for apresentar como portfólio, mantenha `GITHUB_ID`/`GITHUB_SECRET` apenas em ambiente de deploy ou use um provedor de demo.

Observações finais:

- A autenticação está configurada em `lib/auth.ts` com o provedor GitHub como exemplo; a rota de autenticação está em `app/api/auth/[...nextauth]/route.ts`.
- Os gráficos usam `chart.js` via `react-chartjs-2` em `components/StatsCard.tsx`.
- Componentes interativos que dependem do cliente estão marcados com `"use client"`.

Se quiser, eu atualizo este arquivo com um passo-a-passo de criação do OAuth App no GitHub ou adiciono um Workflow de CI/CD para deploy automático?
