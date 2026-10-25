# Migsak homepage redesign (assignment)

A redesigned homepage for Migsak with a working enquiry form. Built for the Software Developer Intern assignment. It is for evaluation only and is not the official Migsak website.

## Stack
- Next.js (App Router) with TypeScript
- Tailwind CSS
- Supabase (Postgres) for storing enquiries
- Deployed on Vercel

## Features
- Responsive homepage using only content from migsak.com
- Enquiry form with client-side and server-side validation, loading, success and error states, and a honeypot field against spam bots
- Submissions saved to a Supabase table through `/api/enquiries`
- Password-protected `/admin` page listing enquiries, newest first
- Admin login with an httpOnly signed cookie, set by the server

## Run locally
1. Install dependencies: `npm install`
2. Create a Supabase project and run this SQL:
   ```sql
   create table enquiries (
     id uuid primary key default gen_random_uuid(),
     created_at timestamptz not null default now(),
     name text not null,
     email text not null,
     phone text,
     service text not null,
     message text not null
   );
   alter table enquiries enable row level security;
   ```
3. Create `.env.local` in the project root:
   ```
   SUPABASE_URL=your-project-url
   SUPABASE_SECRET_KEY=your-secret-key
   ADMIN_PASSWORD=your-admin-password
   ADMIN_SESSION_SECRET=a-long-random-string
   ```
4. Start the app: `npm run dev` and open http://localhost:3000

## Environment variables
| Name | Purpose |
|---|---|
| `SUPABASE_URL` | Supabase project URL |
| `SUPABASE_SECRET_KEY` | Server-side key used to read and write enquiries. Never exposed to the browser. |
| `ADMIN_PASSWORD` | Password for `/admin` |
| `ADMIN_SESSION_SECRET` | Secret used to sign the admin login cookie |

## How it works
- The form posts to `/api/enquiries`. The server validates every field again, then inserts a row using the Supabase secret key.
- Row level security is on and there are no public policies, so the table cannot be read from the browser.
- `/admin/login` posts the password to `/api/admin/login`. If it matches, the server sets a signed httpOnly cookie. `/admin` checks that cookie on the server before reading any data.

## Project structure
```
src/
  app/
    page.tsx                  homepage
    components/EnquiryForm.tsx
    api/enquiries/route.ts    saves a submission
    api/admin/login/route.ts  checks the password, sets the cookie
    api/admin/logout/route.ts clears the cookie
    admin/page.tsx            protected enquiries table
    admin/login/page.tsx      login form
  lib/
    supabase.ts               server-side database client
    auth.ts                   cookie signing and password check
```
