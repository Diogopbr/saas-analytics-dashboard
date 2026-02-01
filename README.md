# SaaS Analytics Dashboard

Portfólio: painel analítico construído com Next.js (App Router), TypeScript e Tailwind.

Badges:

- Vercel: [![Vercel](https://vercel.com/button)](https://vercel.com)
- CI: ![CI](https://github.com/Diogopbr/saas-analytics-dashboard/actions/workflows/ci.yml/badge.svg)

Recursos:

- Next.js (App Router + Server Components)
- Autenticação com NextAuth (exemplo GitHub)
- Gráficos com Chart.js (`react-chartjs-2`)
- Layout responsivo com Tailwind CSS

Estrutura principal:

```
saas-analytics-dashboard/
├─ app/
│  ├─ layout.tsx
│  ├─ page.tsx
│  ├─ dashboard/page.tsx
├─ components/Sidebar.tsx
├─ components/StatsCard.tsx
├─ lib/auth.ts
├─ public/screenshots/
└─ README.md
```

Como rodar (local):

1. Instale dependências:

```bash
npm install
```

2. Rode em desenvolvimento:

```bash
npm run dev
```

3. Abra no navegador: `http://localhost:3000`

Configuração de autenticação:

- Copie `.env.local.example` para `.env.local` e preencha as variáveis `GITHUB_ID`, `GITHUB_SECRET` e `NEXTAUTH_SECRET`.
- Gere um `NEXTAUTH_SECRET` seguro (PowerShell):

```powershell
node -e "console.log(require('crypto').randomBytes(48).toString('hex'))"
```

Deploy (Vercel):

1. Crie um projeto no Vercel apontando para este repositório.
2. Adicione as Environment Variables (`GITHUB_ID`, `GITHUB_SECRET`, `NEXTAUTH_SECRET`, `NEXTAUTH_URL`).
3. Push para `main` dispara deploy automático.

Screenshots:

![Dashboard overview](public/screenshots/dashboard-1.svg)
![Charts](public/screenshots/dashboard-2.svg)
![User details](public/screenshots/dashboard-3.svg)

Licença:

Este projeto está licenciado sob a licença MIT — veja o arquivo `LICENSE`.

Arquivos importantes:

- `lib/auth.ts` — configuração do NextAuth
- `app/api/auth/[...nextauth]/route.ts` — rota de autenticação
- `components/StatsCard.tsx` — componente com Chart.js

Contribuições e melhorias planejadas:

- Ajustar conteúdos reais nos screenshots e adicionar testes end-to-end.
- Integrar deploy automático via Vercel / GitHub Actions (CI já roda build e lint).

Se quiser, eu adiciono instruções passo-a-passo para criar o OAuth App no GitHub e conectar os segredos ao Vercel.
