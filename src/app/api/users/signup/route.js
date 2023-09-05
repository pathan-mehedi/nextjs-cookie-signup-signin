import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

connect();

export async function POST(res, req) {
    try {
        const reqBody = await req.body.json();
        const { username, email, password } = reqBody;

        console.log(reqBody);

        //check if user exists
        const user = await User.findOne({ email: email });
        if (user) {
            return NextResponse.json(
                { error: "User already exists" },
                { status: 400 }
            );
        }

        //hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        //create new user
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        });
        const savedUser = await newUser.save();
        console.log(savedUser);

        return NextResponse.redirect("/api/users/login").json({
            savedUser,
            message: "User created successfully",
            success: true,
        });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}
