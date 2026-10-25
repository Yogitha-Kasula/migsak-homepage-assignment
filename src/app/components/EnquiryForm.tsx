"use client";

import { useState } from "react";

const SERVICES = [
  "Website or web app",
  "Mobile app",
  "Automation or integration",
  "Not sure yet",
];

type Status = "idle" | "loading" | "success" | "error";
type Fields = Record<string, string>;

function validate(d: Fields): Fields {
  const e: Fields = {};
  if (d.name.trim().length < 2) e.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email.trim()))
    e.email = "Please enter a valid email.";
  if (d.phone.trim() && !/^[0-9+\-\s()]{7,20}$/.test(d.phone.trim()))
    e.phone = "Please enter a valid phone number.";
  if (!d.service) e.service = "Please choose a service.";
  if (d.message.trim().length < 10)
    e.message = "Please write at least 10 characters.";
  return e;
}

const inputClass =
  "mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200";

export default function EnquiryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Fields>({});
  const [serverError, setServerError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Fields;

    const found = validate(data);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus("loading");
    setServerError("");
    try {
      const res = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        throw new Error(json.error || "Something went wrong. Please try again.");
      }
      form.reset();
      setStatus("success");
    } catch (err) {
      setServerError(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-xl border border-green-300 bg-green-50 p-6 text-green-900"
      >
        <p className="font-semibold">Thank you. We have received your enquiry.</p>
        <p className="mt-1">We reply to every message within one working day.</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm font-semibold underline"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <label htmlFor="name" className="font-medium text-slate-800">
          Name
        </label>
        <input id="name" name="name" type="text" autoComplete="name" className={inputClass} />
        {errors.name && <p className="mt-1 text-sm text-red-700">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="font-medium text-slate-800">
          Email
        </label>
        <input id="email" name="email" type="email" autoComplete="email" className={inputClass} />
        {errors.email && <p className="mt-1 text-sm text-red-700">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="font-medium text-slate-800">
          Phone <span className="font-normal text-slate-500">(optional)</span>
        </label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" className={inputClass} />
        {errors.phone && <p className="mt-1 text-sm text-red-700">{errors.phone}</p>}
      </div>

      <div>
        <label htmlFor="service" className="font-medium text-slate-800">
          What do you need?
        </label>
        <select id="service" name="service" defaultValue="" className={inputClass}>
          <option value="" disabled>
            Choose one
          </option>
          {SERVICES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        {errors.service && <p className="mt-1 text-sm text-red-700">{errors.service}</p>}
      </div>

      <div>
        <label htmlFor="message" className="font-medium text-slate-800">
          Tell us about your project
        </label>
        <textarea id="message" name="message" rows={5} className={inputClass} />
        {errors.message && <p className="mt-1 text-sm text-red-700">{errors.message}</p>}
      </div>

      {/* Honeypot: hidden from people, bots fill it */}
      <div aria-hidden="true" className="absolute left-[-9999px]">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {status === "error" && (
        <p role="alert" className="rounded-lg bg-red-50 p-3 text-red-800">
          {serverError}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-full bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 disabled:opacity-60"
      >
        {status === "loading" ? "Sending..." : "Start a project"}
      </button>
    </form>
  );
}