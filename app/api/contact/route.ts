// import * as fs from "fs/promises";
// import path from "path";
import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, message } = body;

        // Validate required fields
        if (
            typeof name !== "string" || !name.trim() ||
            typeof email !== "string" || !email.trim() ||
            typeof phone !== "string" || !phone.trim() ||
            typeof message !== "string" || !message.trim()
        ) {
            return NextResponse.json(
                {
                    success: false,
                    message: "All fields are required.",
                },
                { status: 400 }
            );
        }

        const [result] = await pool.execute(
            `INSERT INTO contacts
                (name, email, phone, message)
             VALUES (?, ?, ?, ?)`,
            [
                name.trim(),
                email.trim(),
                phone.trim(),
                message.trim(),
            ]
        );

        return NextResponse.json(
            {
                success: true,
                message: "Contact submitted successfully!",
                data: result
            },
            { status: 201 }
        );


        // // Create directory inside the project root
        // const dirPath = path.join(process.cwd(), "contact");

        // await fs.mkdir(dirPath, { recursive: true });

        // // Save contact data
        // const timestamp = Date.now();

        // const filePath = path.join(dirPath, `${timestamp}.json`);

        // await fs.writeFile(
        //     filePath,
        //     JSON.stringify({ name, email, phone, message }, null, 2),
        //     "utf8"
        // );

        // return NextResponse.json(
        //     {
        //         success: true,
        //         message: "Contact saved successfully",
        //         data: { name, email, phone, message },
        //     },
        //     { status: 200 }
        // );

    } catch (error) {

        console.error("Contact API error:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Unable to submit contact form.",
            },
            { status: 500 }
        );

        // console.error("Contact save error:", error);

        // return NextResponse.json(
        //     { success: false, message: "Failed to save contact" },
        //     { status: 500 }
        // );
    }
}