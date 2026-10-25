# migsak-home

## Project Architecture

```text
migsak-home/
├── src/app/
│   ├── page.tsx              homepage (done, to check)
│   ├── layout.tsx            page title and description
│   ├── globals.css           base styles
│   ├── components/
│   │   └── EnquiryForm.tsx   form (to create)
│   ├── api/
│   │   ├── enquiries/route.ts   saves a form submission (to create)
│   │   └── admin/login/route.ts checks password, sets cookie (to create)
│   └── admin/
│       ├── page.tsx          table of enquiries (to create)
│       └── login/page.tsx    login screen (to create)
├── src/lib/
│   └── supabase.ts           database connection (to create)
├── .env.local                secrets, never on GitHub
└── README.md                 setup guide (to create)
```

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Configure environment variables in `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
ADMIN_PASSWORD=
```

3. Run the development server:
```bash
npm run dev
```
