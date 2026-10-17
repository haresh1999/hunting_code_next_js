import * as fs from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, message } = body;

        // Create directory inside the project root
        const dirPath = path.join(process.cwd(), "contact");

        await fs.mkdir(dirPath, { recursive: true });

        // Save contact data
        const timestamp = Date.now();

        const filePath = path.join(dirPath, `${timestamp}.json`);

        await fs.writeFile(
            filePath,
            JSON.stringify({ name, email, phone, message }, null, 2),
            "utf8"
        );

        return NextResponse.json(
            {
                success: true,
                message: "Contact saved successfully",
                data: { name, email, phone, message },
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Contact save error:", error);

        return NextResponse.json(
            { success: false, message: "Failed to save contact" },
            { status: 500 }
        );
    }
}