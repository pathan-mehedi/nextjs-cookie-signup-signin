import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { TokenCookie } from "@/app/util/TokenCookie";

export async function POST(req) {
    const JSON = await req.json();
    let email = JSON["email"];
    let password = JSON["password"];

    if (email === "email@website.com" && password === "1234") {
        let cookie = await TokenCookie(email);
        return NextResponse.json(
            { status: 200, message: "Login Successful" },
            { status: 200, headers: cookie }
        );
    } else {
        return NextResponse.json({
            status: 401,
            message: "Login Failed, Try Again",
        });
    }
}

export async function GET(res) {
    cookies().delete("token");
    return NextResponse.redirect("/login");
}
