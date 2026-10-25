"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
    const router = useRouter();
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setLoading(true);
        setError("");
        try {
            const res = await fetch("/api/admin/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ password }),
            });
            if (!res.ok) {
                const json = await res.json().catch(() => ({}));
                throw new Error(json.error || "Login failed.");
            }
            router.push("/admin");
            router.refresh();
        } catch (err) {
            setError(err instanceof Error ? err.message : "Login failed.");
            setLoading(false);
        }
    }

    return (
        <main className="flex min-h-screen items-center justify-center bg-slate-50 px-5">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-sm rounded-xl border border-slate-200 bg-white p-6"
            >
                <h1 className="text-xl font-bold text-slate-900">Enquiries login</h1>
                <label htmlFor="password" className="mt-5 block font-medium text-slate-800">
                    Password
                </label>
                <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                    className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
                {error && (
                    <p role="alert" className="mt-3 text-sm text-red-700">
                        {error}
                    </p>
                )}
                <button
                    type="submit"
                    disabled={loading || password.length === 0}
                    className="mt-5 w-full rounded-full bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 disabled:opacity-60"
                >
                    {loading ? "Checking..." : "Log in"}
                </button>
            </form>
        </main>
    );
}