import { NextResponse } from "next/server";
import { COOKIE_NAME } from "@/lib/auth";

export async function POST(request: Request) {
    const res = NextResponse.redirect(new URL("/admin/login", request.url), 303);
    res.cookies.delete(COOKIE_NAME);
    return res;
}