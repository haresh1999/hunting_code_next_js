import pool from "@/lib/db";
import { NextResponse } from "next/server";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function GET(request: Request, { params }: Props) {
    const { slug } = await params;

    const [rows] = await pool.execute(
        "SELECT * FROM blogs WHERE slug = ?",
        [slug]
    );

    const blogs = rows as any[];
    const blog = blogs[0];


    if (!blog) {
        return NextResponse.json(
            {
                status: false,
                message: 'No blog found',
                data: null,
            },
            { status: 404 }
        );
    }

    return NextResponse.json(
        {
            status: true,
            data: blog,
            message: 'Blog found successfully',
        },
        { status: 200 }
    );
}
