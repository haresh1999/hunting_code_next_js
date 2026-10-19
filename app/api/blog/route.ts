import { NextRequest, NextResponse } from 'next/server';
import pool from "@/lib/db";

export async function GET(request: NextRequest) {

    const param = request.nextUrl.searchParams;

    const start = Math.max(0, Number(param.get("start") ?? 0));
    const limit = Math.max(1, Number(param.get("limit") ?? 4));

    const [blogs] = await pool.execute(
        "SELECT * FROM blogs ORDER BY id ASC LIMIT ? OFFSET ?",
        [limit, start]
    );

    return NextResponse.json({
        success: true,
        data: blogs,
    });
}

// export async function POST(request: Request) {
//     const formData = await request.formData();
//     return NextResponse.json({
//         name: formData.get('name'),
//         email: formData.get('email'),
//         mobile: formData.get('mobile')
//     })
// }