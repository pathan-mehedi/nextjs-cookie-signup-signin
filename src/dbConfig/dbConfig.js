import mongoose from "mongoose";
require("dotenv").config();


export async function connect() {
    try {
        const uri = process.env.MONGODB_URI;
        await mongoose.connection(uri, {});
        const connection = mongoose.connection;

        connection.on("connected", () => {
            console.log("MongoDB database connection established successfully");
        });

        connection.on("error", (error) => {
            console.log("Error connecting to database: 1", error);
            process.exit(1);
        });
    } catch (error) {
        console.log("Error connecting to database: 2", error);
        console.log(error);
    }
}
