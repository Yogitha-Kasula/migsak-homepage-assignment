import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { COOKIE_NAME, isValidToken } from "@/lib/auth";

export const metadata = { title: "Enquiries", robots: { index: false } };

type Enquiry = {
  id: string;
  created_at: string;
  name: string;
  email: string;
  phone: string | null;
  service: string;
  message: string;
};

export default async function AdminPage() {
  const store = await cookies();
  if (!isValidToken(store.get(COOKIE_NAME)?.value)) {
    redirect("/admin/login");
  }

  const { data, error } = await supabase
    .from("enquiries")
    .select("*")
    .order("created_at", { ascending: false });

  const rows = (data ?? []) as Enquiry[];

  return (
    <main className="mx-auto max-w-6xl px-5 py-10">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-900">
          Enquiries ({rows.length})
        </h1>
        <form action="/api/admin/logout" method="post">
          <button
            type="submit"
            className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            Log out
          </button>
        </form>
      </div>

      {error && (
        <p role="alert" className="mt-6 rounded-lg bg-red-50 p-3 text-red-800">
          Could not load enquiries.
        </p>
      )}

      {!error && rows.length === 0 && (
        <p className="mt-6 text-slate-600">No enquiries yet.</p>
      )}

      {rows.length > 0 && (
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-700">
              <tr>
                <th className="px-4 py-3 font-semibold">Received (IST)</th>
                <th className="px-4 py-3 font-semibold">Name</th>
                <th className="px-4 py-3 font-semibold">Email</th>
                <th className="px-4 py-3 font-semibold">Phone</th>
                <th className="px-4 py-3 font-semibold">Service</th>
                <th className="px-4 py-3 font-semibold">Message</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.id} className="border-t border-slate-200 align-top">
                  <td className="whitespace-nowrap px-4 py-3">
                    {new Date(r.created_at).toLocaleString("en-IN", {
                      timeZone: "Asia/Kolkata",
                    })}
                  </td>
                  <td className="px-4 py-3">{r.name}</td>
                  <td className="px-4 py-3">{r.email}</td>
                  <td className="px-4 py-3">{r.phone ?? "—"}</td>
                  <td className="px-4 py-3">{r.service}</td>
                  <td className="max-w-md whitespace-pre-wrap px-4 py-3">
                    {r.message}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}
