import { NextResponse } from "next/server";
import { CheckCookieAuth } from "./app/util/MiddlewareUtility";

export default async function middleware(req) {
    if (req.nextUrl.pathname.startsWith("/dashboard")) {
        return CheckCookieAuth(req);
    }
}
