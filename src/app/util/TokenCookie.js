import { CreateToken } from "./JWTHelper";

export async function TokenCookie(email) {
    let token = await CreateToken(email);
    return {
        "set-cookie": `token=${token}; Path=/; HttpOnly; Max-Age=${process.env.JWT_EXPIRATION}; SameSite=Strict; Secure;`,
    };
}
