import EnquiryForm from "./components/EnquiryForm";

const services = [
  {
    title: "Websites and web apps",
    text: "Company websites, dashboards and portals, built to load fast and be found on search.",
  },
  {
    title: "Mobile apps",
    text: "iOS and Android apps for customers, field teams and members, built cross-platform and shipped to both stores.",
  },
  {
    title: "Automation and integrations",
    text: "WhatsApp flows, AI assistants and links to Razorpay, Stripe, Zoho, Tally and ERPNext, so work stops moving by copy and paste.",
  },
];

const steps = [
  {
    title: "Scope",
    text: "We map the users, screens and integrations. You get a written scope and a fixed quote sized to your budget.",
  },
  {
    title: "Build in phases",
    text: "Short cycles, each ending in something you can click through.",
  },
  {
    title: "Launch",
    text: "Store submission, hosting, monitoring and a handover your team can follow.",
  },
  {
    title: "Support",
    text: "An optional monthly plan for fixes, updates and new features.",
  },
];

const promises = [
  "A reply to every message within one working day",
  "A working demo every two weeks",
  "Code, designs and accounts owned by you from day one",
  "Any change to scope quoted in writing before we start it",
];

const work = [
  {
    name: "Recurva",
    text: "A retention platform for gyms and studios. It finds members who are slipping and gives staff one-tap WhatsApp follow-ups.",
    stack: "Flutter, Node.js, PostgreSQL",
    href: "https://recurva.in",
  },
  {
    name: "Prathik Softnet",
    text: "A 20+ page company website for an IT infrastructure partner in Bengaluru and Delhi, set up to be found on search.",
    stack: "React, Tailwind CSS, Vercel",
    href: "https://www.prathiksoftnet.com",
  },
  {
    name: "QuietPass (in progress)",
    text: "A privacy-first household coordination app for iOS and Android.",
    stack: "Flutter, FastAPI, PostgreSQL",
    href: null,
  },
];

const buttonClass =
  "inline-block rounded-full bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700";

export default function Home() {
  return (
    <>
      <header className="bg-white border-b border-slate-200">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
          <a href="#" className="text-xl font-bold tracking-widest text-slate-900">
            MIGSAK
          </a>
          <nav className="flex items-center gap-6 text-sm font-medium text-slate-700">
            <a href="#services" className="hidden sm:inline hover:text-blue-700">
              Services
            </a>
            <a href="#process" className="hidden sm:inline hover:text-blue-700">
              How it works
            </a>
            <a href="#enquiry" className={buttonClass + " !py-2"}>
              Start a project
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="bg-slate-900 text-white">
          <div className="mx-auto max-w-5xl px-5 py-16 sm:py-24">
            <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
              Websites, mobile apps and automation for your business.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-slate-300">
              Migsak designs and builds websites, mobile apps and the backend
              behind them, then connects them to your payments, WhatsApp, CRM
              and ERP. One team from the first screen to production.
            </p>
            <p className="mt-3 text-slate-300">
              Any budget. We can start with a single feature and grow from there.
            </p>
            <a href="#enquiry" className={buttonClass + " mt-8"}>
              Start a project
            </a>
            <ul className="mt-10 flex flex-wrap gap-3 text-sm text-slate-200">
              <li className="rounded-full border border-slate-600 px-4 py-1.5">
                Fixed-price phases
              </li>
              <li className="rounded-full border border-slate-600 px-4 py-1.5">
                A working demo every two weeks
              </li>
              <li className="rounded-full border border-slate-600 px-4 py-1.5">
                Reply within one working day
              </li>
            </ul>
          </div>
        </section>

        <section id="services" className="bg-slate-50">
          <div className="mx-auto max-w-5xl px-5 py-16">
            <h2 className="text-3xl font-bold text-slate-900">What we build</h2>
            <p className="mt-2 text-slate-600">
              Apps and websites that do real work.
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="rounded-xl border border-slate-200 bg-white p-6"
                >
                  <h3 className="text-lg font-semibold text-slate-900">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-slate-600">{s.text}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-slate-600">
              <strong>CRM</strong> is a tool for tracking customers and leads.{" "}
              <strong>ERP</strong> is software that runs day-to-day operations
              such as accounts and inventory.
            </p>
          </div>
        </section>

        <section id="process" className="bg-white">
          <div className="mx-auto max-w-5xl px-5 py-16">
            <h2 className="text-3xl font-bold text-slate-900">
              From first call to live product
            </h2>
            <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((s, i) => (
                <li key={s.title}>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 font-semibold text-white">
                    {i + 1}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold text-slate-900">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-slate-600">{s.text}</p>
                </li>
              ))}
            </ol>
            <h3 className="mt-12 text-xl font-semibold text-slate-900">
              What you can hold us to
            </h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {promises.map((p) => (
                <li key={p} className="flex gap-2 text-slate-700">
                  <span aria-hidden="true" className="text-blue-600">
                    ✓
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-slate-50">
          <div className="mx-auto max-w-5xl px-5 py-16">
            <h2 className="text-3xl font-bold text-slate-900">
              Work we have shipped
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {work.map((w) => (
                <div
                  key={w.name}
                  className="rounded-xl border border-slate-200 bg-white p-6"
                >
                  <h3 className="text-lg font-semibold text-slate-900">
                    {w.name}
                  </h3>
                  <p className="mt-2 text-slate-600">{w.text}</p>
                  <p className="mt-3 text-sm text-slate-600">
                    Built with {w.stack}
                  </p>
                  {w.href && (
                    <a
                      href={w.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-block text-sm font-semibold text-blue-700 underline"
                    >
                      Visit site
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="enquiry" className="bg-white">
          <div className="mx-auto max-w-2xl px-5 py-16">
            <h2 className="text-3xl font-bold text-slate-900">
              Have an app or a manual process you want to fix?
            </h2>
            <p className="mt-3 text-slate-600">
              Tell us what you are trying to build and roughly what you want to
              spend. Small budgets are welcome, and we reply within one working
              day.
            </p>
            <div className="relative mt-8">
              <EnquiryForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 text-slate-300">
        <div className="mx-auto max-w-5xl px-5 py-10 text-sm">
          <p className="text-lg font-bold tracking-widest text-white">MIGSAK</p>
          <p className="mt-2">Bengaluru, India</p>
          <p>contact@migsak.com</p>
          <p className="mt-6 text-slate-400">
            This page is an assignment redesign for evaluation. It is not the
            official Migsak website.
          </p>
        </div>
      </footer>
    </>
  );
}