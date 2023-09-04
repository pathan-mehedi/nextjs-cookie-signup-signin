import { NextResponse } from "next/server";
import { VerifyToken } from "./JWTHelper";

export async function CheckCookieAuth(req) {
    try {
        let token = req.cookies.get("token");
        let payload = await VerifyToken(token);
        const requestHeader = new Headers(req.headers);
        requestHeader.set("email", `${payload.email}`);

        return NextResponse.next({
            headers: requestHeader,
        });
    } catch (error) {
        return NextResponse.redirect(new URL("/login", req.url));
    }
}
